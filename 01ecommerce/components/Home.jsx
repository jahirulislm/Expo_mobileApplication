import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
import SearchBox from "@/components/SearchBox";
import SearchTextList from '@/components/SearchTextList'
import CardComponent from '@/components/CardComponent'

const Home = () => {
  return (
    <View style={styles.container}>
      {/* input box */}
      <View>
        <SearchBox />
        <SearchTextList />
        <CardComponent />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
