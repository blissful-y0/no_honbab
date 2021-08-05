import React from "react";
import Chat from "../../../src/components/chat/room/ChatRoom.container";

const ChattingPage = ({ navigation, route }) => {
  return <Chat navigation={navigation} route={route} />;
};
export default ChattingPage;
