import React from "react";
import ChatLobbyUI from "./ChatLobby.presenter";
import { AuthContext } from "../../../../App";
import { useContext, useState, useEffect, useLayoutEffect } from "react";
import firestore from "@react-native-firebase/firestore";

function ChatLobby() {
  const { user } = useContext(AuthContext);
  const userRef = firestore().collection("users");
  const chatRef = firestore().collection("chat");

  const [joinedMeetings, setJoinedMeetings] = useState([
    "610b77fddaac94002a20d132",
    "61091048daac94002a20d12a",
  ]);
  const [messages, setMessages] = useState([]);

  useLayoutEffect(() => {
    const subscribe = () => {
      let messageArray = [];
      for (let i = 0; i < joinedMeetings.length; i++) {
        chatRef
          .doc(joinedMeetings[i])
          .collection(user.uid)
          .get()
          .then((doc) => {
            doc.docs.forEach((documentSnap) => {
              messageArray.push(documentSnap.data());
              if (messageArray.length === joinedMeetings.length) {
                setMessages(messageArray);
              }
            });
          });
      }
    };
    subscribe();
  }, []);

  return <ChatLobbyUI messages={messages} user={user} />;
}

export default ChatLobby;
