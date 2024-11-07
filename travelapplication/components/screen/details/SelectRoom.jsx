import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import AppBar from "../../reusable_comps/AppBar";
import Reusable_tile from "../../reusable_comps/Reusable_tile";
import HeightSpace from "../../reusable_comps/HeightSpace";
import ReusableBTN from "../../reusable_comps/ReusableBTN";

const SelectRoom = ({ navigation }) => {
  const rooms = [
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
      <View style={{ height: 100, justifyContent: "center" }}>
        {/* <Image source={require("../../../assets/images/USA.png")} /> */}
        <AppBar
          title={"Select Room"}
          color={"white"}
          onPress={() => navigation.goBack()}
        />
      </View>
      <FlatList
        data={rooms}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={(item) => (
          <View
            style={{
              marginHorizontal: 20,
              marginBottom: 12,
              // borderColor: "grey",
              backgroundColor: "white",
              borderRadius: 15,
              // borderWidth: 1,
            }}
          >
            <Reusable_tile item={item} />
            <View style={{ margin: 10, alignItems: "center" }}>
              <ReusableBTN
                onPress={() => navigation.navigate("SelectedRoom", { item })}
                btnText={"Find Best Hotels"}
                width={"90%"}
                backgroundColor={"green"}
                borderColor={"gray"}
                borderWidth={1}
                textColor={"white"}
                fontWeight={"medium"}
              />
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default SelectRoom;

const styles = StyleSheet.create({});
