import {
  FlatList,
  Text,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import reusable_styles from "../reusable_comps/reusable_style";
import ReusableText from "../reusable_comps/Reusable_text";
import Feather from "@expo/vector-icons/Feather";
// import { Reusable_tile } from "../../index";
import Reusable_tile from "../reusable_comps/Reusable_tile";

const Recommendation = () => {
  const navigation = useNavigation();
  const recommendations = [
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
  return (
    <View style={styles.container}>
      <View
        style={[
          reusable_styles.rowWithSpace("space-between"),
          { paddingBottom: 20 },
        ]}
      >
        <ReusableText
          text={"Recommendations"}
          size={22}
          family={"medium"}
          color="black"
        />
        <TouchableOpacity onPress={() => navigation.navigate("Recommended")}>
          <Feather name="list" size={24} color="gray" />
        </TouchableOpacity>
      </View>
      {/* // displaying data from Recommenddation */}
      <FlatList
        data={recommendations}
        horizontal
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        // contentContainerStyle:{columnGap:10}
        renderItem={({ item }) => (
          <Reusable_tile item={item} onPress={() => {}} />
        )}
      />
    </View>
  );
};

export default Recommendation;

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
  },
});
