import styled from "@emotion/native";

export const MainView = styled.View`
  flex: 1;
  background-color: white;
`;

export const UserInfoView = styled.View`
  flex: 5;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 8%;
  padding-top: 15%;
  flex-direction: row;
`;

export const InfoDetailView = styled.View`
  flex: 10;
  align-items: center;
  border: 1px solid pink;
`;

export const ProfileImage = styled.Image``;

export const UserInfo = styled.View`
  width: 100%;
  flex-direction: column;
`;

export const UpdateProfile = styled.View`
  width: 100%;
  height: 30px;
  flex-direction: row;
  margin-top: 3%;
  justify-content: space-around;
`;

export const UserInfoWrapper = styled.View`
  width: 70%;
  margin-left: 5%;
`;

export const UserName = styled.Text`
  color: #333333;
  font-size: 20px;
  font-weight: bold;
`;

export const UserEmail = styled.Text`
  color: #bdbdbd;
  font-size: 13px;
`;

export const LogOut = styled.TouchableOpacity`
  flex: 1;
  background-color: white;
  align-items: center;
  justify-content: center;
`;

export const LogOutText = styled.Text`
  font-size: 15px;
  color: #e24e4a;
`;

export const UpdateUserInfoButton = styled.TouchableOpacity`
  width: 48%;
  background-color: #e24e4a;
  border: 0px;
  border-radius: 2px;
  align-items: center;
  justify-content: center;
`;

export const UpdateNamePhotoText = styled.Text`
  font-size: 12px;
  color: white;
  font-weight: bold;
`;
