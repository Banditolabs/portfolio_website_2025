import { FlatList, type FlatListProps, View, Image } from "react-native";
import { useThemeColor } from "@/hooks/useThemeColor";

export type ThemedFlatListProps = FlatListProps & {
  lightColor?: string;
  darkColor?: string;
};

const Item = ({ item }) => {
  return <View style={styles.item}>{item.icon}</View>;
};

export function ThemedFlatList({
  style,
  lightColor,
  darkColor,
  ...otherProps
}: ThemedFlatListProps) {
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "background"
  );
  return <FlatList style={[{ backgroundColor }, style]} {...otherProps} />;
}
