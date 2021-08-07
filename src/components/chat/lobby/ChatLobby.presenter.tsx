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

function ChatLobbyUI({ user, messages }) {
  const navigation = useNavigation();
  const option = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const today = new Date().toLocaleDateString();

  return (
    <MainView>
      <TopAds source={require("../../../../public/chat/chatad.png")} />
      <ScrollView style={{ width: "100%" }}>
        {messages.map((data) => (
          <ListView key={data?.meetingID}>
            <ChatRoomContainer
              onPress={() =>
                navigation.navigate("채팅", {
                  userID: data?.user?.user,
                  user: data?.user?.name,
                  userAvatar: data?.user?.avatar,
                  meetingID: data?.meetingID,
                })
              }
            >
              <ProfilePhoto
                source={{ uri: `${data?.user?.avatar}` }}
                style={{ borderRadius: 400, width: 50, height: 50 }}
              />
              <MessageInfoWrapper>
                <DisplayNameAndCreatedAtWrapper>
                  <UserName>{data?.user?.name}</UserName>
                  <UpdatedAt>
                    {data?.createdAt?.toDate().toLocaleDateString() === today
                      ? data?.createdAt?.toDate().toLocaleTimeString("ko-KR")
                      : data?.createdAt
                          ?.toDate()
                          .toLocaleDateString("ko-KR", option)}
                  </UpdatedAt>
                </DisplayNameAndCreatedAtWrapper>
                <LatestMessage>{data?.text.slice(0, 20) + "..."}</LatestMessage>
              </MessageInfoWrapper>
            </ChatRoomContainer>
            <GreyLine />
          </ListView>
        ))}
      </ScrollView>
    </MainView>
  );
}

export default ChatLobbyUI;
