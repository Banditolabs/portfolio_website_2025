import { View, StyleSheet } from "react-native";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import { getAllPosts, BlogPost } from "@/utils/mdx";
import { useState, useEffect } from "react";
import { BlogPostCard } from "@/components/BlogPostCard";

export default function Blog() {
  const [posts, setPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    async function loadPosts() {
      const allPosts = await getAllPosts();
      setPosts(allPosts);
    }
    loadPosts();
  }, []);
  console.log(posts);
  return (
    <ThemedView id="blogView" style={[{ alignItems: "center", flex: 1 }]}>
      <View style={[styles.container, { maxWidth: 1280 }]}>
        <View>
          <ThemedText style={styles.heading}>Blog Posts</ThemedText>
        </View>
        {/* Add blog post entries here */}
        {posts.map((post) => (
          <BlogPostCard key={post.slug} post={post} />
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
  blogPost: {
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    paddingVertical: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    marginBottom: 8,
  },
  date: {
    fontSize: 14,
    color: "#666",
    marginBottom: 8,
  },
  excerpt: {
    fontSize: 16,
    lineHeight: 24,
  },
});
