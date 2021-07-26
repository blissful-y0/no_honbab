import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
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
} from "./MeetingCreate.style";
import { Picker } from "@react-native-picker/picker";
import PostBox from "../../../commons/Postcode";
import { TouchableOpacity, Text } from "react-native";
import DatePickerUI from "../../../commons/DatePicker";

const CreateUI = ({ toggleDatePicker, handleConfirm, selectedDate }) => {
  const navigation = useNavigation();
  const [modalOpen, setModalOpen] = useState(false);
  const handleModalOpen = () => {
    setModalOpen(false);
  };

  return (
    <MainView>
      <TitleInput placeholder="게시글 제목을 입력하세요."></TitleInput>
      <DdayWrapper>
        <DdayCountDown>00일 뒤 모집 마감 </DdayCountDown>
        <DdayCountDownNotifyingMessage>
          모집 삼십 분 전에 자동으로 마감됩니다.
        </DdayCountDownNotifyingMessage>
      </DdayWrapper>
      <TouchableOpacity>
        <LocationAndTimeWrapper>
          <TimeIcon source={require("../../../../public/meetings/time.png")} />
          <SelectedDateAndTime>{selectedDate}</SelectedDateAndTime>
          <DatePickerUI
            handleConfirm={handleConfirm}
            toggleDatePicker={toggleDatePicker}
          />
        </LocationAndTimeWrapper>
      </TouchableOpacity>
      <TouchableOpacity>
        <LocationAndTimeWrapper>
          <LocationIcon
            source={require("../../../../public/meetings/location.png")}
          />
          <SelectedLocation>일미집</SelectedLocation>
        </LocationAndTimeWrapper>
        <LocationDetail>서울특별시 강남구 어쩌구</LocationDetail>
      </TouchableOpacity>
    </MainView>
  );
};

export default CreateUI;
