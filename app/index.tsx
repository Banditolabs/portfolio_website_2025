import { View, StyleSheet, useWindowDimensions } from "react-native";
import { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";
import { ThemedView } from "@/src/components/ThemedView";
import { Experience } from "@/src/components/Experience";
import { About } from "@/src/components/About";
import { NameAndTitle } from "@/src/components/NameAndTitle";
import { Icons } from "@/src/components/Icons";
import ProfileImage from "@/src/components/ProfileImage";
import { useIsMobile } from "@/src/hooks/useIsMobile";

export default function Index() {
  const isMobile = useIsMobile();

  return (
    <ScrollView>
      <SafeAreaView>
        <ThemedView style={[{ alignItems: "center", height: "100%" }]}>
          <View style={[styles.bodyContainer, { maxWidth: 1280 }]}>
            <View
              style={[styles.bodyColumn, { width: isMobile ? "100%" : "50%" }]}
            >
              <ThemedView
                style={[
                  styles.nameColumn,
                  isMobile && styles.nameColumnMobile,
                  isMobile && { justifyContent: "center" },
                ]}
              >
                <NameAndTitle />
                <View style={[{ flexDirection: "column", gap: 20 }]}>
                  <View
                    style={[
                      { flexDirection: "column", gap: 20 },
                      isMobile && { justifyContent: "center" },
                    ]}
                  >
                    <ProfileImage />
                  </View>
                  <Icons />
                </View>
              </ThemedView>
            </View>
            <View
              style={[styles.bodyColumn, { width: isMobile ? "100%" : "50%" }]}
            >
              <View
                style={[styles.infoColumn, isMobile && styles.infoColumnMobile]}
              >
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
    marginTop: "15%",
  },
  nameColumn: {
    flexDirection: "row",
    flexWrap: "wrap",
    margin: 20,
    paddingLeft: "20%",
    top: 50,
    position: "sticky",
  },
  nameColumnMobile: {
    paddingLeft: 0,
  },
  infoColumnMobile: {
    marginRight: 0,
    marginTop: 20,
    paddingHorizontal: 20,
  },
});
