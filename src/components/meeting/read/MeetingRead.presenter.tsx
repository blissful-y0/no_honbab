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

const ReadUI = ({ data, chatFlag, onClickJoinChat }) => {
  return (
    <ScrollView>
      <MainView>
        <TitleInput>{data?.fetchMeeting?.title}</TitleInput>
        <DdayWrapper>
          <DdayCountDown>
            {data?.fetchMeeting?.dateLimit}일 뒤 모집 마감{" "}
          </DdayCountDown>
          <DdayCountDownNotifyingMessage>
            모집 삼십 분 전에 자동으로 마감됩니다.
          </DdayCountDownNotifyingMessage>
        </DdayWrapper>
        <LocationAndTimeWrapper>
          <TimeIcon source={require("../../../../public/meetings/time.png")} />
          <SelectedDateAndTime>{data?.fetchMeeting?.date}</SelectedDateAndTime>
        </LocationAndTimeWrapper>
        <LocationWrapper>
          <LocationAndTimeWrapper>
            <LocationIcon
              source={require("../../../../public/meetings/location.png")}
            />
            <SelectedLocation>{data?.fetchMeeting?.place}</SelectedLocation>
          </LocationAndTimeWrapper>
          <LocationDetail>{data?.fetchMeeting?.address}</LocationDetail>
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
              <HostText>{data?.fetchMeeting?.host.name}</HostText>
            </MeetingHostInfo>
          </MeetingInfoContainer>
          <MeetingInfoContainer>
            <TagBaige />
            <MeetingHostInfo>
              <HostSelectText>모집 인원</HostSelectText>
              <HostText>{data?.fetchMeeting?.recruitment}명</HostText>
            </MeetingHostInfo>
          </MeetingInfoContainer>
          <MeetingInfoContainer>
            <TagOrange />
            <MeetingHostInfo>
              <HostSelectText>음식 종류</HostSelectText>
              <HostText>{data?.fetchMeeting?.foodType}</HostText>
            </MeetingHostInfo>
          </MeetingInfoContainer>
          <MeetingContentsContainer>
            <TagLongRed />
            <ContentsWrapper>
              <ContentsInputText>모집글</ContentsInputText>
              <ContentsInput>{data?.fetchMeeting?.contents}</ContentsInput>
            </ContentsWrapper>
          </MeetingContentsContainer>
        </MeetingInfoContainerWrapper>
        <UploadTouchArea>
          <UploadButton disabled={chatFlag} onPress={onClickJoinChat}>
            <JoinButton>
              {chatFlag ? "이미 참가 신청 중입니다" : "채팅으로 신청하기"}
            </JoinButton>
          </UploadButton>
        </UploadTouchArea>
      </MainView>
    </ScrollView>
  );
};

export default ReadUI;
