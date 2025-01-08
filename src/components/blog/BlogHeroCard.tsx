import { StyleSheet, View, ImageBackground, Pressable } from "react-native";
import { ThemedText } from "@/src/components/ThemedText";
import type { LoadedBlogPost } from "@/src/types/blog";
import { router } from "expo-router";

interface BlogHeroCardProps {
  post: LoadedBlogPost;
}

export function BlogHeroCard({ post }: BlogHeroCardProps) {
  return (
    <View style={styles.card}>
      <Pressable
        key={post.id}
        onPress={() => router.push(`/blog/${post.slug}`)}
        style={{ flex: 1 }}
      >
        <ImageBackground source={post.image} style={styles.image}>
          <ThemedText style={styles.title} type="hero">
            {post.title}
          </ThemedText>
          <ThemedText style={styles.date} type="subtext">
            {post.date}
          </ThemedText>
        </ImageBackground>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 20,
    width: "100%",
    height: 400,
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    marginBottom: 20,
  },
  date: {
    fontSize: 14,
    color: "#666",
    marginBottom: 8,
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
});
