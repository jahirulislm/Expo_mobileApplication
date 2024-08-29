import { StyleSheet, Text, View, Image, SafeAreaView } from "react-native";
import React from "react";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import Entypo from "@expo/vector-icons/Entypo";
const Card = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Text
          style={{
            width: 185,
            paddingTop: 30,
            fontSize: 18,
            fontWeight: "bold",
            borderBottomColor: "black",
            borderBottomWidth: 1,
          }}
        >
          Recommended Combo
        </Text>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-evenly",
            marginTop: 24,
            marginLeft: -30,
          }}
        >
          <View
            style={{
              width: 180,
              height: 200,
              borderColor: "black",
              borderWidth: 1,
              borderRadius: 8,
            }}
          >
            <EvilIcons
              name="heart"
              size={24}
              color="#FFA451"
              style={{ alignSelf: "flex-end", paddingTop: 6, paddingRight: 6 }}
            />
            <Image
              source={require("../assets/Glowing-Berry-Fruit-Salad.png")}
              style={{ width: 70, height: 70, alignSelf: "center" }}
            />
            <Text
              style={{
                textAlign: "center",
                paddingVertical: 12,
                fontWeight: "600",
                fontSize: 16,
              }}
            >
              Honey lime combo
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-around",
                marginVertical: 4,
              }}
            >
              <Text style={{ color: "#F08626" }}>$22.00</Text>
              <View
                style={{
                  backgroundColor: "#FFF2E7",
                  padding: 4,
                  borderRadius: 50,
                }}
              >
                <Entypo
                  name="plus"
                  size={24}
                  color={"black"}
                  style={{ color: "#FFA451" }}
                />
              </View>
            </View>
          </View>
          <View
            style={{
              width: 180,
              height: 200,
              borderColor: "black",
              borderWidth: 1,
              borderRadius: 8,
            }}
          >
            <EvilIcons
              name="heart"
              size={24}
              color="#FFA451"
              style={{ alignSelf: "flex-end", paddingTop: 6, paddingRight: 6 }}
            />
            <Image
              source={require("../assets/Honey-Lime-Peach-Fruit-Salad.png")}
              style={{ width: 70, height: 70, alignSelf: "center" }}
            />
            <Text
              style={{
                textAlign: "center",
                paddingVertical: 12,
                fontWeight: "600",
                fontSize: 16,
              }}
            >
              Berry mango combo
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-around",
                marginVertical: 4,
              }}
            >
              <Text style={{ color: "#F08626" }}>$22.00</Text>
              <View
                style={{
                  backgroundColor: "#FFF2E7",
                  padding: 4,
                  borderRadius: 50,
                }}
              >
                <Entypo
                  name="plus"
                  size={24}
                  color={"black"}
                  style={{ color: "#FFA451" }}
                />
              </View>
            </View>
          </View>
        </View>
      </SafeAreaView>

    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  shadowProp: {
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  // card: {
  //   backgroundColor: "white",
  //   borderRadius: 15,
  //   padding: 16,
  //   shadowColor: "black",
  //   shadowOffset: {
  //     width: 0,
  //     height: 4,
  //   },
  //   shadowOpacity: 0.3,
  //   shadowRadius: 6,
  //   elevation: 14,
  //   width: 350,
  //   height: 350,
  //   justifyContent: "center",
  //   alignItems: "center",
  // },
});
