import {
  Text,
  type TextProps,
  StyleSheet,
  useWindowDimensions,
} from "react-native";

import { useThemeColor } from "@/hooks/useThemeColor";

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?:
    | "default"
    | "title"
    | "hero"
    | "defaultSemiBold"
    | "subtitle"
    | "link"
    | "subtext"
    | "skill";
};

export function ThemedText({
  style,
  lightColor,
  darkColor,
  type = "default",
  ...rest
}: ThemedTextProps) {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, "text");

  return (
    <Text
      style={[
        { height: "auto" },
        { color },
        type === "default" ? styles.default : undefined,
        type === "title" ? styles.title : undefined,
        type === "hero" ? styles.hero : undefined,
        type === "defaultSemiBold" ? styles.defaultSemiBold : undefined,
        type === "subtitle" ? styles.subtitle : undefined,
        type === "link" ? styles.link : undefined,
        type === "subtext" ? styles.subtext : undefined,
        type === "skill" ? styles.skill : undefined,
        style,
      ]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  default: {
    fontSize: 16,
    lineHeight: 24,
  },
  defaultSemiBold: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "600",
  },
  title: {
    fontSize: 34,
    fontWeight: "bold",
  },
  hero: {
    fontSize: 40,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  link: {
    lineHeight: 30,
    fontSize: 16,
    color: "#0a7ea4",
  },
  subtext: {
    lineHeight: 21,
    fontSize: 14,
    color: "#94a3b8",
  },
  skill: {
    lineHeight: 20,
    fontSize: 12,
    color: "#fff",
  },
});
