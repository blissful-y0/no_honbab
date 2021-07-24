import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MeetingPage from "../screens/meeting";

const MeetingNavigator = () => {
  const Stact = createStackNavigator();

  return (
    <Stact.Navigator screenOptions={{ headerShown: false }}>
      <Stact.Screen name="map" component={MeetingPage}></Stact.Screen>
    </Stact.Navigator>
  );
};

export default MeetingNavigator;
