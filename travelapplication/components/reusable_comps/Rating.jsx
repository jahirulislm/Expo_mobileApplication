import { StyleSheet, Text, View } from "react-native";
import React from "react";
import reusable_styles from "./reusable_style";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import WidthSpace from "./WidthSpace";
import { ReusableText } from "../../index";
const Rating = ({ rating }) => {
  return (
    <View style={reusable_styles.rowWithSpace("flex-start")}>
      <MaterialCommunityIcons name="star" size={20} color="#FD9942" />
      <WidthSpace width={5} />
      <ReusableText text={rating} size={15} family={"medium"} color="#FD9942" />
    </View>
  );
};

export default Rating;

const styles = StyleSheet.create({});
