import React, { useState, useContext } from "react";
import CreateUI from "./MeetingCreate.presenter";
import { AuthContext } from "../../../../App";
import { useMutation } from "@apollo/client";
import { CREATE_MEETING } from "./MeetingCreate.query";
import {
  IMutation,
  IMutationCreateMeetingArgs,
} from "../../../commons/types/generated/types";
import { useNavigation } from "@react-navigation/native";

function Create() {
  const { user } = useContext(AuthContext);
  const [createMeeting] = useMutation<IMutation, IMutationCreateMeetingArgs>(
    CREATE_MEETING
  );
  const navigation = useNavigation();

  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const today = new Date();
  const [dateDifference, setDateDifference] = useState(0);

  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [recuitNumber, setRecuitNumber] = useState(0);
  const [foodType, setfoodType] = useState("음식 종류");

  const [selectedDate, setSelectedDate] = useState(
    today.toLocaleDateString("ko-KR")
  );
  const [isPickerVisible, setPickerVisibility] = useState(false);

  const [selectedLocation, setselectedLocation] =
    useState("모임의 위치를 선택해 주세요");
  const [isPostboxVisible, setPostboxVisibility] = useState(false);
  const [selectedPlace, setSelectedPlace] = useState("");

  const toggleDatePicker = () => {
    setPickerVisibility((prev) => !prev);
  };

  const togglePostBox = () => {
    setPostboxVisibility((prev) => !prev);
  };

  const handleConfirm = (incomingDate) => {
    const date = incomingDate.toLocaleDateString("ko-KR", options);
    const time = incomingDate.toLocaleTimeString("ko-KR");
    setSelectedDate(`${date} ${time}`);
    setDateDifference(
      Math.ceil((incomingDate.getTime() - today.getTime()) / (1000 * 3600 * 24))
    );
    toggleDatePicker();
  };

  const [input, setInput] = useState({
    title: title,
    dateLimit: dateDifference,
    date: selectedDate,
    longitude: 127.02761,
    latitude: 37.498095,
    host: {
      //@ts-ignore
      _id: user.uid,
      //@ts-ignore
      name: user.displayName,
    },
    recruitment: recuitNumber,
    foodType: foodType,
    contents: contents,
    address: "서울특별시 강남구 테헤란로 3",
    place: selectedPlace,
  });

  console.log(foodType);

  const onClickUploadButton = async () => {
    try {
      const result = await createMeeting({
        variables: {
          createMeetingInput: input,
        },
      });
      //@ts-ignore
      navigation.navigate("게시물 읽기", { id: result.createMeeting });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <CreateUI
      toggleDatePicker={toggleDatePicker}
      handleConfirm={handleConfirm}
      selectedDate={selectedDate}
      isPickerVisible={isPickerVisible}
      togglePostBox={togglePostBox}
      setselectedLocation={setselectedLocation}
      isPostboxVisible={isPostboxVisible}
      setPostboxVisibility={setPostboxVisibility}
      selectedLocation={selectedLocation}
      user={user}
      selectedPlace={selectedPlace}
      title={title}
      setTitle={setTitle}
      contents={contents}
      setContents={setContents}
      setSelectedPlace={setSelectedPlace}
      setRecuitNumber={setRecuitNumber}
      setfoodType={setfoodType}
      foodType={foodType}
      recuitNumber={recuitNumber}
      dateDifference={dateDifference}
      onClickUploadButton={onClickUploadButton}
    />
  );
}

export default Create;
