import React, { useState, useCallback, useEffect } from "react";
import { GiftedChat } from "react-native-gifted-chat";
import firestore from "@react-native-firebase/firestore";
import { useContext } from "react";
import { AuthContext } from "../../../../App";

export function Chat({ route, navigation }) {
  const [messages, setMessages] = useState([]);
  const { user } = useContext(AuthContext);

  console.log(route.params);

  useEffect(() => {
    loadMessages();
  }, []);

  const loadMessages = async () => {
    const result = await firestore()
      .collection("chat")
      .doc(route.params.meetingID)
      .collection(user.uid)
      .get()
      .then((querySnap) =>
        querySnap.forEach((docSnap) => {
          setMessages(docSnap.data());
        })
      );
  };

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );
  }, []);

  return (
    <GiftedChat
      messages={messages}
      onSend={(messages) => onSend(messages)}
      user={{
        _id: 1,
      }}
    />
  );
}

export default Chat;
