import {
  View,
  StyleSheet,
  Pressable,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { ThemedView } from "@/src/components/ThemedView";
import { ThemedText } from "@/src/components/ThemedText";
import { useState, useEffect } from "react";
import { BlogPostCard } from "@/src/components/blog/BlogPostCard";
import { BlogHeroCard } from "@/src/components/blog/BlogHeroCard";
import { loadMarkdownFile } from "@/src/utils/markdownLoader";
import { blogPosts } from "@/src/data/blogPosts";
import type { LoadedBlogPost } from "@/src/types/blog";
import { router } from "expo-router";
import { useIsMobile } from "@/src/hooks/useIsMobile";
import { MobileHeroCard } from "@/src/components/blog/MobileHeroCard";

export default function Blog() {
  const [loadedPosts, setLoadedPosts] = useState<LoadedBlogPost[]>([]);
  const [newestPost, setNewestPost] = useState<LoadedBlogPost | null>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    const loadPosts = async () => {
      const loadedPosts = await Promise.all(
        blogPosts.map(async (post) => {
          const content = await loadMarkdownFile(post.contentPath);
          return {
            id: post.id,
            title: post.title,
            date: post.date,
            description: post.description,
            slug: post.slug,
            tags: post.tags,
            image: post.image,
            content: content || "",
          };
        })
      );
      const newestPost = loadedPosts[0];
      setNewestPost(newestPost);
      setLoadedPosts(loadedPosts);
    };
    loadPosts();
  }, []);

  useEffect(() => {
    console.log(newestPost);
  }, [newestPost]);

  return (
    <ThemedView
      id="blogView"
      style={[styles.container, { alignItems: "center" }]}
    >
      <ScrollView style={[styles.scrollView]}>
        <View style={{ alignItems: "center", minHeight: "100%" }}>
          <View
            style={[
              styles.bodyContainer,
              { maxWidth: 1280, padding: isMobile ? 20 : 0 },
            ]}
          >
            <View>
              <ThemedText
                type="hero"
                style={[styles.heading, isMobile && styles.headingMobile]}
              >
                Blog Posts
              </ThemedText>
              <ThemedText type="subtitle" style={styles.subheading}>
                Thank you for visiting my blog
              </ThemedText>
            </View>
            <View
              style={[
                styles.blogHero,
                {
                  flexDirection: isMobile ? "column" : "row",
                  gap: isMobile ? 20 : 40,
                },
              ]}
            >
              <View
                style={[
                  styles.newestPost,
                  { width: isMobile ? "100%" : "70%" },
                ]}
              >
                {isMobile
                  ? newestPost && <MobileHeroCard post={newestPost} />
                  : newestPost && <BlogHeroCard post={newestPost} />}
              </View>
              <View style={[styles.recentBlogPosts]}>
                {loadedPosts.length > 0 && (
                  <ThemedText
                    type="subtitle"
                    style={styles.recentBlogPostsTitle}
                  >
                    Recent Blog Posts
                  </ThemedText>
                )}
                {loadedPosts.slice(0, 3).map((post) => (
                  <Pressable
                    key={post.id}
                    onPress={() => router.push(`/blog/${post.slug}`)}
                  >
                    <BlogPostCard post={post} />
                  </Pressable>
                ))}
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    height: "100%",
    width: "100%",
  },
  scrollView: {
    flexGrow: 1,
    width: "100%",
  },
  container: {
    flex: 1,
    height: "100%",
    paddingTop: 50,
  },
  bodyContainer: {
    flex: 1,
    flexDirection: "column",
    flexWrap: "wrap",
    width: "100%",
  },
  heading: {
    fontWeight: "bold",
    marginBottom: 20,
    width: "100%",
  },
  headingMobile: {
    fontSize: 24,
    marginBottom: 10,
  },
  subheading: {
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    paddingBottom: 20,
  },
  blogHero: {
    marginBottom: 20,
    display: "flex",
    flexDirection: "row",
  },
  newestPost: {
    flexDirection: "column",
    display: "flex",
    marginTop: 20,
    marginRight: 20,
    height: 800,
  },
  recentBlogPostsTitle: {
    marginBottom: 20,
  },
  recentBlogPosts: {
    flexDirection: "column",
  },
});
