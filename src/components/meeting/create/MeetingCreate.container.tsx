import React, { useState, useContext, useEffect } from "react";
import CreateUI from "./MeetingCreate.presenter";
import { AuthContext } from "../../../../App";
import { useMutation } from "@apollo/client";
import { CREATE_MEETING } from "./MeetingCreate.query";
import {
  IMutation,
  IMutationCreateMeetingArgs,
} from "../../../commons/types/generated/types";
import { useNavigation } from "@react-navigation/native";
import firestore from "@react-native-firebase/firestore";

type iInput = {
  title: string;
  dateLimit: number;
  date: string;
  longitude: number;
  latitude: number;
  host: {
    _id: string;
    name: string;
  };
  recruitment: number;
  foodType: string;
  contents: string;
  address: string;
  place: string;
};

function Create() {
  const { user } = useContext(AuthContext);
  const userRef = firestore().collection("users");

  const navigation = useNavigation();
  const options = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  };
  const today = new Date();

  const [createMeeting] = useMutation<IMutation, IMutationCreateMeetingArgs>(
    CREATE_MEETING
  );

  const [input, setInput] = useState<iInput>({
    title: "",
    dateLimit: 0,
    date: today.toLocaleDateString("ko-KR"),
    longitude: 127.0278037,
    latitude: 37.499705,
    host: {
      _id: user?.uid,
      name: user?.displayName,
    },
    recruitment: 0,
    foodType: "음식 종류",
    contents: "",
    address: "장소를 검색하세요",
    place: "",
  });
  const [flag, setFlag] = useState(true);

  useEffect(() => {
    if (
      input.title &&
      input.dateLimit &&
      input.recruitment &&
      input.foodType &&
      input.contents &&
      input.address &&
      input.place
    )
      return setFlag(false);
  }, [input]);

  const [isPickerVisible, setPickerVisibility] = useState(false);
  const [isPostboxVisible, setPostboxVisibility] = useState(false);

  const toggleDatePicker = () => {
    setPickerVisibility((prevState) => !prevState);
  };

  const togglePostBox = () => {
    setPostboxVisibility((prevState) => !prevState);
  };

  const handleConfirm = (incomingDate) => {
    let selecteddate = incomingDate.toLocaleDateString("ko-KR", options);
    let difference = Math.ceil(
      (incomingDate.getTime() - today.getTime()) / (1000 * 3600 * 24)
    );
    setInput({ ...input, dateLimit: difference, date: selecteddate });
    toggleDatePicker();
  };

  const onClickUploadButton = async () => {
    try {
      const result = await createMeeting({
        variables: {
          createMeetingInput: input,
        },
      });
      const dbresult = await firestore()
        .collection("chat")
        .doc(result.data.createMeeting)
        .set({});
      navigation.navigate("게시물 읽기", { id: result.data.createMeeting });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <CreateUI
      toggleDatePicker={toggleDatePicker}
      handleConfirm={handleConfirm}
      isPickerVisible={isPickerVisible}
      togglePostBox={togglePostBox}
      isPostboxVisible={isPostboxVisible}
      user={user}
      onClickUploadButton={onClickUploadButton}
      input={input}
      setInput={setInput}
      flag={flag}
    />
  );
}

export default Create;
