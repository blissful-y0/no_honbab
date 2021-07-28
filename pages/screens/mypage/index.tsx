import React, { useContext } from "react";
import { Button, View } from "react-native";
import auth from "@react-native-firebase/auth";
import { AuthContext } from "../../../src/components/hoc/AuthProvider";

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
      <View>
        <Button title="hello" onPress={logOut}></Button>
      </View>
    </>
  );
};

export default MyPage;
