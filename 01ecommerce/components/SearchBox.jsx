import React, { useState } from "react";
import { View, TextInput, StyleSheet, Text } from "react-native";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import { Ionicons } from "@expo/vector-icons";
const SearchBox = () => {
  const [text, setText] = useState("");

  const handleInputChange = (input) => {
    setText(input);
  };

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.title}>Match Your Style</Text>
      <View style={styles.input}>
        <Ionicons style={styles.search} name="search" size={24} color="black" />
        <TextInput placeholder="Search" />
      </View>
    </View>
  );
};

export default SearchBox;

const styles = StyleSheet.create({
  mainContainer: {
    alignSelf:'center',
    marginTop:10
  },
  title: {
    fontSize: 28,
    color: "black",
    fontWeight:'400'
  },
  input: {
    width: 351,
    height: 48,
    flexDirection: "row",
    borderRadius: 8,
    marginTop: 18,
    padding: 10,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 10,
  },
  search: {
    marginRight: 6,
    fontSize: 18,
    alignSelf: "center",
  },
});
