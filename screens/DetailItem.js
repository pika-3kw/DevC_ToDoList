import React from "react";
import { View, StyleSheet, Text } from "react-native";

import Detail from "../components/Detail";

const DetailItem = ({ route, navigation }) => {
  const { id, text } = route.params.item;

  return (
    <View style={styles.screen}>
      <Detail id={id} text={text} />
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
