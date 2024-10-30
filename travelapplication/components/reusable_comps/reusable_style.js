import { StyleSheet } from "react-native";

const reusable_styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 10,
  },
  rowWithSpace: (justifyContent) => ({
    // css style function to add addtional properties by parameter
    flexDirection: "row",
    alignItems: "center",
    justifyContent: justifyContent,
  }),
});

export default reusable_styles;
