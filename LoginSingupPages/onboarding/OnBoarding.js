import React from 'react';
import { View, StyleSheet, ImageBackground, Text } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const OnBoarding = () => {
  return (
    <View style={styles.container}>
      {/* Image Layer */}
      <ImageBackground
        source={{ uri: 'https://example.com/your-image.jpg' }} // Replace with your image URL
        style={styles.imageBackground}
        resizeMode="cover"
      >
        {/* Zigzag Shape */}
        <Svg
          height="150"
          width="100%"
          style={styles.zigzag}
          viewBox="0 0 100 20"
          preserveAspectRatio="none"
        >
          <Path
            d="M0 10 L10 0 L20 10 L30 0 L40 10 L50 0 L60 10 L70 0 L80 10 L90 0 L100 10 V20 H0 Z"
            fill="#ff6347" // Zigzag color
          />
        </Svg>
        {/* Content */}
        <View style={styles.content}>
          <Text style={styles.text}>Welcome to the App</Text>
        </View>
      </ImageBackground>
      {/* Solid Color Layer */}
      <View style={styles.solidLayer}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  zigzag: {
    position: 'absolute',
    bottom: 0,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    fontSize: 24,
    color: '#fff',
    textAlign: 'center',
  },
  solidLayer: {
    height: 100,
    backgroundColor: '#4caf50', // Adjust this color
  },
});

export default OnBoarding;
