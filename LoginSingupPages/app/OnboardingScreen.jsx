import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

const OnboardingScreen = ({ navigation }) => {
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
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <View
            style={{
              borderColor: "black",
              borderWidth: 1,
            }}
          >
            <Text style={{ color: "#fff", fontSize: 18, fontWeight: "bold" }}>
              Skip
              <MaterialIcons
                name="keyboard-arrow-right"
                size={28}
                color="black"
              />
            </Text>
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
      <View>
        <View>
          <Image
            source={require("../assets/images/react-logo.png")}
            style={{ width: "70%", height: 300 }}
          />
        </View>
        <Text>Text is here for hero sections</Text>
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
    // top: 40,
    // right: 20,
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
});

export default OnboardingScreen;
