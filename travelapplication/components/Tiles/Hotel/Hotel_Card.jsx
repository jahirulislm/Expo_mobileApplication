import { StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import NetworkImage from "../../reusable_comps/NetworkImage";
import HeightSpace from "../../reusable_comps/HeightSpace";
import ReusableText from "../../reusable_comps/Reusable_text";
import Rating from "../../reusable_comps/Rating";

const Hotel_Card = ({ item, margin, onPress }) => {
  return (
    <TouchableOpacity style={styles.card(margin)} onPress={onPress}>
      <View>
        <View style={styles.imageContainer}>
          <NetworkImage
            source={item.imageUrl}
            width={"90%"}
            height={"100%"}
            radius={16}
          />
        </View>
        <View style={{ padding: 10 }}>
          <ReusableText
            text={item.title}
            size={16}
            family={"medium"}
            color="black"
          />
          <ReusableText
            text={item.desc}
            size={14}
            family={"medium"}
            color="black"
          />
          <HeightSpace height={5} />
          <Rating rating={item.star_rating} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Hotel_Card;

const styles = StyleSheet.create({
  card: (margin) => ({
    width: 170,
    borderRadius: 12,
    // backgroundColor: "#f5f5f5",
    backgroundColor: "white",
    marginRight: margin,
    // borderWidth: 1,
    // borderColor: "red",
  }),
  imageContainer: {
    alignItems: "center",
    marginTop: 10,
    height: 110,
  },
});
