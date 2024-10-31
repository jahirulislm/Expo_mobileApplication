import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import reusable_styles from "./reusable_style";
import {
  HeightSpace,
  NetworkImage,
  ReusableText,
  WidthSpace,
  Rating,
} from "../../index";
const Reusable_tile = ({ item, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={reusable_styles.rowWithSpace("flex-start")}>
        <NetworkImage
          source={item.imageUrl}
          width={85}
          height={60}
          radius={12}
          margin={1}
        />
        <WidthSpace width={10} />

        <View>
          <ReusableText
            text={item.title}
            size={22}
            family={"medium"}
            color="black"
          />
          <HeightSpace height={10} />
          <ReusableText
            text={item.desc}
            size={14}
            family={"medium"}
            color="gray"
          />
          <HeightSpace height={5} />
          <View style={reusable_styles.rowWithSpace("flex-start")}>
            <Rating rating={item.rating} />
            <HeightSpace height={4} />
            <ReusableText
              // text={` ${item.reviews} `}
              text={""}
              size={14}
              family={"medium"}
              color="gray"
            />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Reusable_tile;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "white200",
    borderRadius: 12,
  },
});
