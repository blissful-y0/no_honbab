import React, { useState, useCallback, useEffect } from "react";
import { GiftedChat } from "react-native-gifted-chat";
import firestore from "@react-native-firebase/firestore";
import { useContext } from "react";
import { AuthContext } from "../../../../App";

export function Chat({ route, navigation }) {
  const [messages, setMessages] = useState([]);
  const { user } = useContext(AuthContext);
  const [asdf, setasdf] = useState([]);

  useEffect(() => {
    loadMessages();
  }, []);

  const loadMessages = async () => {
    const subscribe = firestore()
      .collection("chat")
      .doc(route.params.meetingID)
      .collection(user.uid)
      .onSnapshot((snapShot) => {
        snapShot.docChanges().forEach((change) => {
          if (change.type == "added") {
            let data: any = change.doc.data();
            data.createdAt = data.createdAt.toDate();
            setMessages((prevMesasges) =>
              GiftedChat.append(prevMesasges, data)
            );
          }
        });
      });
    return () => subscribe;
  };

  const onSend = useCallback((messages = []) => {
    firestore()
      .collection("chat")
      .doc(route.params.meetingID)
      .collection(user.uid)
      .add(messages[0]);
    // setMessages((previousMessages) =>
    //   GiftedChat.append(previousMessages, messages)
    // );
  }, []);

  return (
    <GiftedChat
      messages={messages}
      onSend={(messages) => onSend(messages)}
      user={{
        _id: user.uid,
        avatar: user.photoURL,
        name: user.displayName,
      }}
    />
  );
}

export default Chat;
