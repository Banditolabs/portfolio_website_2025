import { View, StyleSheet, ScrollView } from "react-native";
import { ThemedView } from "@/src/components/ThemedView";
import { ThemedText } from "@/src/components/ThemedText";
import { useEffect, useState } from "react";
import { blogPosts } from "@/src/data/blogPosts";
import { loadMarkdownFile } from "@/src/utils/markdownLoader";
import type { LoadedBlogPost } from "@/src/types/blog";
import { useLocalSearchParams, Link } from "expo-router";
import Markdown from "react-native-markdown-display";
import { Colors } from "@/constants/Colors";

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
    <ScrollView>
      <ThemedView style={styles.container}>
        <View style={styles.content}>
          <ThemedText style={styles.title}>{post.title}</ThemedText>
          <View style={styles.headingContainer}>
            <ThemedText
              style={styles.date}
            >{`Star Date:  ${post.date}`}</ThemedText>
            <View>
              <Link href="/blog">
                <ThemedText type="link">[ Blog ] </ThemedText>
              </Link>
            </View>
          </View>
          <ThemedText>
            <Markdown style={markdownStyles}>{post.content}</Markdown>
          </ThemedText>
        </View>
      </ThemedView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  headingContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  content: {
    maxWidth: 721,
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
    paddingTop: 10,
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

const markdownStyles = {
  heading1: {
    marginTop: 40,
    marginBottom: 20,
    fontSize: 32,
    fontWeight: "bold",
  },
  heading2: {
    marginTop: 32,
    fontSize: 24,
    fontWeight: "bold",
    color: Colors.dark.accentBlue,
    fontFamily: "Stint-Ultra-Expanded",
  },
  heading3: {
    marginTop: 24,
    marginBottom: 12,
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: "Stint-Ultra-Expanded",
  },
  paragraph: {
    marginBottom: 16,
    lineHeight: 24,
    fontFamily: "Pontano-Sans",
  },
  fence: {
    //bug in the library, this styles the code block
    backgroundColor: "#000000",
  },
};
