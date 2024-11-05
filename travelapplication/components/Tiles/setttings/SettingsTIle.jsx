import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import Reusable_tile from "../../reusable_comps/Reusable_tile";
import ReusableText from "../../reusable_comps/Reusable_text";
import reusable_styles from "../../reusable_comps/reusable_style";
import WidthSpace from "../../reusable_comps/WidthSpace";
import AntDesign from "@expo/vector-icons/AntDesign";

const SettingsTIle = ({ title, title1, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[reusable_styles.rowWithSpace("space-between"), styles.container]}
    >
      <ReusableText text={title} family={"medium"} size={18} color={"black"} />

      {title === "language" ? (
        <View style={reusable_styles.rowWithSpace("flex-start")}>
          <Image
            style={{ width: 40, height: 30, resizeMode: "contain" }}
            source={require("../../../assets/images/USA.png")}
          />

          <WidthSpace width={5} />
          <ReusableText
            text={"English"}
            family={"medium"}
            size={18}
            color={"black"}
          />
          <WidthSpace width={5} />
          <AntDesign name="right" size={20} color={"black"} />
        </View>
      ) : (
        <View style={reusable_styles.rowWithSpace("flex-start")}>
          <ReusableText
            text={title1}
            family={"medium"}
            size={18}
            color={"black"}
          />
          <WidthSpace width={5} />
          <AntDesign name="right" size={20} color={"black"} />
        </View>
      )}
    </TouchableOpacity>
  );
};

export default SettingsTIle;

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderColor: "gray",
    paddingVertical: 15,
  },
});
