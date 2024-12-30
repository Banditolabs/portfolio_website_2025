import { useNavigation, Link, Stack } from "expo-router";
import * as NavigationBar from "expo-navigation-bar";
import {
  Text,
  View,
  Button,
  Image,
  StyleSheet,
  ImageBackground,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";
import { ThemedView } from "@/components/ThemedView";
import { Experience } from "@/components/Experience";
import { About } from "@/components/About";
import { NameAndTitle } from "@/components/NameAndTitle";
import { Icons } from "@/components/Icons";

export default function Index() {
  return (
    <ScrollView>
      <SafeAreaView>
        <ThemedView style={[{ alignItems: "center", height: "100%" }]}>
          <View style={[styles.bodyContainer, { maxWidth: 1280 }]}>
            <View style={[styles.bodyColumn]}>
              <ThemedView style={[styles.nameColumn]}>
                <NameAndTitle />
                <Icons />
              </ThemedView>
            </View>
            <View style={[styles.bodyColumn]}>
              <View style={[styles.infoColumn]}>
                <About />
                <Experience />
              </View>
            </View>
          </View>
        </ThemedView>
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  bodyContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    height: "100%",
  },
  bodyColumn: {
    width: "50%",
  },
  infoColumn: {
    marginRight: 30,
    marginTop: 20,
  },
  nameColumn: {
    flexDirection: "row",
    flexWrap: "wrap",
    margin: 20,
    paddingLeft: "20%",
    top: 20,
    position: "sticky",
  },
});
