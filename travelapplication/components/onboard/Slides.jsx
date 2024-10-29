import { StyleSheet, Image, Text, View, Dimensions } from "react-native";
import React from "react";
import { HeightSpace, ReusableBTN, ReusableText } from "../../index";
import { useNavigation } from "expo-router";
// import styles from "./slide.style";
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const Slides = ({ item }) => {
  const navigation = useNavigation(); // moving between pages
  return (
    <View>
      <Image
        source={item.image}
        style={{ width: width, height: height, resizeMode: "cover" }}
      />

      <View style={styles.stack}>
        <ReusableText
          text={item.title}
          size={24}
          family={"medium"}
          color="white"
        />
        <ReusableText
          text={item.title}
          size={16}
          family={"medium"}
          color="white"
        />
        <HeightSpace height={24} />
        <ReusableBTN
          onPress={() => navigation.navigate("Bottom")}
          btnText={"Let's go"}
          width={"50%"}
          backgroundColor={"green"}
          borderColor={"gray"}
          borderWidth={1}
          textColor={"white"}
          fontWeight={"medium"}
        />
      </View>
    </View>
  );
};

export default Slides;

const styles = StyleSheet.create({
  image: {
    width: width,
    height: height,
    // resizeMode: "contain",
    borderWidth: 1,
    borderColor: "red",
  },
  stack: {
    position: "absolute",
    bottom: 20,
    left: 16,
    right: 0,
    marginBottom: 60,
  },
});
