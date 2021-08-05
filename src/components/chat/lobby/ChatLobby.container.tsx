import React from "react";
import ChatLobbyUI from "./ChatLobby.presenter";
import { AuthContext } from "../../../../App";
import { useContext, useState, useEffect } from "react";
import firestore from "@react-native-firebase/firestore";

function ChatLobby() {
  const { user } = useContext(AuthContext);
  const userRef = firestore().collection("users");
  const chatRef = firestore().collection("chat");
  const [joinedArray, setJoinedArray] = useState([]);

  useEffect(() => {
    getJoinedArray();
    getChannel();
  }, []);

  const getJoinedArray = async () => {
    const result = await userRef
      .doc(user.uid)
      .get()
      .then((doc) => setJoinedArray(doc.data().meetingID));
  };

  const getChannel = async () => {
    const snapshot = await chatRef
      .doc(joinedArray[0])
      .collection(user.uid)
      .get();
    const documents = [];
    snapshot.forEach((doc) => {
      documents[doc.id] = doc.data();
    });
    return;
  };

  return <ChatLobbyUI user={user} />;
}

export default ChatLobby;
