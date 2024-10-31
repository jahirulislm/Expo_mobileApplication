import { SafeAreaView, TouchableOpacity, View } from "react-native";
import React from "react";
import { HeightSpace, NetworkImage, ReusableText } from "../../index";
import { useNavigation } from "@react-navigation/native";

const Country = ({ item }) => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <TouchableOpacity
        onPress={() => navigation.navigate("Details", { item })}
      >
        <View style={{ marginHorizontal: 6 }}>
          <NetworkImage
            source={item.imageUrl}
            width={85}
            height={75}
            radius={12}
          />
          <HeightSpace height={4} />
          <ReusableText
            text={item.country}
            size={14}
            family={"medium"}
            color="green400"
            align={"center"}
          />
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Country;
