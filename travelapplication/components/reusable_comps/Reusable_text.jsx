import {
  ImageStyle,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from "react-native";
import React from "react";

const ReusableText = ({ text, family, size, color, align,textArea }) => {
  return (
    <View>
      <Text
        style={[
          styles.textStyle,
          { fontFamily: family, fontSize: size, color: color, align,textArea }
        ]}
      >
        {text}
      </Text>
    </View>
  );
};

export default ReusableText;

const styles = StyleSheet.create({
  textStyle: (family, size, color, align,textArea) => ({
    fontFamily: family,
    fontSize: size,
    color: color,
    textAlign: align,
    textArea: textArea
  }),
});
