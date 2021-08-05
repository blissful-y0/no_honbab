import React, { useContext, useEffect } from "react";
import auth from "@react-native-firebase/auth";
import { AuthContext } from "../../../App";
import MyPageUI from "./MyPage.presenter";
import firestore from "@react-native-firebase/firestore";

function MyPage() {
  const { user } = useContext(AuthContext);

  const logOut = async () => {
    try {
      await auth().signOut();
    } catch (error) {
      console.log(error);
    }
  };

  return <MyPageUI user={user} logOut={logOut} />;
}

export default MyPage;
