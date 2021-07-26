import RNPickerSelect from "react-native-picker-select";
import React, { useState } from "react";

export const PickerSelector = () => {
  const [value, setValue] = useState("모집 인원");
  const items = [
    {
      label: "2명",
      value: "2명",
    },
    {
      label: "3명",
      value: "3명",
    },
    {
      label: "4명",
      value: "4명",
    },
  ];

  const placeholder = {
    value: value,
    label: value,
  };

  const placeholderStyle = {
    color: "#333333",
    fontSize: 14,
  };

  return (
    <RNPickerSelect
      placeholder={placeholder}
      onValueChange={(value) => setValue(value)}
      items={items}
      value={value}
      style={{ placeholder: placeholderStyle }}
    />
  );
};

export default PickerSelector;
