import React from "react";
import { View, StyleSheet, Text } from "react-native";

const CompleteItemsScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>Complete Items Screen</Text>
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

export default CompleteItemsScreen;
