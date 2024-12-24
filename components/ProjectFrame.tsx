import { View, Image } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

import { useThemeColor } from "@/hooks/useThemeColor";

export type ProjectFrameProps = {
  text: string;
  image_source: string;
  lightColor?: string;
  darkColor?: string;
  type?: "default";
};

export function ProjectFrame({ text, image_source }: ProjectFrameProps) {
  return (
    <ThemedView
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        borderStyle: "solid",
        borderColor: "#fff",
        borderWidth: 0.5,
      }}
    >
      <ThemedView
        style={{
          backgroundColor: "#eee",
          borderRadius: 10,
          overflow: "hidden",
        }}
      >
        <Image
          style={{ height: 50, width: 50 }}
          source={require("@/assets/images/rails.svg")}
        />
      </ThemedView>
      <ThemedView style={{ padding: 10, width: 155 }}>
        <ThemedText>Testing</ThemedText>
      </ThemedView>
    </ThemedView>
  );
}
