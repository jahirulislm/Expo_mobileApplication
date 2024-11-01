import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import NetworkImage from "../../reusable_comps/NetworkImage";
import AppBar from "../../reusable_comps/AppBar";
import ReusableText from "../../reusable_comps/Reusable_text";
import DescriptionText from "../../reusable_comps/DescriptionText";
import reusable_styles from "../../reusable_comps/reusable_style";
import Feather from "@expo/vector-icons/Feather";
import ReusableBTN from "../../reusable_comps/ReusableBTN";
import PopularList from "../../../components/screen/details/PopularList";

const Details = ({ navigation }) => {
  const country = [
    {
      id: "abc12",
      name: "USA",
      imageUrl: "https://www.countryflags.io/us/flat/64.png",
      description:
        "The United States of America, commonly known as the United States (U.S.), is a federal republic consisting of 50 states, a federal district, five major territories, and various possessions. It is the fourth most populous country in the world, with over 331 million people.",
      rating: 2.3,
      reviews: 133,
      location: "Libarty island, New York, NY",
    },
    {
      id: "abc12",
      name: "USA",
      imageUrl:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.uactXcTsY4Q_MLqVVHs1qwHaDt%26pid%3DApi%26h%3D160&f=1&ipt=86bad74d9d8a84e1d6da845c1c21bfa0b82db1f084e7d1b2e9740e643c8ef133&ipo=images",
      description:
        "The United States of America, commonly known as the United States (U.S.), is a federal republic consisting of 50 states, a federal district, five major territories, and various possessions. It is the fourth most populous country in the world, with over 331 million people.",
      rating: 2.3,
      reviews: 133,
      location: "Libarty island, New York, NY",
    },
    {
      id: "abc125",
      name: "USA",
      imageUrl:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.uactXcTsY4Q_MLqVVHs1qwHaDt%26pid%3DApi%26h%3D160&f=1&ipt=86bad74d9d8a84e1d6da845c1c21bfa0b82db1f084e7d1b2e9740e643c8ef133&ipo=images",
      description:
        "The United States of America, commonly known as the United States (U.S.), is a federal republic consisting of 50 states, a federal district, five major territories, and various possessions. It is the fourth most populous country in the world, with over 331 million people.",
      rating: 2.3,
      reviews: 133,
      location: "Libarty island, New York, NY",
    },
    {
      id: "abc124",
      name: "USA",
      imageUrl:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.uactXcTsY4Q_MLqVVHs1qwHaDt%26pid%3DApi%26h%3D160&f=1&ipt=86bad74d9d8a84e1d6da845c1c21bfa0b82db1f084e7d1b2e9740e643c8ef133&ipo=images",
      description:
        "The United States of America, commonly known as the United States (U.S.), is a federal republic consisting of 50 states, a federal district, five major territories, and various possessions. It is the fourth most populous country in the world, with over 331 million people.",
      rating: 2.3,
      reviews: 133,
      location: "Libarty island, New York, NY",
    },
    {
      id: "abc123",
      name: "USA",
      imageUrl:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.uactXcTsY4Q_MLqVVHs1qwHaDt%26pid%3DApi%26h%3D160&f=1&ipt=86bad74d9d8a84e1d6da845c1c21bfa0b82db1f084e7d1b2e9740e643c8ef133&ipo=images",
      description:
        "The United States of America, commonly known as the United States (U.S.), is a federal republic consisting of 50 states, a federal district, five major territories, and various possessions. It is the fourth most populous country in the world, with over 331 million people.",
      rating: 2.3,
      reviews: 133,
      location: "Libarty island, New York, NY",
    },
    {
      id: "abc11",
      name: "USA",
      imageUrl:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.uactXcTsY4Q_MLqVVHs1qwHaDt%26pid%3DApi%26h%3D160&f=1&ipt=86bad74d9d8a84e1d6da845c1c21bfa0b82db1f084e7d1b2e9740e643c8ef133&ipo=images",
      description:
        "The United States of America, commonly known as the United States (U.S.), is a federal republic consisting of 50 states, a federal district, five major territories, and various possessions. It is the fourth most populous country in the world, with over 331 million people.",
      rating: 2.3,
      reviews: 133,
      location: "Libarty island, New York, NY",
    },
  ];

  const route = useRoute();
  const { item } = route.params; // extract data from navigation route params
  console.log(item);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={{ backgroundColor: "white" }}>
          <NetworkImage
            source={country.imageUrl}
            width={"100"}
            height={350}
            radius={10}
          />
        </View>
        <AppBar
          title={country.name}
          color={"black"}
          color1={"white"}
          icon={"search"}
          onPress={() => navigation.goBack()}
          onPress1={() => {}}
        />
        <View style={styles.description}>
          <ReusableText
            text={country.title}
            size={22}
            family={"medium"}
            color="black"
          />

          <DescriptionText text={country.description} />
          <View style={{ alignContent: "center" }}>
            <View style={reusable_styles.rowWithSpace("space-between")}>
              <ReusableText
                text={"Popular Destination"}
                size={24}
                family={"medium"}
                color="black"
              />
              <TouchableOpacity onPress={() => {}}>
                <Feather name="list" size={24} />
              </TouchableOpacity>
            </View>
            <PopularList data={country.name} />
            <ReusableBTN
              onPress={() => navigation.navigate("HotelSeach")}
              btnText={"Find Best Hotels"}
              width={"65%"}
              backgroundColor={"green"}
              borderColor={"gray"}
              borderWidth={1}
              textColor={"white"}
              fontWeight={"medium"}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f3f4f8",
  },
  description: {
    marginHorizontal: 20,
    paddingTop: 20,
  },
});
