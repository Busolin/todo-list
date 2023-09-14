import { StatusBar } from "expo-status-bar";
import { Home } from "./src/screens/Home";
import { useFonts } from "expo-font";

import { useCallback } from "react";
import { Text, View, StyleSheet } from "react-native";
import * as SplashScreen from "expo-splash-screen";

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    "Inter-Regular": require("./assets/fonts/Inter-Regular.otf"),
    "Inter-Bold": require("./assets/fonts/Inter-Bold.otf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <>
      <StatusBar backgroundColor="transparent" translucent style="light" />
      <Home />
    </>
  );
}
