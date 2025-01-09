import { StyleSheet, View, ImageBackground, Pressable } from "react-native";
import { ThemedText } from "@/src/components/ThemedText";
import type { LoadedBlogPost } from "@/src/types/blog";
import { router } from "expo-router";

interface BlogHeroCardProps {
  post: LoadedBlogPost;
}

export function BlogHeroCard({ post }: BlogHeroCardProps) {
  return (
    <Pressable key={post.id} onPress={() => router.push(`/blog/${post.slug}`)}>
      <View style={styles.card}>
        <ImageBackground source={post.image} style={styles.image}>
          <ThemedText style={styles.title} type="heroBlog">
            {post.title}
          </ThemedText>
          <ThemedText style={styles.date} type="subtext">
            {`Star Date:  ${post.date}`}
          </ThemedText>
          <ThemedText style={styles.description} type="subtitle">
            {post.description}
          </ThemedText>
        </ImageBackground>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 20,
    width: "100%",
    height: 400,
  },
  title: {
    position: "absolute",
    bottom: -50,
    right: -10,
    textAlign: "right",
    marginBottom: 8,
  },
  date: {
    position: "absolute",
    top: -25,
    fontSize: 14,
    color: "#fff",
    marginBottom: 8,
  },
  description: {
    position: "absolute",
    bottom: -70,
    color: "#fff",
    marginBottom: 8,
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
});
