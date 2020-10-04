import React from "react";
import { View, StyleSheet, Text } from "react-native";

const Detail = ({ item }) => {
  const { text, completed } = item;

  return (
    <View style={[styles.detail, completed ? styles.completed : styles.active]}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  detail: {
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    width: "90%",
    backgroundColor: "white",
    height: "60%",
    padding: 20,
  },
  text: {
    fontSize: 19,
  },
  completed: {
    backgroundColor: "#bdc3c7",
  },
  active: {
    backgroundColor: "#2ecc71",
  },
});

export default Detail;
