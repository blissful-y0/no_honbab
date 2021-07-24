import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MapPage from "../screens/map";

const MapNavigator = () => {
  const Stact = createStackNavigator();

  return (
    <Stact.Navigator screenOptions={{ headerShown: false }}>
      <Stact.Screen name="map" component={MapPage}></Stact.Screen>
    </Stact.Navigator>
  );
};

export default MapNavigator;
