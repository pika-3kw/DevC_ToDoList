import React from "react";
import { View, StyleSheet, Text, TouchableWithoutFeedback } from "react-native";

const Item = (props) => {
  const { text, completed } = props.item;

  return (
    <TouchableWithoutFeedback {...props}>
      <View style={[styles.item, completed ? styles.completed : styles.active]}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  item: {
    width: "100%",
    backgroundColor: "white",
    marginVertical: 10,
    padding: 20,
  },
  completed: {
    backgroundColor: "#bdc3c7",
  },
  active: {
    backgroundColor: "#2ecc71",
  },
});

export default Item;
