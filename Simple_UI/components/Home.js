import { SafeAreaView, StyleSheet, Text, TextInput, View, FlatList } from "react-native";
import React from "react";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Card from "./CardComp";
import HotDish from "./HotDish";

const Home = () => {
  return (
    <SafeAreaView style={styles.conainter}>
      <View style={{ marginTop: 20 }}>
        <View style={styles.header}>
          <FontAwesome5
            name="grip-lines"
            size={24}
            color="black"
            style={{ marginTop: 18 }}
          />
          <View style={{ alignItems: "center" }}>
            <FontAwesome6 name="bucket" size={24} color="#FFA451" />
            <Text style={{ fontSize: 10 }}>Busket</Text>
          </View>
        </View>
        <View style={{ width: "65%", marginTop: 16 }}>
          <Text style={{ fontSize: 18, lineHeight: 24 }}>
            Hello Tony,{" "}
            <Text
              style={{ fontWeight: "semi-bold", fontSize: 20, paddingTop: 5 }}
            >
              What fruit salad combo do you want today for lunch?
            </Text>
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: 20,
          }}
        >
          <View style={styles.input}>
            <Ionicons
              style={styles.search}
              name="search"
              size={24}
              color="black"
            />
            <TextInput placeholder="Search for Fruit salad combo" />
          </View>
          <FontAwesome
            name="sliders"
            size={24}
            color="black"
            style={{ marginLeft: 20, marginTop: 8 }}
          />
        </View>
      </View>
      <Card />

      <HotDish />

      <View>
        <Text style={{textAlign:'center', fontSize:20, fontWeight:600, paddingVertical: 10}}>Created by Dev jahirul islam &#169; 2024 </Text>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  conainter: {
    flex: 1,
    marginLeft:20,
    marginTop:40
  },
  header: {
    // flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 12,
    // marginTop: 10,
  },
  input: {
    width: 300,
    height:56,
    flexDirection: "row",
    borderRadius: 8,
    marginTop: 12,
    backgroundColor: "#F3F4F9",
    padding: 10,
  },
  search: {
    marginRight: 6,
    fontSize: 18,
    alignSelf: "center",
  },
});
