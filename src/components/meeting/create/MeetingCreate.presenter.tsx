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
  isPickerVisible,
  togglePostBox,
  isPostboxVisible,
  user,
  onClickUploadButton,
  input,
  setInput,
  flag,
}) => {
  const navigation = useNavigation();

  return (
    <ScrollView>
      <MainView>
        <TitleInput
          placeholder="게시글 제목을 입력하세요."
          onChangeText={(value) => setInput({ ...input, title: value })}
          value={input.title}
        />
        <DdayWrapper>
          <DdayCountDown>{input.dateLimit}일 뒤 모집 마감 </DdayCountDown>
          <DdayCountDownNotifyingMessage>
            모집 삼십 분 전에 자동으로 마감됩니다.
          </DdayCountDownNotifyingMessage>
        </DdayWrapper>
        <DakePickerOpacity onPress={toggleDatePicker}>
          <LocationAndTimeWrapper>
            <TimeIcon
              source={require("../../../../public/meetings/time.png")}
            />
            <SelectedDateAndTime>{input.date}</SelectedDateAndTime>
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
              <SelectedLocation
                placeholder="만나고 싶은 장소가 있으신가요?"
                value={input.place}
                onChangeText={(value) => setInput({ ...input, place: value })}
              />
            </LocationAndTimeWrapper>
            <LocationDetail>{input.address}</LocationDetail>
            <PostBox
              setInput={setInput}
              input={input}
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
              <HostText>{user?._user?.displayName}</HostText>
            </MeetingHostInfo>
          </MeetingInfoContainer>
          <MeetingInfoContainer>
            <TagBaige />
            <MeetingHostInfo>
              <HostSelectText>모집 인원</HostSelectText>
              <PickerWrapper>
                <RecuitmentPickerUi setInput={setInput} input={input} />
              </PickerWrapper>
            </MeetingHostInfo>
          </MeetingInfoContainer>
          <MeetingInfoContainer>
            <TagOrange />
            <MeetingHostInfo>
              <HostSelectText>음식 종류</HostSelectText>
              <PickerWrapper>
                <FoodPickerUI setInput={setInput} input={input} />
              </PickerWrapper>
            </MeetingHostInfo>
          </MeetingInfoContainer>
          <MeetingContentsContainer>
            <TagLongRed />
            <ContentsWrapper>
              <ContentsInputText>모집글</ContentsInputText>
              <ContentsInput
                multiline={true}
                onChangeText={(value) =>
                  setInput({ ...input, contents: value })
                }
                value={input.contents}
              />
            </ContentsWrapper>
          </MeetingContentsContainer>
        </MeetingInfoContainerWrapper>
        <UploadTouchArea>
          <UploadButton disabled={flag} onPress={onClickUploadButton}>
            <Upload>게시물 등록</Upload>
          </UploadButton>
        </UploadTouchArea>
      </MainView>
    </ScrollView>
  );
};

export default CreateUI;
