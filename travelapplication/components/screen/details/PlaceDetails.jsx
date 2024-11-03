import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import NetworkImage from "../../reusable_comps/NetworkImage";
import AppBar from "../../reusable_comps/AppBar";
import ReusableText from "../../reusable_comps/Reusable_text";
import DescriptionText from "../../reusable_comps/DescriptionText";
import reusable_styles from "../../reusable_comps/reusable_style";
import Feather from "@expo/vector-icons/Feather";
import ReusableBTN from "../../reusable_comps/ReusableBTN";
import PopularList from "../../Country/PopularList";
import HeightSpace from "../../reusable_comps/HeightSpace";

const PlaceDetails = ({ item, navigation }) => {
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
      popular: [
        {
          id: 1,
          title: "Just Me",
          desc: "A sole traveler in exploration",
          country: "United States",
          people: "1",
          icon: "���",
          reviews: "123rend",
          rating: 1.2,
          imageUrl:
            "https://wallup.net/wp-content/uploads/2019/10/647542-road-way-path-fields-landscapes-nature-countryside-town-trees-grass-summer-sky-clouds.jpg", // Use appropriate icon
        },
      ],
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
  const route = useRoute();
  const id = route.params; // recieving the id of the route of every item of the data
  return (
    <ScrollView>
      <Text>Country Details</Text>
      <View>
        <NetworkImage
          source={hotels.imageUrl}
          width={"100%"}
          height={350}
          radius={12}
        />
        <AppBar
          title={hotels.country}
          color={"white"}
          color1={"white"}
          icon={"search"}
          onPress={() => navigation.goBack()}
          onPress1={() => {}}
        />
      </View>

      <View style={styles.description}>
        <ReusableText
          // text={` ${item.reviews} `}
          text={hotels.reverse}
          size={14}
          family={"medium"}
          color="gray"
        />
        <DescriptionText text={hotels.desc} />
        <View style={{ alignItems: "center" }}>
          <View style={reusable_styles.rowWithSpace("space-between")}>
            <ReusableText
              text={"Popular Destination"}
              size={24}
              family={"medium"}
              color="black"
            />
            <TouchableOpacity onPress={() => {}}>
              <Feather name="list" size={24} />
            </TouchableOpacity>
            <HeightSpace height={10} />
            <PopularList data={hotels.popular} />
          </View>
          <ReusableBTN
            onPress={() => navigation.navigate("HotelSeach")}
            btnText={"Find Best Hotels"}
            width={"80%"}
            backgroundColor={"green"}
            borderColor={"gray"}
            borderWidth={1}
            textColor={"white"}
            fontWeight={"medium"}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default PlaceDetails;

const styles = StyleSheet.create({
  description: {
    marginHorizontal: 20,
    paddingTop: 20,
  },
});
