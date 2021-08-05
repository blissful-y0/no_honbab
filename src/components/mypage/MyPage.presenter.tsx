import React from "react";
import { Button } from "react-native";
import {
  InfoDetailView,
  MainView,
  UserInfoView,
  ProfileImage,
  UserInfo,
  UpdateProfile,
  UserInfoWrapper,
  UserName,
  UserEmail,
  LogOut,
  LogOutText,
  UpdateUserInfoButton,
  UpdateNamePhotoText,
} from "./Mypage.style";

function MyPageUI({ user, logOut }) {
  return (
    <MainView>
      <UserInfoView>
        <ProfileImage
          style={{
            width: 80,
            height: 80,
            borderRadius: 400,
            borderColor: "#e24e4a",
          }}
          source={{
            uri: `${user?.photoURL}`,
          }}
        />
        <UserInfoWrapper>
          <UserInfo>
            <UserName>{user?.displayName}</UserName>
            <UserEmail>{user?.email}</UserEmail>
          </UserInfo>
          <UpdateProfile>
            <UpdateUserInfoButton>
              <UpdateNamePhotoText>닉네임 변경</UpdateNamePhotoText>
            </UpdateUserInfoButton>
            <UpdateUserInfoButton>
              <UpdateNamePhotoText>사진 변경</UpdateNamePhotoText>
            </UpdateUserInfoButton>
          </UpdateProfile>
        </UserInfoWrapper>
      </UserInfoView>
      <InfoDetailView></InfoDetailView>
      <LogOut onPress={logOut}>
        <LogOutText>로그아웃</LogOutText>
      </LogOut>
    </MainView>
  );
}

export default MyPageUI;
