import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Home from "./components/Home";
import HotDish from "./components/HotDish";


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Home />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
