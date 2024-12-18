import { Tabs } from "expo-router";
import React from "react";

import { Ionicons } from "@expo/vector-icons";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "red",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => <Ionicons name="home" />,
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
          tabBarIcon: ({ color, focused }) => <Ionicons name="cart" />,
        }}
      />
      <Tabs.Screen
        name="proflie"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, focused }) => <Ionicons name="person" />,
        }}
      />
    </Tabs>
  );
}
