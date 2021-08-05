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
  const [messages, setMessages] = useState([]);
  let message = [];

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
    try {
      let channelList = [...joinedArray];
      const list = await Promise.all(
        channelList.map((data) => {
          chatRef
            .doc(data)
            .collection(user.uid)
            .limit(1)
            .get()
            .then((querySnapshot) => {
              querySnapshot.forEach((documentSnapshot) =>
                message.push(documentSnapshot.data())
              );
              setMessages(message);
            });
        })
      );
    } catch (error) {
      console.log(error);
    }
  };

  console.log(messages);

  return <ChatLobbyUI user={user} />;
}

export default ChatLobby;
