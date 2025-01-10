import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import { useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    "Stint-Ultra-Expanded": require("@/assets/fonts/StintUltraExpanded-Regular.ttf"),
    "Pontano-Sans": require("@/assets/fonts/PontanoSans-VariableFont_wght.ttf"),
    "LilitaOne-Regular": require("@/assets/fonts/LilitaOne-Regular.ttf"),
    "Ultra-Regular": require("@/assets/fonts/Ultra-Regular.ttf"),
  });
  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    />
  );
}
