import React from "react";
import { View, StyleSheet, Text } from "react-native";

import Detail from "../components/Detail";

const DetailItem = ({ route }) => {
  const { item } = route.params;

  return (
    <View style={styles.screen}>
      <Detail item={item} />
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
