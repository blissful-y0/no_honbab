import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, ScrollView, Text, View } from "react-native";
import {
  BannerImage,
  BannerRemarketImage,
  CreateMeetingButton,
  SearchImage,
  SubView,
  SearchIcon,
  MainView,
  SearchInput,
  SearchView,
  SearchLocationText,
  LocationSubWrapper,
  SearchResultText,
  TotalNumberResultText,
  FetchedMeetings,
  MeetingWrapper,
  FoodType,
  FoodTypeText,
  MeetingDetail,
  MeetingLimitText,
  MeetingTitle,
  MeetingDetailWrapper,
  MeetingTimeText,
  MeetingLocaitonTitle,
  MeetingLocaiton,
  MeetingLocationWrapper,
  MeetingTimeLogo,
  MeetingLocationWrapperForRow,
  MeetingLocationLogo,
  RealtimeMeetingDetail,
  JoinedMemberStatusWrapper,
  MemberText,
  MemberJoinedstatusText,
} from "./MeetingList.style";

const ListUI = ({ inputText, setInputText }) => {
  const navigation = useNavigation();

  return (
    <MainView>
      <CreateMeetingButton onPress={() => navigation.navigate("모임 만들기")}>
        <Image
          source={require("../../../../public/meetings/create-button.png")}
        />
      </CreateMeetingButton>
      <SearchView>
        <SearchInput
          style={{ paddingHorizontal: 10 }}
          placeholder="검색어를 입력해 주세요"
          maxLength={25}
          value={inputText}
        />
        <SearchImage
          source={require("../../../../public/meetings/search-bold.png")}
        />
      </SearchView>
      <SubView>
        <BannerImage
          source={require("../../../../public/meetings/banner.png")}
        />
        <BannerRemarketImage
          source={require("../../../../public/meetings/banner-remark.png")}
        />
      </SubView>
      <SubView>
        <LocationSubWrapper>
          <SearchIcon
            source={require("../../../../public/meetings/search-s.png")}
          />
          <SearchLocationText>강남역</SearchLocationText>
          <SearchResultText>주변 검색된 결과입니다.</SearchResultText>
        </LocationSubWrapper>
        <TotalNumberResultText>100+ 건이 검색되었습니다.</TotalNumberResultText>
      </SubView>
      <ScrollView style={{ width: "100%", height: "100%" }}>
        <FetchedMeetings>
          <MeetingWrapper>
            <FoodType type="한식">
              <FoodTypeText type="한식">한식</FoodTypeText>
            </FoodType>
            <MeetingDetail>
              <RealtimeMeetingDetail>
                <MeetingLimitText>5일 뒤 모집 마감</MeetingLimitText>
                <JoinedMemberStatusWrapper>
                  <MemberText>모집원</MemberText>
                  <MemberJoinedstatusText>1 / 4</MemberJoinedstatusText>
                </JoinedMemberStatusWrapper>
              </RealtimeMeetingDetail>
              <MeetingTitle>감자탕 먹을 사람 모여!!</MeetingTitle>
              <MeetingDetailWrapper>
                <MeetingTimeLogo
                  source={require("../../../../public/meetings/time.png")}
                />
                <MeetingTimeText>2021-02-22 06:00 PM</MeetingTimeText>
              </MeetingDetailWrapper>
              <MeetingLocationWrapper>
                <MeetingLocationWrapperForRow>
                  <MeetingLocationLogo
                    source={require("../../../../public/meetings/location.png")}
                  />
                  <MeetingLocaitonTitle>강남역 일미집</MeetingLocaitonTitle>
                </MeetingLocationWrapperForRow>
                <MeetingLocaiton>서울특별시 강남구 어쩌구</MeetingLocaiton>
              </MeetingLocationWrapper>
            </MeetingDetail>
          </MeetingWrapper>
        </FetchedMeetings>
      </ScrollView>
    </MainView>
  );
};

export default ListUI;
