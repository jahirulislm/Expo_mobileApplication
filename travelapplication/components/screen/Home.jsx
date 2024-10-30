import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import reusable_styles from "../reusable_comps/reusable_style";
import { ReusableText } from "../../index";
import AntDesign from "@expo/vector-icons/AntDesign";
import { TouchableOpacity } from "react-native-gesture-handler";
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
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
