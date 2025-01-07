import { View, Image, StyleSheet } from "react-native";
import { ThemedText } from "@/src/components/ThemedText";
import { ThemedView } from "@/src/components/ThemedView";
import { useThemeColor } from "@/hooks/useThemeColor";

export type ProjectFrameProps = {
  text: string;
  image_source: string;
  lightColor?: string;
  darkColor?: string;
  type?: "default";
};

export function ProjectFrame({
  text,
  image_source,
  lightColor,
  darkColor,
}: ProjectFrameProps) {
  const borderColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "text"
  );
  return (
    <ThemedView style={[styles.container, { borderColor }]}>
      <ThemedView style={[styles.frame, { borderColor }]}>
        <Image
          style={{ height: 50, width: 50 }}
          source={require("@/assets/images/rails.svg")}
        />
      </ThemedView>
      <ThemedView style={{ padding: 10, width: 155 }}>
        <ThemedText>{text}</ThemedText>
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderStyle: "solid",
    borderColor: "#fff",
    borderWidth: 0.5,
  },
  frame: {
    backgroundColor: "#eee",
    borderRadius: 10,
    overflow: "hidden",
  },
});
