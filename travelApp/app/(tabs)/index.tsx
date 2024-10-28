import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import { SplashScreen, Tabs } from "expo-router";
import { useCallback } from "react";
import React from "react";
import OnBoarding from "@/components/onboarding/onboarding";
// creating stack navigator with createNativeStackNavigator
// const Stack = createNativeStackNavigator();

export default function Index() {
  // loading the fonts from local assets
  // const [fontsLoaded] = useFonts({
  // regular: require("@/assets/fonts/regular.otf"),
  // medium: require("@/assets/fonts/medium.otf"),
  // bold: require("@/assets/fonts/bold.otf"),
  // light: require("@/assets/fonts/light.otf"),
  // xtrabold: require("@/assets/fonts/xtrabold.otf"),
  // });

  // // loading fonts after splashscreen
  // const onLayoutRootView = useCallback(async () => {
  //   if (!fontsLoaded) {
  //     await SplashScreen.hideAsync();
  //   }
  // }, [fontsLoaded]);

  // // load nothing if fonts are not loaded
  // if (!fontsLoaded) {
  //   return null;
  // }

  return (
    // <NavigationContainer>
    // <Stack.Navigator>
    <View style={styles.container}>
      <OnBoarding />
    </View>

    // </Stack.Navigator>
    // </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textStyle: {
    fontFamily: "medium",
    fontSize: 24,
    color: "#333",
  },
});
