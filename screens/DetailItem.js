import React from "react";
import { View, StyleSheet, Text } from "react-native";

const DetailItem = () => {
  return (
    <View style={styles.screen}>
      <Text>Detail Item</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default DetailItem;
