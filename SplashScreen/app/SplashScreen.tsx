import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const SplashScreen = () => {
  return (
    <SafeAreaView style={{flex:1, backgroundColor:'red'}}>
      <Text>SplashScreen</Text>
    </SafeAreaView>
  )
}

export default SplashScreen

const styles = StyleSheet.create({})