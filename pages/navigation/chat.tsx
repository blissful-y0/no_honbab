import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ChattingPage from "../screens/chat";

const ChattingNavigator = () => {
  const Stact = createStackNavigator();

  return (
    <Stact.Navigator screenOptions={{ headerShown: false }}>
      <Stact.Screen name="chatting" component={ChattingPage}></Stact.Screen>
    </Stact.Navigator>
  );
};

export default ChattingNavigator;
