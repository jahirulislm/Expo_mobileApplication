import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import HeightSpace from "../../reusable_comps/HeightSpace";
import ReusableText from "../../reusable_comps/Reusable_text";
import { Reusable_tile, ReusableBTN } from "../../../index";

const Failed = () => {
  const hotel = [
    {
      id: 1,
      title: "Just Me",
      desc: "A sole traveler in exploration",
      country: "United States",
      people: "1",
      icon: "🧍",
      reviews: "123rend",
      rating: 1.2,
      imageUrl:
        "https://wallup.net/wp-content/uploads/2019/10/647542-road-way-path-fields-landscapes-nature-countryside-town-trees-grass-summer-sky-clouds.jpg", // Use appropriate icon
    },
  ];
  return (
    <View>
      <View style={{ marginTop: "40%" }}>
        {/* <Image
          source={require("../../../assets/images/Failed.png")}
          style={{ width: "100%", height: 200, resizeMode: "contain" }}
        /> */}
        <Text style={{ justifyContent: "center" }}>Failed</Text>
        <HeightSpace height={40} />
        <View style={{ alignItems: "center" }}>
          <ReusableText
            text="Booking Failed!"
            size={22}
            family={"bold"}
            color={"#333"}
          />
          <HeightSpace height={10} />
          <ReusableText
            text="Sorry for the Enconvinience!"
            size={16}
            family={"medium"}
            color={"#333"}
          />
          <HeightSpace height={20} />
        </View>
        {/* <View style={{ margin: 20 }}>
              <ReusableText
                text="Room Details"
                size={18}
                family={"bold"}
                color={"#333"}
              />
            </View> */}
        <View style={{ margin: 20 }}>
          <ReusableText
            text="Room Details"
            size={18}
            family={"bold"}
            color={"#333"}
          />
          <HeightSpace height={10} />
          <Reusable_tile item={hotel} />
          <HeightSpace height={10} />
          <ReusableBTN
            onPress={() => navigation.goBack()}
            btnText={"Try Again"}
            width={"90%"}
            backgroundColor={"red"}
            borderColor={"gray"}
            borderWidth={1}
            textColor={"white"}
            fontWeight={"medium"}
          />
        </View>
      </View>
    </View>
  );
};

export default Failed;

const styles = StyleSheet.create({});
