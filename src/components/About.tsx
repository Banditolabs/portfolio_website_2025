import { View, StyleSheet } from "react-native";
import { ThemedText } from "@/src/components/ThemedText";
import { about } from "@/constants/About";

export function About() {
  return (
    <View style={[styles.aboutContainer]}>
      <ThemedText type={"subtitle"} style={{ marginBottom: 10 }}>
        About Me
      </ThemedText>
      <ThemedText style={[styles.aboutItem]}>{about.p1}</ThemedText>
      <ThemedText style={[styles.aboutItem, { color: "#94a3b8" }]}>
        {about.p2}
      </ThemedText>
      <ThemedText style={[styles.aboutItem]}>{about.p3}</ThemedText>
      <ThemedText style={[styles.aboutItem, { color: "#94a3b8" }]}>
        {about.p4}
      </ThemedText>
    </View>
  );
}

const styles = StyleSheet.create({
  aboutContainer: {
    marginBottom: "20%",
  },
  aboutItem: {
    marginBottom: 10,
  },
});
