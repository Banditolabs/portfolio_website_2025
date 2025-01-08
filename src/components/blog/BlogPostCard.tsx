import { StyleSheet, View, Image } from "react-native";
import { ThemedText } from "@/src/components/ThemedText";
import type { LoadedBlogPost } from "@/src/types/blog";

interface BlogPostCardProps {
  post: LoadedBlogPost;
}

export function BlogPostCard({ post }: BlogPostCardProps) {
  return (
    <View style={styles.card}>
      <ThemedText style={styles.title} type="title">
        {post.title}
      </ThemedText>
      <ThemedText style={styles.date} type="subtext">
        {post.date}
      </ThemedText>
      <Image source={post.image} style={styles.image} />
      <ThemedText style={styles.excerpt}>{post.description}</ThemedText>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 20,
    borderBottomWidth: 0.5,
    borderColor: "#ECEDEE",
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
  image: {
    width: "100%",
    height: 200,
  },
});
