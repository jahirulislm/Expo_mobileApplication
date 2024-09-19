import { StyleSheet, Text, View, FlatList, Image } from "react-native";
import { useState } from "react";
import React from "react";
const DATA = [
    {
      id: '1',
      title: 'jacket jeans',
      image: require('@/assets/images/img1.png')
    },
    {
      id: '2',
      title: 'Acrylic Sweater',
      image: require('@/assets/images/img2.png')
    },
    {
      id: '3',
      title: 'Leather Jacket',
      image: require('@/assets/images/img3.png')
    },
  ];
  
  const Item = ({title}) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
  
const CardComponent = () => {
    
// source the image using useState
//   const [images, setimages] = useState([
//     require("../assets/images/img1.png"),
//     require("../assets/images/img2.png"),
//     require("../assets/images/img3.png"),
//   ]);
  return (
    <View>
      <FlatList
        horizontal
        data={DATA}
        renderItem={({ item, index }) => (
          <View>
            <Image
              source={item.image}
              key={index}
              style={{
                width: 180,
                height: 180,
                flexWrap: "wrap",
                resizeMode: "cover",
              }}
            />
            {/* <Image source={require('../assets/images/img1.png')} style={{
                width: 180,
                height: 180,
                flexWrap: "wrap",
                resizeMode: "cover",
              }} /> */}
            <Text>{item.title}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default CardComponent;

const styles = StyleSheet.create({});
