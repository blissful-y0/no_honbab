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
    "61139855242eef0029c0ce0f",
    "611398d2242eef0029c0ce13",
  ]);
  const [messages, setMessages] = useState([]);

  useLayoutEffect(() => {
    const subscribe = async () => {
      let messageArray = [];
      for (let i = 0; i < joinedMeetings.length; i++) {
        await chatRef
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
