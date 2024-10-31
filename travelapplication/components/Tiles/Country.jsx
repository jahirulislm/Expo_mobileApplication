import { StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import { HeightSpace, NetworkImage, ReusableText } from "../../index";
import { useNavigation } from "@react-navigation/native";
const Country = ({ item }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate("Details", { item })}>
      <View style={{ marginHorizontal: 6 }}>
        <NetworkImage
          source={item.imageUrl}
          width={120}
          height={80}
          radius={12}
        />
        <HeightSpace height={10} />
        <ReusableText
          text={item.country}
          size={18}
          family={"medium"}
          color="green400"
          align={"center"}
        />
      </View>
    </TouchableOpacity>
  );
};

export default Country;
