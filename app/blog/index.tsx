import { View, StyleSheet, Pressable } from "react-native";
import { ThemedView } from "@/src/components/ThemedView";
import { ThemedText } from "@/src/components/ThemedText";
import { useState, useEffect } from "react";
import { BlogPostCard } from "@/src/components/blog/BlogPostCard";
import { BlogHeroCard } from "@/src/components/blog/BlogHeroCard";
import { loadMarkdownFile } from "@/src/utils/markdownLoader";
import { blogPosts } from "@/src/data/blogPosts";
import type { LoadedBlogPost } from "@/src/types/blog";
import { router } from "expo-router";

export default function Blog() {
  const [loadedPosts, setLoadedPosts] = useState<LoadedBlogPost[]>([]);
  const [newestPost, setNewestPost] = useState<LoadedBlogPost | null>(null);

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
    <ThemedView id="blogView" style={[{ alignItems: "center", flex: 1 }]}>
      <View style={[styles.container, { maxWidth: 1280 }]}>
        <View>
          <ThemedText type="hero" style={styles.heading}>
            Blog Posts
          </ThemedText>
          <ThemedText type="subtitle" style={styles.subheading}>
            Thank you for visiting my blog
          </ThemedText>
        </View>
        <View style={styles.blogHero}>
          <View style={styles.newestPost}>
            {newestPost && <BlogHeroCard post={newestPost} />}
          </View>
          <View style={styles.recentBlogPosts}>
            {loadedPosts.length > 0 && (
              <ThemedText type="subtitle" style={styles.recentBlogPostsTitle}>
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
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: "10%",
    paddingTop: "5%",
    width: "100%",
  },
  heading: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 20,
  },
  subheading: {
    fontSize: 16,
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    paddingBottom: 20,
  },
  blogHero: {
    marginBottom: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    height: "80%",
  },
  newestPost: {
    flexDirection: "column",
    justifyContent: "space-between",
    display: "flex",
    marginTop: 20,
    marginRight: 20,
    width: "70%",
    height: 800,
  },
  recentBlogPostsTitle: {
    marginBottom: 20,
  },
  recentBlogPosts: {
    flexDirection: "column",
  },
});
