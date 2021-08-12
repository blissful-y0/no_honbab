import React, { useContext, useState } from "react";
import auth from "@react-native-firebase/auth";
import { AuthContext } from "../../../App";
import MyPageUI from "./MyPage.presenter";
import firestore from "@react-native-firebase/firestore";
import { FETCH_JOINED_MEETING } from "./MyPage.query";
import { useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchJoinedMeetingsArgs,
} from "../../commons/types/generated/types";

function MyPage() {
  const { user } = useContext(AuthContext);

  if (user?.uid === null) {
    return;
  }

  const { data } = useQuery<IQuery, IQueryFetchJoinedMeetingsArgs>(
    FETCH_JOINED_MEETING,
    {
      variables: {
        userId: user.uid,
      },
    }
  );

  const logOut = async () => {
    try {
      await auth().signOut();
    } catch (error) {
      console.log(error);
    }
  };

  return <MyPageUI user={user} logOut={logOut} data={data} />;
}

export default MyPage;
