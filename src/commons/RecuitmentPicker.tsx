import RNPickerSelect from "react-native-picker-select";
import React, { useState } from "react";

export const PickerSelector = ({ input, setInput }) => {
  const items = [
    {
      label: "2명",
      value: 2,
    },
    {
      label: "3명",
      value: 3,
    },
    {
      label: "4명",
      value: 4,
    },
  ];

  const placeholder = {
    label: input.recruitment === 0 ? "모집 인원" : `${input.recruitment}명`,
  };

  const placeholderStyle = {
    color: "#333333",
    fontSize: 14,
  };

  return (
    <RNPickerSelect
      placeholder={placeholder}
      onValueChange={(value) => setInput({ ...input, recruitment: value })}
      items={items}
      value={input.recruitment}
      style={{ placeholder: placeholderStyle }}
    />
  );
};

export default PickerSelector;
