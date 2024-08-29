import { FlatList, StyleSheet, Text, View, Image } from "react-native";
import React, { useState } from "react";
import EvilIcons from "@expo/vector-icons/EvilIcons";

const data = [
  {
    id: 1,
    image: require("../assets/breakfast.png"),
    title: "Quinoa fruit salad",
  },
  {
    id: 2,
    image: "",
    title: "Quinoa fruit salad",
    image: require("../assets/BerryWorld.png"),
  },
  {
    id: 3,
    image: "",
    title: "Quinoa fruit salad",
    image: require("../assets/Glowing-Berry-Fruit-Salad.png"),
  },
  {
    id: 4,
    image: "",
    title: "Quinoa fruit salad",
    image: require("../assets/breakfast.png"),
  },
];
const DistDetails = () => {
  // const [images, setimages] = useState([
  //     require('../assets/breakfast.png')

  //   ]);
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        style={styles.flatList}
        keyExtractor={(item) => item.id}
        data={data}
        horizontal
        renderItem={({ item, index }) => (
          <View style={styles.container}>
            <EvilIcons
              name="heart"
              size={24}
              color="#FFA451"
              style={{ alignSelf: "flex-end", paddingTop: 6, paddingRight: 6 }}
            />
            <Image
              source={item.image}
              style={{
                width: 80,
                height: 80,
                resizeMode: "contain",
                alignSelf:'center'
              }}
            />
            <Text style={styles.item}>{item.title}</Text>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Text>$33</Text>
              <EvilIcons name="plus" size={24} color="#FFA451" />
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default DistDetails;

const styles = StyleSheet.create({
  flatList: {
    flex: 1,
    gap: 9,

  },
  container: {
    width: 180,
    height: 200,
    borderWidth: 1,
    marginRight: 10,
    borderRadius: 8,
    padding: 6,
  },
});
