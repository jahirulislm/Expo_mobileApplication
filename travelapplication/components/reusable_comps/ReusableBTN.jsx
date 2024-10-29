import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const ReusableBTN = ({
  onPress,
  btnText,
  textColor,
  width,
  backgroundColor,
  borderColor,
  borderWidth,
  fontWeight,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.btnStyle(width, backgroundColor, borderColor, borderWidth)} // style functino is callable with paranthesis
    >
      <Text style={styles.btnText(textColor, fontWeight)}>{btnText}</Text>
    </TouchableOpacity>
  );
};

export default ReusableBTN;

const styles = StyleSheet.create({
  btnText: (textColor, fontWeight) => ({
    // function arguments has to be injected inside function parameters also inside parent function parameters
    // fontSize: size,
    fontWeight: fontWeight,
    color: textColor,
    // backgroundColor: bgColor,
    padding: 10,
  }),
  btnStyle: (width, backgroundColor, borderColor, borderWidth) => ({
    width: width,
    height: 45,
    backgroundColor: backgroundColor,
    borderColor: borderColor,
    borderWidth: borderWidth,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  }),
});
