import { StyleSheet, SafeAreaView, View } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import AppBar from "../../reusable_comps/AppBar";
const SelectedRoom = ({ navigation }) => {
  const router = useRoute();
  const { item } = router.params;
  console.log(item);
  return (
    <SafeAreaView style={{ height: 100 }}>
      <AppBar
        title={"Select Room"}
        color={"white"}
        color1={"white"}
        icon={"search"}
        onPress={() => navigation.goBack()}
        onPress1={() => {}}
      />
    </SafeAreaView>
  );
};

export default SelectedRoom;

const styles = StyleSheet.create({});
