import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import reusable_styles from "./reusable_style";
import AntDesign from "@expo/vector-icons/AntDesign";
import ReusableText from "./Reusable_text";

const Counter = () => {
  const [count, setCounter] = useState(1);

  const handleIncrement = () => {
    setCounter(count + 1);
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCounter(count - 1);
    }
  };
  return (
    <View style={reusable_styles.rowWithSpace("flex-start")}>
      <AntDesign
        name="minussquareo"
        size={24}
        color="black"
        onPress={handleDecrement}
      />
      <ReusableText
        text={` ${count} `}
        family={"medium"}
        size={18}
        color={"black"}
      />
      <AntDesign
        name="plussquareo"
        size={24}
        color="black"
        onPress={handleIncrement}
      />
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({});
