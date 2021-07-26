import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  DdayCountDown,
  DdayCountDownNotifyingMessage,
  DdayWrapper,
  LocationAndTimeWrapper,
  MainView,
  TitleInput,
} from "./MeetingCreate.style";
import { Picker } from "@react-native-picker/picker";
import PostBox from "../../../commons/Postcode";
import { TouchableOpacity, Text } from "react-native";

const CreateUI = ({}) => {
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
      <LocationAndTimeWrapper></LocationAndTimeWrapper>
      {/* <TouchableOpacity onPress={() => handleModalOpen()}>
        <Text>주소 찾기</Text>
        <PostBox modalOpen={modalOpen} />
      </TouchableOpacity> */}
    </MainView>
  );
};

export default CreateUI;
