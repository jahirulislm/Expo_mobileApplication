import { StyleSheet, Text, View } from "react-native";
import React from "react";

const DescriptionText = ({ lines = 3, text }) => {
  return (
    <Text numberOfLines={lines} style={styles.DescriptionText}>
      {text}
    </Text>
  );
};

export default DescriptionText;

const styles = StyleSheet.create({
  DescriptionText: {
    paddingVertical: 10,
    fontFamily: "regular sans-serif",
    textAlign: "center",
    fontSize: 18,
  },
});
