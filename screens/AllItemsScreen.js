import React, { useState } from "react";
import { View, StyleSheet, Text, Button, FlatList, Alert } from "react-native";

import Item from "../components/Item";

import data from "../data/items";

const AllItemsScreen = ({ navigation }) => {
  const [items, setItems] = useState(data);

  const removeHandler = (itemTarget) => {
    const { id, text } = itemTarget;
    const filterd = items.filter((item) => item.id !== id);

    Alert.alert("Delete your todo?", text, [
      {
        text: "No",
      },
      {
        text: "Yes",
        onPress: () => {
          setItems(filterd);
        },
      },
    ]);
  };

  const revertItem = (id) => {
    let listItem = [...items];
    const itemTarget = listItem.find((item) => item.id === id);
    const index = listItem.indexOf(itemTarget);

    listItem[index].completed = !itemTarget.completed;

    setItems(listItem);
  };

  const pressHandler = (item) => {
    revertItem(item.id);
    navigation.navigate("detailItem", { item });
  };

  const renderItem = ({ item }) => (
    <Item
      item={item}
      onPress={() => pressHandler(item)}
      onLongPress={() => removeHandler(item)}
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
