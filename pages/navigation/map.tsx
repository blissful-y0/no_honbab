import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MapPage from "../screens/map";
import { StackActions } from "@react-navigation/native";
import ReadPage from "../screens/meeting/read";

const MapNavigator = () => {
  const Stact = createStackNavigator();

  return (
    <Stact.Navigator screenOptions={{ headerShown: false }}>
      <Stact.Screen name="map" component={MapPage}></Stact.Screen>
      <Stact.Screen
        options={{ headerShown: false }}
        name="게시물 읽기"
        component={ReadPage}
      ></Stact.Screen>
    </Stact.Navigator>
  );
};

export default MapNavigator;
