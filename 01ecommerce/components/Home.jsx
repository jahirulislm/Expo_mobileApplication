import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
import SearchBox from "@/components/SearchBox";
import SearchTextList from "@/components/SearchTextList";
import CardComponent from "@/components/CardComponent";
import { SafeAreaView } from "react-native-safe-area-context";
import { style } from "twrnc";

const Home = () => {
  return (
    <View style={'tw`bg-white dark:bg-black`;'}>
      <SafeAreaView>
        <SearchBox />
        <SearchTextList />
        <CardComponent />
      </SafeAreaView>
    </View>
  );
};

export default Home;
