import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
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
            width={styles.imageContainer}
            source={TextMetrics.url}
            radius={16}
          />
        </View>
        <HeightSpace height={5} />
        <View style={{ padding: 10 }}>
          <ReusableText
            text={item.hotel_name}
            size={18}
            family={"medium"}
            color="black"
          />
          <HeightSpace height={5} />
          <ReusableText
            text={item.addressline1}
            size={18}
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
    width: "50%",
    borderRadius: 12,
    backgroundColor: "#f5f5f5",
    marginRight: margin,
  }),
  imageContainer: {
    alignItems: "center",
    marginTop: 10,
    height: 150,
  },
});
