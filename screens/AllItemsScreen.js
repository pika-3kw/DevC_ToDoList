import React, { useState } from "react";
import { View, StyleSheet, Text, Button, FlatList } from "react-native";

import Item from "../components/Item";

import data from "../data/items";

const AllItemsScreen = ({ navigation }) => {
  const [items, setItems] = useState(data);

  const removeHandler = (id) => {
    const filterd = items.filter((item) => item.id !== id);
    setItems(filterd);
  };

  const renderItem = ({ item }) => (
    <Item
      item={item}
      onPress={() => navigation.navigate("detailItem", { item })}
      onLongPress={() => removeHandler(item.id)}
    />
  );

  return (
    <View style={styles.screen}>
      <FlatList
        style={styles.listItem}
        data={items}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  listItem: {
    flex: 1,
    backgroundColor: "#ecf0f1",
    width: "100%",
  },
});

export default AllItemsScreen;
