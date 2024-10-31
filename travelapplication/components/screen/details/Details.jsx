import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import { Recommendation } from "../../../index";
const Details = ({ navigation }) => {
  const route = useRoute();
  const { item } = route.params; // extract data from navigation route params
  console.log(item);
  return (
    <View>
      {/* <Recommendation /> */}
      <Text>Details</Text>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({});
