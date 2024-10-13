import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ProductDetail  from '@/components/ProductDetail'
import { Stack } from 'expo-router'
// import styles from '@/components/style/screenheader.style.js'
const productpage = () => {
  return (
    <View style={{flex:1}}>
      <ProductDetail />
    </View>
  )
}

export default productpage;

const styles = StyleSheet.create({})