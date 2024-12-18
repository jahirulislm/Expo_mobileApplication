import { StyleSheet, FlatList, View } from "react-native";
import React from "react";
import Slides from "../onboard/Slides";

// rending data from local assets
const slides = [
  {
    id: 1,
    image: require("../../assets/images/1.png"),
    title: "Find the Best Hotel in the world",
  },
  {
    id: 2,
    image: require("../../assets/images/2.png"),
    title: "Find the Best Hotel in the world",
  },
  {
    id: 3,
    image: require("../../assets/images/3.png"),
    title: "Find the Best Hotel in the world",
  },
];
const OnBoarding = () => {
  return (
    <View>
      <FlatList
        data={slides}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item: any) => item.id}
        renderItem={({ item }) => (
          <View>
            <Slides item={item} />
          </View>
        )}
      />

      {/* <Slides /> // this component is gonna be rendered */}
    </View>
  );
};

export default OnBoarding;
