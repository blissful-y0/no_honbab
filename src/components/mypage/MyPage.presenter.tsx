import React from "react";
import { ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/core";
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
  FetchedMeetings,
  MeetingTouchOpacity,
  MeetingWrapper,
  FoodType,
  FoodTypeText,
  MeetingDetail,
  RealtimeMeetingDetail,
  MeetingLimitText,
  JoinedMemberStatusWrapper,
  MemberText,
  MemberJoinedstatusText,
  MeetingTitle,
  MeetingDetailWrapper,
  MeetingTimeLogo,
  MeetingTimeText,
  MeetingLocationWrapper,
  MeetingLocationWrapperForRow,
  MeetingLocationLogo,
  MeetingLocaitonTitle,
  MeetingLocaiton,
  NodataView,
  NodataText,
  NickNameChangeModal,
} from "./Mypage.style";

function MyPageUI({ user, logOut, data }) {
  const navigation = useNavigation();

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
      <InfoDetailView>
        <ScrollView style={{ width: "100%", height: "100%", marginTop: "2%" }}>
          {!data ? (
            <NodataView>
              <NodataText>참여한 미팅이 없습니다 ㅠ_ㅠ... </NodataText>
            </NodataView>
          ) : (
            data?.fetchJoinedMeetings?.map((data) => (
              <FetchedMeetings key={data._id}>
                <MeetingTouchOpacity
                  onPress={() =>
                    navigation.navigate("게시물 읽기", { id: data._id })
                  }
                >
                  <MeetingWrapper>
                    <FoodType type={data.foodType}>
                      <FoodTypeText type={data.foodType}>
                        {data.foodType}
                      </FoodTypeText>
                    </FoodType>
                    <MeetingDetail>
                      <RealtimeMeetingDetail>
                        <MeetingLimitText>
                          {data.dateLimit}일 뒤 모집 마감
                        </MeetingLimitText>
                        <JoinedMemberStatusWrapper>
                          <MemberText>모집원</MemberText>
                          <MemberJoinedstatusText>
                            {data.countMember} / {data.recruitment}
                          </MemberJoinedstatusText>
                        </JoinedMemberStatusWrapper>
                      </RealtimeMeetingDetail>
                      <MeetingTitle>{data.title}</MeetingTitle>
                      <MeetingDetailWrapper>
                        <MeetingTimeLogo
                          source={require("../../../public/meetings/time.png")}
                        />
                        <MeetingTimeText>{data.date}</MeetingTimeText>
                      </MeetingDetailWrapper>
                      <MeetingLocationWrapper>
                        <MeetingLocationWrapperForRow>
                          <MeetingLocationLogo
                            source={require("../../../public/meetings/location.png")}
                          />
                          <MeetingLocaitonTitle>
                            {data.place}
                          </MeetingLocaitonTitle>
                        </MeetingLocationWrapperForRow>
                        <MeetingLocaiton>{data.address}</MeetingLocaiton>
                      </MeetingLocationWrapper>
                    </MeetingDetail>
                  </MeetingWrapper>
                </MeetingTouchOpacity>
              </FetchedMeetings>
            ))
          )}
        </ScrollView>
      </InfoDetailView>
      <LogOut onPress={logOut}>
        <LogOutText>로그아웃</LogOutText>
      </LogOut>
    </MainView>
  );
}

export default MyPageUI;
