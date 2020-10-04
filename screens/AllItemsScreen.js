import React, { useState } from "react";
import { View, StyleSheet, Text, Button, FlatList, Alert } from "react-native";

import Item from "../components/Item";
import FormAddItem from "../components/FormAddItem";
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

  const addItem = (text) => {
    const item = {
      id: Math.random(),
      text: text,
      completed: false,
    };

    setItems([...items, item]);
  };

  return (
    <View style={styles.screen}>
      <FormAddItem style={styles.formAddItem} addItem={addItem} />
      <FlatList
        style={styles.listItem}
        data={items}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        inverted={true}
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
    flex: 10,
    backgroundColor: "#ecf0f1",
    width: "100%",
  },
  formAddItem: {
    flex: 0.1,
  },
});

export default AllItemsScreen;
