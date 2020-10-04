import React from "react";
import { View, StyleSheet, TextInput, Button } from "react-native";

const FormAddItem = (props) => {
  return (
    <View style={{ ...styles.formAddItem, ...props.style }}>
      <TextInput style={styles.input} />
      <View style={styles.button}>
        <Button title="Add" />
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
