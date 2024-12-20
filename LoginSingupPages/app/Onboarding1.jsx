import React, { useState } from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { Link } from "expo-router";
import Login from "./Login";

export default function OnboardingScreen() {
  return (
    <View>

      
      <Link href="/Login" asChild>
        <Pressable>
          <Text>Home</Text>
        </Pressable>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 200,
  },
  skipButton: {
    position: "absolute",
    top: 50,
    right: 20,
    padding: 10,
  },
  skipText: {
    color: "#000",
    fontSize: 16,
    fontWeight: "bold",
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 40,
  },
  emoji: {
    fontSize: 80,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    color: "#000",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: "center",
    color: "#000",
    marginBottom: 20,
  },
  pagination: {
    flexDirection: "row",
    marginBottom: 50,
  },
  paginationDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    marginHorizontal: 5,
  },
  paginationDotActive: {
    backgroundColor: "#000",
  },
  nextButton: {
    backgroundColor: "#000",
    paddingHorizontal: 40,
    paddingVertical: 15,
    borderRadius: 25,
    marginBottom: 50,
  },
  nextButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
