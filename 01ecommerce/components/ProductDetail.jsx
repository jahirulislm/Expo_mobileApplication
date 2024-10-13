import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import React, { useEffect, useState } from "react";
import DATA from "@/components/data.js";
import { useNavigation, useRoute } from "@react-navigation/native";
import className from "twrnc";
const ProductDetail = () => {
  const route = useRoute();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    setProducts(DATA.product);
  }, [DATA]);

  return (
    <View>
      {/* product details */}
      {/* he added to the home screen stack navigation */}
      
      <Image source={  route.image } style={className`h-[350px] w-full`} />
    </View>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    // height: "100%",
  },
});
