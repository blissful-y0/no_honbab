import { View } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import React, { useState } from "react";
import styled from "@emotion/native";

const DatePickerView = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const ToogleButton = styled.TouchableOpacity``;

function DatePickerUI({ isPickerVisible, toggleDatePicker, handleConfirm }) {
  return (
    <DatePickerView>
      <ToogleButton onPress={toggleDatePicker}></ToogleButton>
      <DateTimePickerModal
        isVisible={isPickerVisible}
        mode="datetime"
        onConfirm={handleConfirm}
        onCancel={toggleDatePicker}
      />
    </DatePickerView>
  );
}

export default DatePickerUI;
