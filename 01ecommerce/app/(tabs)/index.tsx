import { StyleSheet, View, Text, Image } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { LinearGradient } from "expo-linear-gradient";
import Home from '@/components/Home'

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <LinearGradient
        // Button Linear Gradient
        colors={["#FDF0F3", "#FFFBFC"]}
      >
        <View style={styles.header}>
        <Ionicons name="apps" size={24} color="black" />
        <Image source={require('@/assets/images/Ellipse2.png')}style={styles.image}/>
        </View>
       <Home/>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    },
    header:{
      alignItems:'center',
      justifyContent:'space-between',
      flexDirection:'row',
      paddingHorizontal:10,
      paddingVertical:10,
      marginVertical:16
    },
    image:{
    width:40,
    height:40
  }
});
