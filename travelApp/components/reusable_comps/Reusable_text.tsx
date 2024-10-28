import { StyleSheet, Text, View } from "react-native";
import React from "react";

const ReusableText = ({
  text,
  family = "System",
  size = 16,
  color = "#000",
}: any) => {
  return (
    <View>
      <Text
        style={[
          styles.textStyle,
          { fontFamily: family, fontSize: size, color: color },
        ]}
      >
        {text}
      </Text>
    </View>
  );
};

export default ReusableText;

const styles = StyleSheet.create({
  textStyle: {
    // Define any default styles here if needed
  },
});
