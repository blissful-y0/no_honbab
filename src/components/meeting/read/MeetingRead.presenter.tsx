import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  DdayCountDown,
  DdayCountDownNotifyingMessage,
  DdayWrapper,
  LocationAndTimeWrapper,
  LocationIcon,
  MainView,
  SelectedLocation,
  TimeIcon,
  TitleInput,
  LocationWrapper,
  MeetingInfoContainer,
  MeetingInfoContainerWrapper,
  MeetingContentsContainer,
  TagRed,
  TagBaige,
  TagOrange,
  TagLongRed,
  MeetingHostInfo,
  HostSelectText,
  HostText,
  ContentsInput,
  ContentsInputText,
  ContentsWrapper,
  UploadButton,
  UploadTouchArea,
  LocationDetail,
  SelectedDateAndTime,
  JoinButton,
} from "./MeetingRead.style";
import { ScrollView } from "react-native";

const ReadUI = ({}) => {
  const navigation = useNavigation();

  return (
    <ScrollView>
      <MainView>
        <TitleInput>가 보자고 </TitleInput>
        <DdayWrapper>
          <DdayCountDown>00일 뒤 모집 마감 </DdayCountDown>
          <DdayCountDownNotifyingMessage>
            모집 삼십 분 전에 자동으로 마감됩니다.
          </DdayCountDownNotifyingMessage>
        </DdayWrapper>
        <LocationAndTimeWrapper>
          <TimeIcon source={require("../../../../public/meetings/time.png")} />
          <SelectedDateAndTime>
            2021년 어쩌구 어쩌구 어쩌라는것임
          </SelectedDateAndTime>
        </LocationAndTimeWrapper>
        <LocationWrapper>
          <LocationAndTimeWrapper>
            <LocationIcon
              source={require("../../../../public/meetings/location.png")}
            />
            <SelectedLocation>가보자고</SelectedLocation>
          </LocationAndTimeWrapper>
          <LocationDetail>서울특별시 어쩌구</LocationDetail>
        </LocationWrapper>
        <MeetingInfoContainerWrapper
          style={{
            borderWidth: 0.2,
            borderColor: "white",
            borderTopColor: "#bdbdbd",
          }}
        >
          <MeetingInfoContainer>
            <TagRed />
            <MeetingHostInfo>
              <HostSelectText>주최자</HostSelectText>
              <HostText>민성우</HostText>
            </MeetingHostInfo>
          </MeetingInfoContainer>
          <MeetingInfoContainer>
            <TagBaige />
            <MeetingHostInfo>
              <HostSelectText>모집 인원</HostSelectText>
              <HostText>민성우</HostText>
            </MeetingHostInfo>
          </MeetingInfoContainer>
          <MeetingInfoContainer>
            <TagOrange />
            <MeetingHostInfo>
              <HostSelectText>음식 종류</HostSelectText>
              <HostText>민성우</HostText>
            </MeetingHostInfo>
          </MeetingInfoContainer>
          <MeetingContentsContainer>
            <TagLongRed />
            <ContentsWrapper>
              <ContentsInputText>모집글</ContentsInputText>
              <ContentsInput>내용 내용 </ContentsInput>
            </ContentsWrapper>
          </MeetingContentsContainer>
        </MeetingInfoContainerWrapper>
        <UploadTouchArea>
          <UploadButton>
            <JoinButton>채팅으로 신청하기</JoinButton>
          </UploadButton>
        </UploadTouchArea>
      </MainView>
    </ScrollView>
  );
};

export default ReadUI;
