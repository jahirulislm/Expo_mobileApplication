import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";

const PlaceDetails = () => {
  const route = useRoute();
  const id = route.params; // recieving the id of the route of every item of the data
  console.log(id);
  return (
    <SafeAreaView>
      <Text>PlaceDetails</Text>
    </SafeAreaView>
  );
};

export default PlaceDetails;

const styles = StyleSheet.create({});
