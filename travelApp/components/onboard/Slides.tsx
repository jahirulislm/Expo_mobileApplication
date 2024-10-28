import { StyleSheet, Image, Text, View, Dimensions } from "react-native";
import React from "react";
import { ReusableText } from "../../index";
// import styles from "./slide.style";
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const Slides = ({ item }: any) => {
  return (
    <View>
      <Image
        source={item.image}
        style={{ width: 450, height: 900, resizeMode: "cover" }}
      />
      <View>
        <ReusableText text="this is a reusble text component" />
      </View>
    </View>
  );
};

export default Slides;

const styles = StyleSheet.create({
  image: {
    width: 300,
    height: 150,
    // resizeMode: "contain",
    borderWidth: 1,
    borderColor: "red",
  },
});
