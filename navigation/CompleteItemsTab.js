import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import CompleteItemsScreen from "../screens/CompleteItemsScreen";
import DetailItem from "../screens/DetailItem";

const Stack = createStackNavigator();

const CompleteItemsTab = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="completeItems"
        component={CompleteItemsScreen}
        options={{ title: "Complete Items" }}
      />
      <Stack.Screen
        name="detailItem"
        component={DetailItem}
        options={{ title: "Item Name" }}
      />
    </Stack.Navigator>
  );
};

export default CompleteItemsTab;
