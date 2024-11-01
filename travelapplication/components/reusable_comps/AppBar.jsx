import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import reusable_styles from "./reusable_style";
import Feather from "@expo/vector-icons/Feather";
import ReusableText from "./Reusable_text";
import AntDesign from "@expo/vector-icons/AntDesign";

const AppBar = ({ color, color1, title, icon, onPress, onPress1 }) => {
  return (
    <View style={styles.overlay}>
      <View style={reusable_styles.rowWithSpace("space-between")}>
        <TouchableOpacity style={styles.box(color)} onPress={onPress}>
          <AntDesign name="left" size={26} />
        </TouchableOpacity>
        <ReusableText text={title} size={18} family={"medium"} color="black" />
        <TouchableOpacity style={styles.box1(color1)} onPress={onPress1}>
          <Feather name={icon} size={22} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AppBar;

const styles = StyleSheet.create({
  overlay: {
    position: "absolute",
    top: 15,
    left: 0,
    right: 0,
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  box: (color) => ({
    backgroundColor: color,
    width: 30,
    height: 30,
    borderRadius: 9,
    alignItems: "center",
    justifyContent: "center",
  }),
  box1: (color1) => ({
    backgroundColor: color1,
    width: 30,
    height: 30,
    borderRadius: 9,
    alignItems: "center",
    justifyContent: "center",
  }),
});
