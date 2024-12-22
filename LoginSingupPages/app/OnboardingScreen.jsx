import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";

const OnboardingScreen = () => {
  return (
    <View style={[styles.container, { backgroundColor: "#346df6" }]}>
      {/* Background Gradient */}
      <LinearGradient
        colors={["#4c669f", "#3b5998", "#192f6a"]}
        style={StyleSheet.absoluteFillObject}
      />
      <TouchableOpacity
        style={styles.skipButton}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.skipText}>Skip</Text>
      </TouchableOpacity>
      {/* Foreground Logo */}
      <View style={styles.logoContainer}>
        <Image
          source={require("../assets/images/icon.png")}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      {/* Content Container */}
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Welcome to LoginApp</Text>
        <Text style={styles.description}>
          Your secure gateway to seamless authentication. Create an account or
          sign in to get started!
        </Text>

        {/* Illustration Box */}
        <View style={styles.illustrationBox}>
          <Ionicons name="shield-checkmark" size={60} color="#4CAF50" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
  },
  logoContainer: {
    position: "absolute",
    top: "10%",
    width: "100%",
    alignItems: "center",
  },
  logo: {
    width: 600,
    height: 120,
  },
  contentContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#ffffff",
    marginBottom: 20,
    textAlign: "center",
  },
  description: {
    fontSize: 16,
    color: "#ffffff",
    textAlign: "center",
    marginBottom: 30,
    lineHeight: 24,
  },
  illustrationBox: {
    width: 100,
    height: 100,
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  skipButton: {
    position: "absolute",
    top: 50,
    right: 20,
    zIndex: 1,
    padding: 10,
  },
  skipText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "600",
  },
});

export default OnboardingScreen;
