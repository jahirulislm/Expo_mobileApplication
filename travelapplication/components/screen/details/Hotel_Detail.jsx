import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import { AppBar } from "../../../index";

const Hotel_Detail = () => {
  return (
    <ScrollView>
      <View style={{ height: 80 }}>
        <AppBar
          title={"ditch"}
          color={"white"}
          color1={"white"}
          icon={"search"}
          onPress={() => navigation.goBack()}
          onPress1={() => {}}
        />
      </View>
    </ScrollView>
  );
};

export default Hotel_Detail;

const styles = StyleSheet.create({});
