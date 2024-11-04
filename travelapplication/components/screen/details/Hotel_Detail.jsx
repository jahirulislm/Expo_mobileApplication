import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import AppBar from "../../reusable_comps/AppBar";
import { SafeAreaView } from "react-native-safe-area-context";
import NetworkImage from "../../reusable_comps/NetworkImage";
import ReusableText from "../../reusable_comps/Reusable_text";
import HeightSpace from "../../reusable_comps/HeightSpace";
import reusable_styles from "../../reusable_comps/reusable_style";
// import Rating from "../../reusable_comps/Rating";
import styles from "./HotelDetails_Style";
import { Rating } from "react-native-stock-star-rating";
import HotelMap from "../../Hotel/HotelMap";
const Hotel_Detail = ({ navigation }) => {
  const hotels = [
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
    {
      id: 2,
      title: "A Couple",
      desc: "Two travelers in tandem",
      country: "Emirate",
      peple: "2 People",
      icon: "👫",
      reviews: "123rend",
      rating: 1.2,
      imageUrl:
        "https://wallup.net/wp-content/uploads/2019/10/647542-road-way-path-fields-landscapes-nature-countryside-town-trees-grass-summer-sky-clouds.jpg", // Use appropriate icon
    },
    {
      id: 3,
      title: "Family",
      desc: "A group of loving adventurers",
      country: "Bangladesh",
      people: "5 to 10 People",
      icon: "👩‍👦",
      reviews: "123rend",
      rating: 1.2,
      imageUrl:
        "https://wallup.net/wp-content/uploads/2019/10/647542-road-way-path-fields-landscapes-nature-countryside-town-trees-grass-summer-sky-clouds.jpg",
    },
    {
      id: 4,
      title: "Friends",
      desc: "A bunch of thrill seekers",
      country: "Pakistan",
      people: "3 to 5 People",
      icon: "👯‍♂️",
      reviews: "123rend",
      rating: 1.2,
      imageUrl:
        "https://wallup.net/wp-content/uploads/2019/10/647542-road-way-path-fields-landscapes-nature-countryside-town-trees-grass-summer-sky-clouds.jpg", // Use appropriate icon
    },
    {
      id: 5,
      title: "Cheap",
      desc: "Stay conscious of cost",
      country: "Australia",
      icon: "💸",
      reviews: "123rend",
      rating: 1.2,
      imageUrl:
        "https://wallup.net/wp-content/uploads/2019/10/647542-road-way-path-fields-landscapes-nature-countryside-town-trees-grass-summer-sky-clouds.jpg",
    },
  ];

  let coordinates = {
    id: hotels.id,
    title: hotels.title,
  };
  return (
    <SafeAreaView>
      {/* <ScrollView> */}
      <View style={{ height: 80 }}>
        <AppBar
          title={"Hotel Details"}
          color={"white"}
          color1={"white"}
          icon={"search"}
          onPress={() => navigation.goBack()}
          onPress1={() => {}}
        />
      </View>

      <View style={styles.container}>
        <NetworkImage
          source={
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.PA_USRL68UjTfF0kRo5ImQHaEo%26pid%3DApi&f=1&ipt=76ce8da66da52aaea112aae26f8976ea69cb9f89a3e897806c516d6972d9e5ef&ipo=images"
          }
          width={"100%"}
          height={220}
          radius={25}
        />
      </View>
      <View style={styles.titleContainer}>
        <View style={styles.titleColumn}>
          <ReusableText
            text={"Hotel Dhaka"}
            size={22}
            family={"medium"}
            color="block"
          />
          <HeightSpace height={10} />
          <ReusableText
            text={"USA"}
            size={18}
            family={"medium"}
            color="black"
          />
          <HeightSpace height={15} />
          <View style={reusable_styles.rowWithSpace("space-between")}>
            <Rating
              maxStarts={5}
              stars={hotels.rating}
              size={20}
              color={"#FD9942"}
              bordered={false}
            />
            <ReusableText
              // text={`${hotels.icon}`}
              text={"It's is hotel of delight"}
              size={18}
              family={"medium"}
              color="gray"
            />
          </View>
          {/* <HotelMap /> */}
        </View>
      </View>
      {/* </ScrollView> */}
    </SafeAreaView>
  );
};

export default Hotel_Detail;

// const styles = StyleSheet.create({
// container: {
//   // paddingTop: 15,
//   marginHorizontal: 10,
// },
// titleContainer: {
//   margin: 20,
//   backgroundColor: "#FFFFFF",
//   height: 120,
//   position: "absolute",
//   top: 270,
//   left: 0,
//   right: 0,
//   borderRadius: 20,
//   zIndex: 3,
// },
// titleColumn: {
//   padding: 20,
// },
// });
