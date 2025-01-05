import { useLocalSearchParams } from "expo-router";
import { useState, useEffect } from "react";
import { View } from "react-native";
import { getPostBySlug } from "@/utils/mdx";
import { BlogPost } from "@/utils/mdx";
import { ThemedText } from "@/components/ThemedText";

export default function BlogPostPage() {
  const { slug } = useLocalSearchParams();
  const [post, setPost] = useState<BlogPost | null>(null);

  useEffect(() => {
    async function loadPost() {
      if (typeof slug === "string") {
        const post = await getPostBySlug(slug);
        setPost(post || null);
      }
    }
    loadPost();
  }, [slug]);

  if (!post) return null;

  return (
    <View>
      <ThemedText>{post.title}</ThemedText>
      <ThemedText>{post.content}</ThemedText>
    </View>
  );
}
