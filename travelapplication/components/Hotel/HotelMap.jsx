import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import MapView, { Marker } from "react-native-maps";
const HotelMap = ({ coordinates }) => {
  return (
    <TouchableOpacity>
      <MapView style={styles.map}>
        <Marker coordinate={coordinates} />
        <Marker coordinate={{ latitude: 37.78825, longitude: -122.4324 }} />
        <Marker coordinate={{ latitude: 37.7749, longitude: -122.4194 }} />
        <Marker coordinate={{ latitude: 37.7777, longitude: -122.4167 }} />
        <Marker coordinate={{ latitude: 37.7833, longitude: -122.4083 }} />
        <Marker coordinate={{ latitude: 37.7692, longitude: -122.4208 }} />
        <Marker coordinate={{ latitude: 37.7581, longitude: -122.4195 }} />
      </MapView>
    </TouchableOpacity>
  );
};

export default HotelMap;

const styles = StyleSheet.create({
  map: {
    height: 300,
    width: "100%",
    marginVertical: 20,
    borderRadius: 12,
  },
});
