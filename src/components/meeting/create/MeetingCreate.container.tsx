import React, { useState, useContext } from "react";
import CreateUI from "./MeetingCreate.presenter";
import { AuthContext } from "../../../../App";

function Create() {
  const { user } = useContext(AuthContext);
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const today = new Date().toLocaleDateString("ko-KR");

  const [selectedDate, setSelectedDate] = useState(today);
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

  console.log(user);

  const handleConfirm = (selectedDate) => {
    const date = selectedDate.toLocaleDateString("ko-KR", options);
    const time = selectedDate.toLocaleTimeString("ko-KR");
    setSelectedDate(`${date} ${time}`);
    toggleDatePicker();
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
    />
  );
}

export default Create;
