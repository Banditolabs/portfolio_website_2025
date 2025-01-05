import { Link } from "expo-router";
import { StyleSheet, View } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import type { BlogPost } from "@/utils/mdx";

interface BlogPostCardProps {
  post: BlogPost;
}

export function BlogPostCard({ post }: BlogPostCardProps) {
  return (
    <View style={styles.card}>
      <Link
        href={{
          pathname: "/blog",
          params: { slug: post.slug },
        }}
        style={styles.link}
      >
        <ThemedText style={styles.title}>{post.title}</ThemedText>
        <ThemedText style={styles.date}>{post.date}</ThemedText>
        <ThemedText style={styles.excerpt}>{post.description}</ThemedText>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    width: "100%",
  },
  link: {
    textDecorationLine: "none",
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
