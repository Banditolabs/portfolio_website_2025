import {
  Text,
  type TextProps,
  StyleSheet,
  useWindowDimensions,
} from "react-native";
import { useThemeColor } from "@/src/hooks/useThemeColor";

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?:
    | "default"
    | "title"
    | "hero"
    | "heroBlog"
    | "mobileHeroBlog"
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
        type === "heroBlog" ? styles.heroBlog : undefined,
        type === "mobileHeroBlog" ? styles.mobileHeroBlog : undefined,
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
    fontFamily: "Pontano-Sans",
  },
  defaultSemiBold: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "600",
    fontFamily: "Stint-Ultra-Expanded",
  },
  title: {
    fontSize: 34,
    fontWeight: "bold",
    fontFamily: "Stint-Ultra-Expanded",
  },
  hero: {
    fontSize: 0,
    fontWeight: "bold",
    fontFamily: "Stint-Ultra-Expanded",
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "Stint-Ultra-Expanded",
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
    fontFamily: "Pontano-Sans",
  },
  skill: {
    lineHeight: 20,
    fontSize: 12,
    color: "#fff",
    fontFamily: "Pontano-Sans",
  },
  heroBlog: {
    fontSize: 75,
    fontFamily: "Ultra-Regular",
  },
  mobileHeroBlog: {
    fontSize: 32,
    fontFamily: "Ultra-Regular",
  },
});
