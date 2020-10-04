import React, { useState } from "react";
import { View, StyleSheet, TextInput, Button } from "react-native";

const FormAddItem = (props) => {
  const [input, setInput] = useState("");

  return (
    <View style={{ ...styles.formAddItem, ...props.style }}>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setInput(text)}
        value={input}
      />
      <View style={styles.button}>
        <Button title="Add" onPress={() => props.addItem(input)} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  formAddItem: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    width: "70%",
    borderBottomColor: "grey",
    borderBottomWidth: 1,
  },
  button: {
    width: "15%",
  },
});

export default FormAddItem;
