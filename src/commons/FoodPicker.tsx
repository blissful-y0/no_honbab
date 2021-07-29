import RNPickerSelect from "react-native-picker-select";
import React, { useState } from "react";
import styled from "@emotion/native";

const View = styled.View`
  width: 100%;
  border: 1px solid black;
`;

export const PickerSelector = ({ setfoodType, foodType }) => {
  const items = [
    {
      label: "한식",
      value: "한식",
    },
    {
      label: "양식",
      value: "양식",
    },
    {
      label: "일식",
      value: "일식",
    },
    {
      label: "중식",
      value: "중식",
    },
    {
      label: "그외",
      value: "그외",
    },
  ];

  const placeholder = {
    value: foodType,
    label: foodType,
  };

  const placeholderStyle = {
    color: "#333333",
    fontSize: 14,
  };

  return (
    <RNPickerSelect
      placeholder={placeholder}
      onValueChange={(value) => setfoodType(value)}
      items={items}
      style={{ placeholder: placeholderStyle }}
      value={foodType}
    />
  );
};

export default PickerSelector;
