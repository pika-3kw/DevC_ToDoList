import React from "react";

import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import ActiveItemsTab from "./navigation/ActiveItemsTab";
import AllItemsTab from "./navigation/AllItemsTab";
import CompleteItemsTab from "./navigation/CompleteItemsTab";

const Tab = createBottomTabNavigator();

const routeIcons = (name, focused) => {
  const color = focused ? "blue" : "grey";
  if (name === "completeItems") {
    return <AntDesign name="checkcircleo" size={24} color={color} />;
  }
  if (name === "allItems") {
    return <MaterialIcons name="add-circle-outline" size={32} color={color} />;
  }
  if (name === "activeItems") {
    return <AntDesign name="questioncircleo" size={24} color={color} />;
  }
};

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="allItems"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => routeIcons(route.name, focused),
        })}
        tabBarOptions={{
          activeTintColor: "blue",
          inactiveTintColor: "grey",
        }}
      >
        <Tab.Screen
          name="completeItems"
          component={CompleteItemsTab}
          options={{ title: "Complete Items" }}
        />
        <Tab.Screen
          name="allItems"
          component={AllItemsTab}
          options={{ title: "All Items" }}
        />
        <Tab.Screen
          name="activeItems"
          component={ActiveItemsTab}
          options={{ title: "Active Items" }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
