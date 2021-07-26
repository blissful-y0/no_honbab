import { Picker } from "@react-native-picker/picker";
import React, { useState } from "react";
import { View } from "react-native";

const PickerUI = () => {
  const [selectedLanguage, setSelectedLanguage] = useState();
  return (
    <Picker
      enabled={true}
      style={{ height: 50, width: "100%" }}
      selectedValue={selectedLanguage}
      onValueChange={(itemValue, itemIndex) => setSelectedLanguage(itemValue)}
    >
      <Picker.Item label="Java" value="java" />
      <Picker.Item label="JavaScript" value="js" />
    </Picker>
  );
};

export default PickerUI;
