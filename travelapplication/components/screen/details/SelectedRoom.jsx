import { StyleSheet, SafeAreaView, View } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import AppBar from "../../reusable_comps/AppBar";
import reusable_styles from "../../reusable_comps/reusable_style";
import ReusableText from "../../reusable_comps/Reusable_text";
import NetworkImage from "../../reusable_comps/NetworkImage";
import HeightSpace from "../../reusable_comps/HeightSpace";
import Counter from "../../reusable_comps/Counter";
import ReusableBTN from "../../reusable_comps/ReusableBTN";
const SelectedRoom = ({ navigation }) => {
  const router = useRoute();
  const { item } = router.params;
  console.log(item);
  return (
    // <SafeAreaView>
    <View style={{ backgroundColor: "red" }}>
      <View style={{ height: 100 }}>
        <AppBar
          title={"Select Room"}
          color={"white"}
          color1={"white"}
          icon={"search"}
          onPress={() => navigation.goBack()}
          onPress1={() => {}}
        />
      </View>
      {/* <View style={{ marginHorizontal: 10 }}>
        <View style={reusable_styles.rowWithSpace("space-between")}>
          <ReusableText
            // text={` ${item.reviews} `}
            text={"A ROom"}
            size={18}
            family={"medium"}
            color="gray"
          />
        </View>
      </View> */}

      <View style={{ marginHorizontal: 20 }}>
        <View style={{ backgroundColor: "white", borderRadius: 16 }}>
          <NetworkImage source={""} />
          <HeightSpace height={20} />
          <View style={{ marginHorizontal: 10 }}>
            <View style={reusable_styles.rowWithSpace("space-between")}>
              <ReusableText
                // text={` ${item.reviews} `}
                text={"Selected room"}
                size={18}
                family={"medium"}
                color="gray"
              />
              <Counter />
            </View>
          </View>
        </View>
      </View>
      <ReusableBTN
        onPress={() => navigation.navigate("Success")}
        btnText={"Book Now"}
        width={"80%"}
        backgroundColor={"green"}
        borderColor={"gray"}
        borderWidth={1}
        textColor={"white"}
        fontWeight={"medium"}
      />
    </View>
    // </SafeAreaView>
  );
};

export default SelectedRoom;

const styles = StyleSheet.create({});
