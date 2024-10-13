import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import data from "@/components/data";

const CardComponent = ({item}) => {
  // const [products, setProducts] = useState(data.products);
  const navigation = useNavigation();
  return (
    <View>
      <SafeAreaView>
        <FlatList
          data={data}
          style={{height:500}}
          numColumns={2}
          renderItem={({ item }) => (
            <View style={styles.imageContainer} >
              <TouchableOpacity onPress={() => navigation.navigate("productpage")}>
                <Image source={item.image}  style={styles.image} />
              </TouchableOpacity>
                <Ionicons style={styles.icon} name="heart-outline" size={16} />
                <View style={{ marginTop: 10 }}>
                  <Text style={styles.text} >{item.title}</Text>
                  <Text style={styles.textPrice} >$ {item.price}</Text>
                </View>
            </View>
          )}
          
        />
      <Text>ths is flatlist problem</Text>
      </SafeAreaView>
    </View>
  );
};

export default CardComponent;
const SIZE = [
  { id: 1, size: "S" },
  { id: 1, size: "L" },
  { id: 3, size: "M" },
  { id: 2, size: "XL" },
];
const styles = StyleSheet.create({
  imageContainer: {
    marginTop: 20,
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
  text: {
    fontSize: 16,
    color: "#444444",
    fontWeight: "600",
  },
  textPrice: {
    color: "#9C9C9C",
    fontSize: 14,
  },
});
