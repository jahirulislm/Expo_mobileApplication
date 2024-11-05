import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import TopBookings from "../screen/top/TopBookings";
import TopInfo from "../screen/top/TopInfo";
import TopTrips from "../screen/top/TopTrips";
import NetworkImage from "../reusable_comps/NetworkImage";
import AppBar from "../reusable_comps/AppBar";
import HeightSpace from "../reusable_comps/HeightSpace";
import ReusableText from "../reusable_comps/Reusable_text";
const Tabs = createMaterialTopTabNavigator();
const TopTab = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ backgroundColor: "Whtie" }}>
        <View>
          <NetworkImage
            source={
              "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.KGuRfbrIg5SoY92BTuGb2gHaHa%26pid%3DApi%26h%3D160&f=1&ipt=198ce1f5f6a1a0c49d4bc0d24600554be1762582b180414d64956464463cfb87&ipo=images"
            }
            width={"100%"}
            height={300}
            radius={0}
          />
          <AppBar
            color={"white"}
            icon={"log-out"}
            color1={"white"}
            onPress1={() => {}}
          />

          <View
            style={{
              position: "absolute",
              top: 110,
              left: 0,
              right: 0,
              alignItems: "center",
            }}
          >
            <Image
              style={{
                width: 70,
                height: 70,
                resizeMode: "contain",
                borderRadius: 50,
                borderColor: "white",
                borderWidth: 1,
              }}
              source={{
                uri: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.L8bs33mJBAUBA01wBfJnjQHaHa%26pid%3DApi%26h%3D160&f=1&ipt=d5310c2a25e656cb1bd67537eca3e8dddbcc208f2795b21fb2b4e8fc4af940a2&ipo=images",
              }}
            />
            <HeightSpace height={10} />
            <ReusableText
              // text={` ${item.reviews} `}
              text={"Jahirul islam"}
              size={18}
              family={"medium"}
              color="red"
            />
          </View>
        </View>
      </View>
      <Tabs.Navigator>
        <Tabs.Screen name="TopBookings" component={TopBookings} />
        <Tabs.Screen name="TopInfo" component={TopInfo} />
        <Tabs.Screen name="TopTrips" component={TopTrips} />
      </Tabs.Navigator>
    </View>
  );
};

export default TopTab;
