import styled from "@emotion/native";

export const MainView = styled.View`
  flex: 1;
  background-color: white;
  justify-content: center;
  align-items: center;
  padding-top: 10%;
`;

export const TopAds = styled.Image`
  width: 100%;
`;

export const ChatRoomContainer = styled.TouchableOpacity`
  width: 100%;
  flex-direction: row;
  justify-content: center;
  margin-top: 2%;
  margin-bottom: 2%;
  padding: 2%;
  align-items: center;
`;

export const MessageInfoWrapper = styled.View`
  width: 75%;
  margin-left: 2%;
  justify-content: center;
`;

export const DisplayNameAndCreatedAtWrapper = styled.View`
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

export const ProfilePhoto = styled.Image``;

export const UserName = styled.Text`
  color: #333333;
  font-size: 20px;
  font-weight: bold;
`;

export const UpdatedAt = styled.Text`
  color: #828282;
  font-size: 14px;
`;

export const GreyLine = styled.View`
  width: 90%;
  border: 1px solid #e0e0e0;
`;

export const ListView = styled.View`
  align-items: center;
`;

export const LatestMessage = styled.Text`
  color: #bdbdbd;
  font-size: 15px;
  margin-top: 3%;
`;
