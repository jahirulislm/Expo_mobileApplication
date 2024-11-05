import {
  FlatList,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Feather from "@expo/vector-icons/Feather";
import reusable_styles from "../../reusable_comps/reusable_style";
import Reusable_tile from "../../reusable_comps/Reusable_tile";
import Hotel_Card from "../../Tiles/Hotel/Hotel_Card";

const HotelSearch = ({ navigation }) => {
  const { searchKey, setSearchKey } = useState();
  const { searchResults, setSearchResults } = useState([]);
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
  return (
    <SafeAreaView>
      <View style={styles.searchContainer}>
        {/* <View style={styles.searchBar}> */}
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            placeholder="Where do you want to stay?"
            value={searchKey}
            onChangeText={setSearchKey}
          />
        </View>
        <TouchableOpacity style={styles.searchBtn}>
          <Feather name="search" size={24} color={"white"} />
        </TouchableOpacity>
        {/* </View> */}
      </View>

      {hotels.length === 0 ? (
        <Text>No Hotels Available here....</Text>
      ) : (
        <View style={{ marginLeft: 30 }}>
          <FlatList
            data={hotels}
            keyExtractor={(item) => item.id}
            numColumns={2}
            ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
            renderItem={({ item }) => (
              <Hotel_Card
                item={item}
                margin={16}
                onPress={() => navigation.navigate("HotelDetails", item.id)}
              />
            )}
          />
        </View>
      )}
    </SafeAreaView>
  );
};

export default HotelSearch;

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    marginHorizontal: 10,
    borderColor: "grey",
    borderWidth: 1,
    borderRadius: 12,
    marginVertical: 12,
    height: 40,
    borderColor: "red",
    borderWidth: 1,
  },
  searchInput: {
    width: "100%",
    height: "100%",
    paddingHorizontal: 15,
  },

  searchWrapper: {
    flex: 1,
    marginRight: 10,
    borderRadius: 10,
  },
  searchBtn: {
    backgroundColor: "blue",
    width: 50,
    height: "100%",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  searchImage: {
    width: "100%",
    height: 150,
    paddingHorizontal: 20,
  },
});
