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
import { Link, router } from "expo-router";
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
        <View style={{ alignItems: "center" }}>
          <View
            style={[
              styles.bodyContainer,
              { maxWidth: 1280, padding: isMobile ? 20 : 0 },
            ]}
          >
            <View style={{ marginHorizontal: isMobile ? 0 : 20 }}>
              <ThemedText
                type="hero"
                style={[styles.heading, isMobile && styles.headingMobile]}
              >
                [ Coder's Log ]
              </ThemedText>
              <View style={styles.headerContainer}>
                <ThemedText
                  type="subtitle"
                  style={isMobile ? styles.mobileSubheading : styles.subheading}
                >
                  Make It So
                </ThemedText>
                <View style={styles.headerOptions}>
                  <Link href="/">
                    <ThemedText type={"link"}>Home</ThemedText>
                  </Link>
                </View>
              </View>
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
                  {
                    width: isMobile ? "100%" : "70%",
                    height: isMobile ? 500 : 800,
                  },
                ]}
              >
                {isMobile
                  ? newestPost && <MobileHeroCard post={newestPost} />
                  : newestPost && <BlogHeroCard post={newestPost} />}
              </View>
              <View style={[styles.recentBlogPosts]}>
                {loadedPosts.length > 1 && (
                  <ThemedText
                    type="subtitle"
                    style={
                      isMobile
                        ? styles.mobileRecentBlogPostsTitle
                        : styles.recentBlogPostsTitle
                    }
                  >
                    Recent Blog Posts
                  </ThemedText>
                )}
                {loadedPosts.slice(1, 3).map((post) => (
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
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  headerOptions: {
    flexDirection: "row",
    gap: 20,
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
    marginBottom: 10,
    fontSize: 30,
  },
  subheading: {
    borderBottomColor: "#ccc",
    marginBottom: 10,
    marginLeft: 20,
  },
  mobileSubheading: {
    fontSize: 15,
    marginLeft: 20,
  },
  blogHero: {
    marginBottom: 20,
    display: "flex",
    flexDirection: "row",
  },
  newestPost: {
    flexDirection: "column",
    display: "flex",
    marginTop: 40,
    marginRight: 20,
  },
  recentBlogPostsTitle: {
    marginBottom: 20,
  },
  mobileRecentBlogPostsTitle: {
    marginTop: 30,
  },
  recentBlogPosts: {
    flexDirection: "column",
  },
});
