import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Login from "./Login";
import SignUp from "./SignUp";

const Page = () => {
  return (
    <View>
      <Login />
      {/* <SignUp /> */}
    </View>
  );
};

export default Page;

const styles = StyleSheet.create({});
