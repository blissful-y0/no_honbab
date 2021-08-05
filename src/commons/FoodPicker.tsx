import RNPickerSelect from "react-native-picker-select";
import React from "react";

export const PickerSelector = ({ input, setInput }) => {
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
    label: input.foodType,
  };

  const placeholderStyle = {
    color: "#333333",
    fontSize: 14,
  };

  return (
    <RNPickerSelect
      placeholder={placeholder}
      onValueChange={(value) => setInput({ ...input, foodType: value })}
      items={items}
      style={{ placeholder: placeholderStyle }}
      value={input.foodType}
    />
  );
};

export default PickerSelector;
