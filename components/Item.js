import React from "react";
import { View, StyleSheet, Text, TouchableNativeFeedback } from "react-native";

const Item = (props) => {
  const { text, completed } = props.item;

  return (
    <TouchableNativeFeedback {...props}>
      <View style={[styles.item, completed ? styles.completed : styles.active]}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableNativeFeedback>
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
    backgroundColor: "#00b894",
  },
  active: {
    backgroundColor: "#ff7675",
  },
});

export default Item;