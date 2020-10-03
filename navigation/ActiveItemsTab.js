import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ActiveItemsScreen from "../screens/ActiveItemsScreen";
import DetailItem from "../screens/DetailItem";

const Stack = createStackNavigator();

const ActiveItemsTab = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="activeItems"
        component={ActiveItemsScreen}
        options={{ title: "Active Items" }}
      />
      <Stack.Screen
        name="detailItem"
        component={DetailItem}
        options={{ title: "Item Name" }}
      />
    </Stack.Navigator>
  );
};

export default ActiveItemsTab;
