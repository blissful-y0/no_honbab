import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ListPage from "../screens/meeting";
import CreatePage from "../screens/meeting/create";
import { Image } from "react-native";

const MeetingNavigator = () => {
  const Stact = createStackNavigator();
  const headerBackStyle = {
    fontSize: 20,
    color: "#E24E4A",
    marginLeft: 10,
  };

  return (
    <Stact.Navigator screenOptions={{ headerShown: false }}>
      <Stact.Screen name="게시물 목록" component={ListPage} />
      <Stact.Screen
        options={{
          headerShown: true,
          headerTitleStyle: {
            fontSize: 15,
            fontWeight: "bold",
            color: "#E24E4A",
            marginLeft: -40,
          },
          headerBackImage: () => (
            <Image
              style={{ marginLeft: 5 }}
              source={require("../../public/meetings/arrow-left.png")}
            />
          ),
          headerTitle: "게시물 목록",
        }}
        name="모임 만들기"
        component={CreatePage}
      />
    </Stact.Navigator>
  );
};

export default MeetingNavigator;
