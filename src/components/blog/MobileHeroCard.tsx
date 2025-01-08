import { View, StyleSheet, Pressable, ImageBackground } from "react-native";
import { ThemedView } from "@/src/components/ThemedView";
import { ThemedText } from "@/src/components/ThemedText";
import { LoadedBlogPost } from "@/src/types/blog";
import { router } from "expo-router";

interface MobileHeroCardProps {
  post: LoadedBlogPost;
}

export function MobileHeroCard({ post }: MobileHeroCardProps) {
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
    width: "100%",
    height: 400, // Adjust this height as needed
    marginBottom: 20,
  },
  image: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "flex-end", // Aligns content to bottom
  },
  imageStyle: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  overlay: {
    padding: 20,
    backgroundColor: "rgba(0, 0, 0, 0.4)", // Dark overlay for better text visibility
    width: "100%",
  },
  title: {
    position: "absolute",
    bottom: -70,
    right: -10,
    fontSize: 60,
    textAlign: "right",
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 8,
  },
  date: {
    fontSize: 14,
    color: "#FFFFFF",
    opacity: 0.8,
  },
});
