import React, { useState } from "react";
import CreateUI from "./MeetingCreate.presenter";

function Create() {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const date = today.getDate();

  const [selectedDate, setSelectedDate] = useState(
    `${year}/${month}/${date} : 00 : 00 AM`
  );
  const [isPickerVisible, setPickerVisibility] = useState(false);

  const toggleDatePicker = () => {
    setPickerVisibility((prev) => !prev);
  };

  const handleConfirm = (date) => {
    setSelectedDate(date);
    toggleDatePicker();
  };

  return (
    <CreateUI
      toggleDatePicker={toggleDatePicker}
      handleConfirm={handleConfirm}
      selectedDate={selectedDate}
    />
  );
}

export default Create;
