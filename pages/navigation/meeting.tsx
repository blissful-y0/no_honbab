import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ListPage from "../screens/meeting";
import CreatePage from "../screens/meeting/create";
import { Image } from "react-native";
import ReadPage from "../screens/meeting/read";

const MeetingNavigator = () => {
  const Stact = createStackNavigator();
  const headerBackStyle = {
    fontSize: 20,
    color: "#E24E4A",
    marginLeft: 10,
  };

  return (
    <Stact.Navigator screenOptions={{ headerShown: false }}>
      <Stact.Screen
        name="게시물 목록"
        options={{
          headerShown: false,
          headerTitle: "",
          headerTintColor: "#e24e4a",
        }}
        component={ListPage}
      />
      <Stact.Screen
        options={{
          headerShown: true,
          headerBackImage: () => (
            <Image
              style={{ marginLeft: 5 }}
              source={require("../../public/meetings/arrow-left.png")}
            />
          ),
          headerTitle: "",
        }}
        name="게시물 작성"
        component={CreatePage}
      />
      <Stact.Screen
        options={{
          headerShown: true,
          headerBackImage: () => (
            <Image
              style={{ marginLeft: 5 }}
              source={require("../../public/meetings/arrow-left.png")}
            />
          ),
          headerBackTitleVisible: false,
        }}
        name="게시물 읽기"
        component={ReadPage}
      />
    </Stact.Navigator>
  );
};

export default MeetingNavigator;
