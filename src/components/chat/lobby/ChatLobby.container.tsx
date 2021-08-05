import React from "react";
import ChatLobbyUI from "./ChatLobby.presenter";
import { AuthContext } from "../../../../App";
import { useContext } from "react";
import firstore from "@react-native-firebase/firestore";
import { SnapshotViewIOSBase } from "react-native";

function ChatLobby() {
  const { user } = useContext(AuthContext);

  const getUser = async () => {
    await firstore()
      .collection("users")
      .doc("1OZuPRUA2hyV3PaOwq5g")
      .get()
      .then((documentSnapshot) => {
        console.log("User exists: ", documentSnapshot.exists);
        if (documentSnapshot.exists) {
          console.log("User data: ", documentSnapshot.data());
        }
      });
  };

  return <ChatLobbyUI user={user} />;
}

export default ChatLobby;
