import { View, StyleSheet, Pressable } from "react-native";
import { ThemedView } from "@/src/components/ThemedView";
import { ThemedText } from "@/src/components/ThemedText";
import { useState, useEffect } from "react";
import { BlogPostCard } from "@/src/components/BlogPostCard";
import { loadMarkdownFile } from "@/src/utils/markdownLoader";
import { blogPosts } from "@/src/data/blogPosts";
import type { LoadedBlogPost } from "@/src/types/blog";
import { router } from "expo-router";

export default function Blog() {
  const [loadedPosts, setLoadedPosts] = useState<LoadedBlogPost[]>([]);

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
            content: content || "",
          };
        })
      );
      setLoadedPosts(loadedPosts);
    };
    loadPosts();
  }, []);

  return (
    <ThemedView id="blogView" style={[{ alignItems: "center", flex: 1 }]}>
      <View style={[styles.container, { maxWidth: 1280 }]}>
        <View>
          <ThemedText style={styles.heading}>Blog Posts</ThemedText>
        </View>
        {loadedPosts.map((post) => (
          <Pressable
            key={post.id}
            onPress={() => router.push(`/blog/${post.slug}`)}
          >
            <BlogPostCard post={post} />
          </Pressable>
        ))}
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    width: "100%",
  },
  heading: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 20,
  },
});
