import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MypagePage from "../screens/mypage";

const MypageNavigator = () => {
  const Stact = createStackNavigator();

  return (
    <Stact.Navigator screenOptions={{ headerShown: false }}>
      <Stact.Screen name="mypage" component={MypagePage}></Stact.Screen>
    </Stact.Navigator>
  );
};

export default MypageNavigator;
