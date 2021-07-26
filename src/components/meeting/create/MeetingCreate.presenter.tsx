import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  DdayCountDown,
  DdayCountDownNotifyingMessage,
  DdayWrapper,
  LocationAndTimeWrapper,
  LocationDetail,
  LocationIcon,
  MainView,
  SelectedDateAndTime,
  SelectedLocation,
  TimeIcon,
  TitleInput,
  LocationWrapper,
  DakePickerOpacity,
  PostBoxOpacity,
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
  PickerWrapper,
  ContentsInput,
  ContentsInputText,
  ContentsWrapper,
  UploadButton,
  UploadTouchArea,
  Upload,
} from "./MeetingCreate.style";
import PostBox from "../../../commons/Postcode";
import DatePickerUI from "../../../commons/DatePicker";
import FoodPickerUI from "../../../commons/FoodPicker";
import RecuitmentPickerUi from "../../../commons/RecuitmentPicker";
import { ScrollView } from "react-native";

const CreateUI = ({
  toggleDatePicker,
  handleConfirm,
  selectedDate,
  isPickerVisible,
  togglePostBox,
  setselectedLocation,
  isPostboxVisible,
  setPostboxVisibility,
  selectedLocation,
}) => {
  const navigation = useNavigation();

  return (
    <ScrollView>
      <MainView>
        <TitleInput placeholder="게시글 제목을 입력하세요."></TitleInput>
        <DdayWrapper>
          <DdayCountDown>00일 뒤 모집 마감 </DdayCountDown>
          <DdayCountDownNotifyingMessage>
            모집 삼십 분 전에 자동으로 마감됩니다.
          </DdayCountDownNotifyingMessage>
        </DdayWrapper>
        <DakePickerOpacity onPress={toggleDatePicker}>
          <LocationAndTimeWrapper>
            <TimeIcon
              source={require("../../../../public/meetings/time.png")}
            />
            <SelectedDateAndTime>{selectedDate}</SelectedDateAndTime>
            <DatePickerUI
              isPickerVisible={isPickerVisible}
              handleConfirm={handleConfirm}
              toggleDatePicker={toggleDatePicker}
            />
          </LocationAndTimeWrapper>
        </DakePickerOpacity>
        <PostBoxOpacity onPress={togglePostBox}>
          <LocationWrapper>
            <LocationAndTimeWrapper>
              <LocationIcon
                source={require("../../../../public/meetings/location.png")}
              />
              <SelectedLocation placeholder="강남역 맛집" />
            </LocationAndTimeWrapper>
            <LocationDetail>{selectedLocation}</LocationDetail>
            <PostBox
              setPostboxVisibility={setPostboxVisibility}
              setselectedLocation={setselectedLocation}
              togglePostBox={togglePostBox}
              isPostboxVisible={isPostboxVisible}
            />
          </LocationWrapper>
        </PostBoxOpacity>
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
              <PickerWrapper>
                <RecuitmentPickerUi />
              </PickerWrapper>
            </MeetingHostInfo>
          </MeetingInfoContainer>
          <MeetingInfoContainer>
            <TagOrange />
            <MeetingHostInfo>
              <HostSelectText>음식 종류</HostSelectText>
              <PickerWrapper>
                <FoodPickerUI />
              </PickerWrapper>
            </MeetingHostInfo>
          </MeetingInfoContainer>
          <MeetingContentsContainer>
            <TagLongRed />
            <ContentsWrapper>
              <ContentsInputText>모집글</ContentsInputText>
              <ContentsInput multiline={true} />
            </ContentsWrapper>
          </MeetingContentsContainer>
        </MeetingInfoContainerWrapper>
        <UploadTouchArea>
          <UploadButton>
            <Upload>게시물 등록</Upload>
          </UploadButton>
        </UploadTouchArea>
      </MainView>
    </ScrollView>
  );
};

export default CreateUI;
