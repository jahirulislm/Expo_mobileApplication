import { FlatList, View } from "react-native";
import React from "react";
import Reusable_tile from "../reusable_comps/Reusable_tile";
import { useNavigation } from "@react-navigation/native";
const PopularList = ({ data }) => {
  const navigation = useNavigation();
  const renderItem = ({ item }) => (
    <View style={{ marginBottom: 10 }}>
      <Reusable_tile
        item={item}
        onPress={() => navigation.navigate("PlaceDetails", item.id)}
      />
    </View>
  );

  return (
    <FlatList
      data={data}
      scrollEnabled={false}
      keyExtractor={(item) => item.id}
      showsVerticalScrollIndicator={false}
      renderItem={renderItem}
    />
  );
};

export default PopularList;
