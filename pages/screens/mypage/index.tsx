import React, { useContext } from "react";
import { Button, View, Text } from "react-native";
import auth from "@react-native-firebase/auth";

const MyPage = () => {
  const logOut = async () => {
    try {
      await auth().signOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <View
        style={{
          flex: 1,
          backgroundColor: "pink",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button title="logout" onPress={logOut} />
      </View>
    </>
  );
};

export default MyPage;
