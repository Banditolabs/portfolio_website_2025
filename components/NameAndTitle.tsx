import { View, StyleSheet } from "react-native";
import { ThemedText } from "@/components/ThemedText";

export function NameAndTitle() {
  return (
    <View style={[styles.nameContainer]}>
      <ThemedText type="title" style={[styles.nameItem]}>
        Joshua Goss
      </ThemedText>
      <ThemedText type="subtitle" style={[styles.nameItem]}>
        Software Engineer | Fullstack
      </ThemedText>
      <ThemedText type="default" style={[]}>
        I love meaningful outcomes from the code I write.
      </ThemedText>
    </View>
  );
}

const styles = StyleSheet.create({
  nameContainer: {
    width: "100%",
    marginBottom: 20,
  },
  nameItem: {
    marginBottom: 10,
    display: "flex",
    justifyContent: "flex-start",
  },
});
