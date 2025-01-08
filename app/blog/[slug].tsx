import { View, StyleSheet } from "react-native";
import { ThemedView } from "@/src/components/ThemedView";
import { ThemedText } from "@/src/components/ThemedText";
import { useEffect, useState } from "react";
import { blogPosts } from "@/src/data/blogPosts";
import { loadMarkdownFile } from "@/src/utils/markdownLoader";
import type { LoadedBlogPost } from "@/src/types/blog";
import { useLocalSearchParams } from "expo-router";
import Markdown from "react-native-markdown-display";

export default function BlogPostPage() {
  const { slug } = useLocalSearchParams();
  const [post, setPost] = useState<LoadedBlogPost | null>(null);

  useEffect(() => {
    const loadPost = async () => {
      const postData = blogPosts.find((p) => p.slug === slug);
      if (!postData) return;

      const content = await loadMarkdownFile(postData.contentPath);
      setPost({
        id: postData.id,
        title: postData.title,
        date: postData.date,
        description: postData.description,
        slug: postData.slug,
        tags: postData.tags,
        image: postData.image,
        content: content || "",
      });
    };

    loadPost();
  }, [slug]);

  if (!post) {
    return (
      <ThemedView style={styles.container}>
        <ThemedText>Loading...</ThemedText>
      </ThemedView>
    );
  }

  return (
    <ThemedView style={styles.container}>
      <View style={styles.content}>
        <ThemedText style={styles.title}>{post.title}</ThemedText>
        <ThemedText style={styles.date}>{post.date}</ThemedText>
        <View style={styles.tags}>
          {post.tags.map((tag, index) => (
            <ThemedText key={`${tag}-${index}`} style={styles.tag}>
              #{tag}
            </ThemedText>
          ))}
        </View>
        <ThemedText>
          <Markdown>{post.content}</Markdown>
        </ThemedText>
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  content: {
    maxWidth: 1280,
    width: "100%",
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 8,
  },
  date: {
    fontSize: 14,
    color: "#666",
    marginBottom: 16,
  },
  tags: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    marginBottom: 24,
  },
  tag: {
    fontSize: 14,
    color: "#0066cc",
  },
});
