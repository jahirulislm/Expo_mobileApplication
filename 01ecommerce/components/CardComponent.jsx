import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { router } from "expo-router";
const DATA = [
  {
    id: "1",
    title: "jacket jeans",
    image: require("@/assets/images/img1.png"),
    price: 20,
  },
  {
    id: "2",
    title: "Acrylic Sweater",
    image: require("@/assets/images/img2.png"),
    price: 22,
  },
  {
    id: "3",
    title: "Leather Jacket",
    image: require("@/assets/images/img3.png"),
    price: 25,
  },
  {
    id: "4",
    title: "Leather Jacket",
    image: require("@/assets/images/img4.png"),
    price: 30,
  },
];
88;

// const Item = ({ title }) => (
// <View style={styles.item}>
//   <Text style={styles.title}>{title}</Text>
// </View>
// );

const CardComponent = () => {
  // source the image using useState
  //   const [images, setimages] = useState([
  //     require("../assets/images/img1.png"),
  //     require("../assets/images/img2.png"),
  //     require("../assets/images/img3.png"),
  //   ]);
  const navigation = useNavigation();
  return (
    <View>
      <FlatList
        contentContainerStyle={{ alignItems: "center" }}
        numColumns={2}
        showsHorizontalScrollIndicator={false}
        data={DATA}
        style={styles.imageBox}
        renderItem={({ item, index }) => (
          <View style={styles.imageContainer}>
            <TouchableOpacity onPress={() => router.push("Product")}>
              <Image source={item.image} key={index} style={styles.image} />
              <Ionicons style={styles.icon} name="heart-outline" size={16} />
            </TouchableOpacity>
            <Text>{item.title}</Text>
            <Text>$ {item.price}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default CardComponent;

const styles = StyleSheet.create({
  imageContainer: {
    marginTop:20,
    marginHorizontal: 16,
  },
  image: {
    width: 160,
    height: 220,
    resizeMode: "cover",
    borderRadius: 10,
    position: "relative",
  },
  icon: {
    position: "absolute",
    top: 10,
    right: 10,
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 5,
    borderRadius: 50,
    color: "#E55B5B",
  },
});
