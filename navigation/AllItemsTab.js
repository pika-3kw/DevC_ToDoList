import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import AllItemsScreen from "../screens/AllItemsScreen";
import DetailItem from "../screens/DetailItem";

const Stack = createStackNavigator();

const AllItemsTab = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="allItems"
        component={AllItemsScreen}
        options={{ title: "All Items" }}
      />
      <Stack.Screen
        name="detailItem"
        component={DetailItem}
        options={{ title: "Item Name" }}
      />
    </Stack.Navigator>
  );
};

export default AllItemsTab;
