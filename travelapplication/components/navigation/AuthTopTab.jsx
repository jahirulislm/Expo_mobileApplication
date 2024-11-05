import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import SignIn from "../screen/authentification/SignIn";
import Registration from "../screen/authentification/Registration";
import { ScrollView } from "react-native-gesture-handler";
import HeightSpace from "../reusable_comps/HeightSpace";

const Tab = createMaterialTopTabNavigator();
const AuthTopTab = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <ScrollView style={{ flex: 1, backgroundColor: "white" }}>
        <HeightSpace height={10} />
        <Image
          source={require("../../assets/images/bg1.png")}
          style={{ width: "100%", height: 250 }}
        />
        <View style={{ height: 600 }}>
          <Tab.Navigator>
            <Tab.Screen name="Login" component={SignIn} />
            <Tab.Screen name="Register" component={Registration} />
          </Tab.Navigator>
        </View>
      </ScrollView>
    </View>
  );
};

export default AuthTopTab;

const styles = StyleSheet.create({});
