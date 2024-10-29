import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ReusableText } from "../../index";

const explore = () => {
  return (
    <SafeAreaView>
      <ReusableText text="Exlpore" family={"medium"} color="red" size={20} />
      <Text>Explore</Text>
    </SafeAreaView>
  );
};

export default explore;

const styles = StyleSheet.create({});
