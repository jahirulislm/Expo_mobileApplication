import { StyleSheet, SafeAreaView, View } from "react-native";
import React from "react";
import reusable_styles from "../reusable_comps/reusable_style";
import { HeightSpace, Recommendation, ReusableText } from "../../index";
import TravelPlaces from "../places/TravelPlaces";
import AntDesign from "@expo/vector-icons/AntDesign";

import { TouchableOpacity } from "react-native-gesture-handler";
import Ionicons from "@expo/vector-icons/Ionicons";
const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={reusable_styles.container}>
      <View>
        <View style={reusable_styles.rowWithSpace("space-between")}>
          <ReusableText
            text={"hey User!"}
            size={24}
            family={"medium"}
            color="black"
          />

          <TouchableOpacity
            style={styles.box}
            onPress={() => navigation.navigate("Search")}
          >
            <AntDesign name="search1" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <HeightSpace height={10} />

        <ReusableText
          text={"Places to Visit"}
          size={18}
          family={"medium"}
          color="black"
        />
        <HeightSpace height={10} />
        <TravelPlaces />
        <HeightSpace height={10} />
        {/* <Recommendation /> */}
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
