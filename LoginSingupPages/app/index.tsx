import { StyleSheet, Text, View } from "react-native";
import React from "react";
// import Login from "./Login";

import OnboardingScreen from "./OnboardingScreen";
import { Stack } from "expo-router";
const Page = () => {
  return (
    <View style={{ flex: 1 }}>
      <OnboardingScreen />
    </View>
  );
};

export default Page;

const styles = StyleSheet.create({});
