import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
const DATA = [
  {
    id: 1,
    title: "Trending Now",
  },
  {
    id: 2,
    title: "All",
  },
  {
    id: 3,
    title: "New",
  },
];
const SearchTextList = () => {
  return (
    <SafeAreaView>
      <FlatList
        style={styles.listText}
        horizontal
        data={DATA}
        renderItem={({ item }) => <Text style={styles.text}>{item.title}</Text>}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

export default SearchTextList;

const styles = StyleSheet.create({
  listText: {
    marginHorizontal: "auto",
    marginVertical:8,
  },
  text: {
    backgroundColor: "#E96E6E",
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginRight: 6,
    borderRadius: 10,
    fontSize:16
  },
});
