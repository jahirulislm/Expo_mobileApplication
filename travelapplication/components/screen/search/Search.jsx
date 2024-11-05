import {
  StyleSheet,
  TouchableOpacity,
  TextInput,
  View,
  Image,
  Text,
  FlatList,
} from "react-native";
import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import reusable_styles from "../../reusable_comps/reusable_style";
import Feather from "@expo/vector-icons/Feather";
import Reusable_tile from "../../reusable_comps/Reusable_tile";

const Search = ({ navigation }) => {
  const { searchKey, setSearchKey } = useState();
  const { searchResults, setSearchResults } = useState([]);
  const search = [
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
    <SafeAreaView style={reusable_styles.container}>
      <View style={styles.searchContainer}>
        {/* <View style={styles.searchBar}> */}
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search place you want to visit"
            value={searchKey}
            onChangeText={setSearchKey}
          />
        </View>
        <TouchableOpacity style={styles.searchBtn}>
          <Feather name="search" size={24} color={"white"} />
        </TouchableOpacity>
        {/* </View> */}
      </View>

      {search.length === 0 ? (
        <Text>No Hotels Available here....</Text>
      ) : (
        <FlatList
          data={search}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View
              style={{
                marginBottom: 10,
                backgroundColor: "white",
                borderRadius: 10,
              }}
            >
              <Reusable_tile
                item={item}
                onPress={() => navigation.navigate("PlaceDetails", item.id)}
              />
            </View>
          )}
        />
      )}
    </SafeAreaView>
  );
};

export default Search;

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
