import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import reusable_styles from "../reusable_comps/reusable_style";
import Feather from "@expo/vector-icons/Feather";
import Ionicons from "@expo/vector-icons/Ionicons";
const ProfileTile = ({ title, icon, icon1, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={[
          reusable_styles.rowWithSpace("space-between"),
          styles.container,
        ]}
      >
        <View style={{ flexDirection: "row" }}>
          <Ionicons name={icon} size={24} color="black" />
          <Text style={{ marginLeft: 10, fontSize: 16 }}>{title}</Text>
        </View>
        <Feather name={icon1} size={24} color="black" />
      </View>
    </TouchableOpacity>
  );
};

export default ProfileTile;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "white",
    borderRadius: 12,
    alignItems: "center",
    marginHorizontal: 10,
  },
});
