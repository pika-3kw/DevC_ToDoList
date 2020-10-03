import React from "react";
import { View, StyleSheet, Text } from "react-native";

const Detail = ({ id, text }) => {
  return (
    <View style={styles.detail}>
      <Text style={styles.id}>{id}</Text>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  detail: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
});

export default Detail;
