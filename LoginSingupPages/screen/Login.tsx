import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";

const LoginScreen = () => {
  return (
    <View>
      <Text>Login To Your Account</Text>
      <View>
        <TextInput>Email:</TextInput>
        <TextInput>Password:</TextInput>
        <TextInput>Forgot Password?</TextInput>
        <Text>Don't have an account? Sign Up</Text>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
