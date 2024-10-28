import { StyleSheet, FlatList, View } from "react-native";
import React from "react";
import { Slides } from "@/index";

// rending data from local assets
const slides = [
  {
    id: 1,
    image: require("@/assets/images/1.png"),
  },
  {
    id: 2,
    image: require("@/assets/images/2.png"),
  },
  {
    id: 3,
    image: require("@/assets/images/3.png"),
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
        // renderItem={(item) => <Slides item={item} />}
      />

      {/* <Slides /> // this component is gonna be rendered */}
    </View>
  );
};

export default OnBoarding;

const styles = StyleSheet.create({});
