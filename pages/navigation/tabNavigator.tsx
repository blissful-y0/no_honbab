import React from "react";
import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MeetingsNavigator from "./meeting";
import MapNavigator from "./map";
import ChattingNavigator from "./chat";
import MypageNavigator from "./mypage";

function TabNavigator() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName;

          if (route.name === "탐색 게시판") {
            iconName = focused ? (
              <Image
                source={require("../../public/navigation/meetings-on.png")}
              />
            ) : (
              <Image
                source={require("../../public/navigation/meetings-off.png")}
              />
            );
          } else if (route.name === "내 주변") {
            iconName = focused ? (
              <Image source={require("../../public/navigation/map-on.png")} />
            ) : (
              <Image source={require("../../public/navigation/map-off.png")} />
            );
          } else if (route.name === "채팅") {
            iconName = focused ? (
              <Image
                source={require("../../public/navigation/chatting-on.png")}
              />
            ) : (
              <Image
                source={require("../../public/navigation/chatting-off.png")}
              />
            );
          } else if (route.name === "내 프로필") {
            iconName = focused ? (
              <Image
                source={require("../../public/navigation/mypage-on.png")}
              />
            ) : (
              <Image
                source={require("../../public/navigation/mypage-off.png")}
              />
            );
          }
          return iconName;
        },
      })}
      tabBarOptions={{
        activeTintColor: "#E24E4A",
        inactiveTintColor: "#bdbdbd",
      }}
    >
      <Tab.Screen name="탐색 게시판" component={MeetingsNavigator} />
      <Tab.Screen name="내 주변" component={MapNavigator} />
      <Tab.Screen name="채팅" component={ChattingNavigator} />
      <Tab.Screen name="내 프로필" component={MypageNavigator} />
    </Tab.Navigator>
  );
}

export default TabNavigator;
