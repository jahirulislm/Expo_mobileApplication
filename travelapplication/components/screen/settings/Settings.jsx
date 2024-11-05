import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AppBar from "../../reusable_comps/AppBar";
import { SafeAreaView } from "react-native-safe-area-context";
import ReusableText from "../../reusable_comps/Reusable_text";
import HeightSpace from "../../reusable_comps/HeightSpace";
import SettingsTIle from "../../Tiles/setttings/SettingsTIle";
const Settings = ({ navigation }) => {
  return (
    <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
      <View style={{ height: 120 }}>
        <AppBar title="" color="white" onPress={() => navigation.goBack()} />
        <View style={{ marginHorizontal: 20, marginTop: 60 }}>
          <ReusableText
            text={"Account Settings"}
            family={"medium"}
            size={22}
            color={"black"}
          />
          <HeightSpace height={10} />
          <SettingsTIle title={"language"} title1={""} />
          <HeightSpace height={10} />
          <SettingsTIle title={"Country"} title1={"USA"} />
          <HeightSpace height={10} />
          <SettingsTIle title={"Currency"} title1={"USD"} />
          <HeightSpace height={15} />
          <ReusableText
            text={"Support"}
            family={"medium"}
            size={22}
            color={"black"}
          />
          <SettingsTIle title={"Get Help"} title1={""} />
          <HeightSpace height={10} />
          <SettingsTIle title={"Give a feedback"} title1={""} />
          <HeightSpace height={10} />

          <HeightSpace height={10} />
          <ReusableText
            text={"Legal"}
            family={"medium"}
            size={22}
            color={"black"}
          />
          <SettingsTIle title={"Terms of Service"} title1={""} />
          <HeightSpace height={10} />
          <SettingsTIle title={"Privacy Policy"} title1={""} />
          <HeightSpace height={10} />

          <HeightSpace height={10} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Settings;

const styles = StyleSheet.create({});
