import { useNavigation } from "@react-navigation/native";
import React from "react";
import { ScrollView } from "react-native";
import {
  MainView,
  TopAds,
  ChatRoomContainer,
  MessageInfoWrapper,
  ProfilePhoto,
  DisplayNameAndCreatedAtWrapper,
  UserName,
  UpdatedAt,
  GreyLine,
  ListView,
  LatestMessage,
} from "./ChatLobby.style";

function ChatLobbyUI({ user }) {
  const navigation = useNavigation();

  return (
    <MainView>
      <TopAds source={require("../../../../public/chat/chatad.png")} />
      <ScrollView style={{ width: "100%" }}>
        <ListView>
          <ChatRoomContainer
            onPress={() =>
              navigation.navigate("채팅", { user: user.displayName })
            }
          >
            <ProfilePhoto
              source={{ uri: `${user.photoURL}` }}
              style={{ borderRadius: 400, width: 50, height: 50 }}
            />
            <MessageInfoWrapper>
              <DisplayNameAndCreatedAtWrapper>
                <UserName>{user.displayName}</UserName>
                <UpdatedAt>2021년 07월 27일</UpdatedAt>
              </DisplayNameAndCreatedAtWrapper>
              <LatestMessage>안녕하세요!!</LatestMessage>
            </MessageInfoWrapper>
          </ChatRoomContainer>
          <GreyLine />
        </ListView>
      </ScrollView>
    </MainView>
  );
}

export default ChatLobbyUI;
