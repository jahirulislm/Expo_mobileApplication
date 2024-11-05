import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ProfileTile from "../../Tiles/ProfileTile";
import HeightSpace from "../../reusable_comps/HeightSpace";

export default function TopInfo({ navigation }) {
  return (
    <View style={{ marginTop: 16 }}>
      <ProfileTile
        title={"Personal Information"}
        icon={"person-outline"}
        icon1={"chevron-right"}
        onPress={() => navigation.navigate("PersonalInformation")}
      />
      <HeightSpace height={10} />
      <ProfileTile
        title={"Payment Information"}
        icon={"card-outline"}
        icon1={"chevron-right"}
        onPress={() => navigation.navigate("Payment")}
      />
      <HeightSpace height={10} />
      <ProfileTile
        title={"Settings"}
        icon={"settings"}
        icon1={"chevron-right"}
        onPress={() => navigation.navigate("Settings")}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
