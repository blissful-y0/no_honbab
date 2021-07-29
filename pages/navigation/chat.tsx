import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Room from "../screens/chat/Room";
import Lobby from "../screens/chat/Lobby";
import { Image } from "react-native";

const ChattingNavigator = () => {
  const Stact = createStackNavigator();

  return (
    <Stact.Navigator screenOptions={{ headerShown: false }}>
      <Stact.Screen name="채팅 목록" component={Lobby}></Stact.Screen>
      <Stact.Screen
        name="채팅"
        component={Room}
        options={({ route }) => ({
          headerShown: true,
          headerBackImage: () => (
            <Image
              style={{ marginLeft: 5 }}
              source={require("../../public/meetings/arrow-left.png")}
            />
          ),
          headerTitle: route.params.user,
          headerBackTitleVisible: false,
          headerStyle: {
            shadowRadius: 10,
            shadowOpacity: 0.5,
          },
        })}
      ></Stact.Screen>
    </Stact.Navigator>
  );
};

export default ChattingNavigator;
