import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Chat, Home, Profile, Location } from "../../index";
import Ionicons from "@expo/vector-icons/Ionicons";
const Tab = createBottomTabNavigator();
const TabBarStyle = {
  padding: 10,
  borderRadius: 12,
  height: 60,
  position: "absolute",
  bottom: 8,
  left: 12,
  right: 12,
};
const BottomTap = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      // activeColor="#EB6A58"
      tabBarHidekeyBoard={true}
      inactiveColor="red"
      screenOptions={{
        headerShown: false,
        tabBarStyle: TabBarStyle,
        showIcon: true,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
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
        ScreenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          // TabBarStyle: TabBarStyle,
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
        ScreenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          // TabBarStyle: TabBarStyle,

          TabBarIcon: ({ focused }) => {
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
        ScreenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          // TabBarStyle: TabBarStyle,
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
