import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Chat, Home, Profile, Location } from "../../index";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();
const TabBarStyle = {
  padding: 20,
  borderRadius: 20,
  height: 80,
  position: "absolute",
  bottom: 20,
  left: 20,
  right: 20,
};
const BottomTap = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#EB6A58"
      tabBarHidekeyBoard={true}
      headerShown={false}
      inactiveColor="grey"
      tabBarOptions={{ style: TabBarStyle }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            <Ionicons
              name={focused ? "home" : "home-outline"}
              color={focused ? "green" : "gray"}
              size={26}
            />;
          },
        }}
      />
      <Tab.Screen
        name="Chat"
        component={Chat}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            <Ionicons
              name={focused ? "chatbubble" : "chatbubble-outline"}
              color={focused ? "green" : "gray"}
              size={26}
            />;
          },
        }}
      />
      <Tab.Screen
        name="Location"
        component={Location}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            <Ionicons
              name={focused ? "map" : "map-outline"}
              color={focused ? "green" : "gray"}
              size={26}
            />;
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            <Ionicons
              name={focused ? "person" : "person-add-outline"}
              color={focused ? "green" : "gray"}
              size={26}
            />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTap;
