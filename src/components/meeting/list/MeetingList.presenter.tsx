import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, ScrollView } from "react-native";
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
  MeetingTouchOpacity,
} from "./MeetingList.style";

const ListUI = ({ inputText, setInputText, data }) => {
  const navigation = useNavigation();

  return (
    <MainView>
      <CreateMeetingButton onPress={() => navigation.navigate("게시물 작성")}>
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
      <ScrollView style={{ width: "100%", height: "100%", marginTop: "2%" }}>
        {data?.fetchMeetings?.map((data) => (
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
                      source={require("../../../../public/meetings/time.png")}
                    />
                    <MeetingTimeText>{data.date}</MeetingTimeText>
                  </MeetingDetailWrapper>
                  <MeetingLocationWrapper>
                    <MeetingLocationWrapperForRow>
                      <MeetingLocationLogo
                        source={require("../../../../public/meetings/location.png")}
                      />
                      <MeetingLocaitonTitle>{data.place}</MeetingLocaitonTitle>
                    </MeetingLocationWrapperForRow>
                    <MeetingLocaiton>{data.address}</MeetingLocaiton>
                  </MeetingLocationWrapper>
                </MeetingDetail>
              </MeetingWrapper>
            </MeetingTouchOpacity>
          </FetchedMeetings>
        ))}
      </ScrollView>
    </MainView>
  );
};

export default ListUI;
