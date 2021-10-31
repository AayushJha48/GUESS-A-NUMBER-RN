import React from "react";
import { View, StyleSheet } from "react-native";

const Card = (props) => {
  return (
    <View style={{ ...styles.card, ...props.style }}>{props.children}</View>
  );
};

const styles = StyleSheet.create({
  card: {
    // These 4 shadow properties only works on IOS
    shadowColor: "black",
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowOpacity: 1,
    shadowRadius: 6,

    // Elevation property only works on android
    elevation: 8,
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
  },
});

export default Card;
