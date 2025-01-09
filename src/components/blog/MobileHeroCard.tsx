import { View, StyleSheet, Pressable, ImageBackground } from "react-native";
import { ThemedView } from "@/src/components/ThemedView";
import { ThemedText } from "@/src/components/ThemedText";
import { LoadedBlogPost } from "@/src/types/blog";
import { router } from "expo-router";
import { Colors } from "@/constants/Colors";
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
          <ThemedText style={styles.title} type="heroBlog">
            {post.title}
          </ThemedText>
          <ThemedText style={styles.date} type="subtext">
            {post.date}
          </ThemedText>
          <ThemedText style={styles.description} type="subtitle">
            {post.description}
          </ThemedText>
        </ImageBackground>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "100%",
    height: 375, // Adjust this height as needed
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
    bottom: -40,
    right: -10,
    textAlign: "right",
    lineHeight: 65,
    marginBottom: 8,
  },
  date: {
    position: "absolute",
    top: -25,
    fontSize: 14,
    color: Colors.dark.accentBlue,
    marginBottom: 8,
  },
  description: {
    position: "absolute",
    bottom: -100,
    color: "#fff",
    marginBottom: 8,
  },
});
