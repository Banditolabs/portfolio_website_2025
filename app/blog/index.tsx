import { useNavigation, Link, Stack } from "expo-router";
import { Text, View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";
import { ThemedView } from "@/components/ThemedView";

export default function Blog() {
  return (
    <ScrollView>
      <SafeAreaView>
        <ThemedView style={[{ alignItems: "center", height: "100%" }]}>
          <View style={[styles.container, { maxWidth: 1280 }]}>
            <Text style={styles.heading}>Blog Posts</Text>
            {/* Add blog post entries here */}
            <View style={styles.blogPost}>
              <Link href={{ pathname: "/" }}>
                <Text> Home </Text>
              </Link>
              <View>
                <Text style={styles.title}>My First Blog Post</Text>
                <Text style={styles.date}>January 1, 2024</Text>
                <Text style={styles.excerpt}>
                  This is a preview of my first blog post...
                </Text>
              </View>
            </View>
          </View>
        </ThemedView>
      </SafeAreaView>
    </ScrollView>
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
