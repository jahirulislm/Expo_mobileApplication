import { FlatList, StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import DistDetails from "./DistDetails";

const data = [
  { id: "1", title: "Hotest"},
  { id: "2", title: "Popular" },
  { id: "3", title: "New combo" },
  { id: "4", title: "New" },
];

const HotDish = () => {
  return (
    <View style={styles.container}>
      <FlatList
      style={styles.flatList}
        horizontal
        keyExtractor={(item) => item.id}
        data={data}
        renderItem={({ item }) => (
          <>
            <Pressable>
              <Text style={styles.item}>{item.title}</Text>
            </Pressable>
          </>
        )}
      />
      <DistDetails />
    </View>
  );
};

export default HotDish;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    // flexGrow:0
    // backgroundColor: "red",
  },
  item: {
    padding: 6,
    fontSize: 18,
    fontWeight:"600"
  },
  flatList: {
    height: 50,
    flexGrow: 0
  }
});
