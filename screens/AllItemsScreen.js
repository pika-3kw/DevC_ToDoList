import React from "react";
import { View, StyleSheet, Text } from "react-native";

const AllItemsScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>All Items Screen</Text>
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

export default AllItemsScreen;
