import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const OnboardingScreenTwo = ({ navigation }) => {
  const [progress] = useState(0.33); // Add more states if you have multiple screens
  return (
    <View style={styles.container}>
      <View
        style={{
          justifyContent: "center",
          alignItems: "space-between",
          height: 50,
          marginHorizontal: 14,
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.navigate("OnboardingScreenThree")}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <Text style={{ color: "#fff", fontSize: 16, fontWeight: "bold" }}>
              Skip
            </Text>
            <MaterialIcons
              name="keyboard-arrow-right"
              size={28}
              color="black"
              style={{ color: "#fff" }}
            />
          </View>
        </TouchableOpacity>
        {/* Progress Bar */}
        <View
          style={[
            styles.progressContainer,
            { borderColor: "#fff", borderWidth: 1 },
          ]}
        >
          <View
            style={[
              styles.progressBar,
              { backgroundColor: "#ffffff", width: `${progress * 100}%` },
            ]}
          />
        </View>
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.titleText}>Start Your Online Presence</Text>
          <Text style={styles.subtitleText}>Register or SignUp</Text>
        </View>
        <View style={styles.imageContainer}>
          <Image
            source={require("../assets/images/PLang__logos_image.jpg")}
            style={styles.image}
            resizeMode="contain"
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#346df6",
  },
  progressContainer: {
    position: "absolute",
    width: 100,
    height: 6,
    backgroundColor: "rgba(255,255,255,0.3)",
    borderRadius: 3,
    overflow: "hidden",
    borderColor: "#fff",
    borderWidth: 1,
  },
  progressBar: {
    height: "100%",
    backgroundColor: "#fff",
    borderRadius: 3,
  },
  contentContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  textContainer: {
    alignItems: "center",
    marginBottom: 30,
  },
  titleText: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
    color: "#fff",
  },
  subtitleText: {
    fontSize: 16,
    textAlign: "center",
    color: "#fff",
  },
  imageContainer: {
    width: "100%",
    alignItems: "center",
  },
  image: {
    width: "70%",
    height: 300,
  },
});

export default OnboardingScreenTwo;
