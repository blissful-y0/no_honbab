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
  const navigation = useNavigation();
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const today = new Date();

  const [createMeeting] = useMutation<IMutation, IMutationCreateMeetingArgs>(
    CREATE_MEETING
  );

  const [input, setInput] = useState({
    title: "",
    dateLimit: 0,
    date: today.toLocaleDateString("kor-KR"),
    longitude: 0,
    latitude: 0,
    host: {
      _id: user.id,
      name: user.displayName,
    },
    recruitment: 0,
    foodType: "",
    contents: "",
    address: "",
    place: "",
  });

  const [dateDifference, setDateDifference] = useState(0);

  const [isPickerVisible, setPickerVisibility] = useState(false);
  const [isPostboxVisible, setPostboxVisibility] = useState(false);

  const toggleDatePicker = () => {
    setPickerVisibility((prevState) => !prevState);
  };

  const togglePostBox = () => {
    setPostboxVisibility((prevState) => !prevState);
  };

  const handleConfirm = (incomingDate) => {
    const date = incomingDate.toLocaleDateString("ko-KR", options);
    const time = incomingDate.toLocaleTimeString("ko-KR");
    setInput(...input, date: `${date} ${time}`,);
    setDateDifference(
      Math.ceil((incomingDate.getTime() - today.getTime()) / (1000 * 3600 * 24))
    );
    toggleDatePicker();
  };

  const onClickUploadButton = async () => {
    try {
      const result = await createMeeting({
        variables: {
          // createMeetingInput: input,
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
