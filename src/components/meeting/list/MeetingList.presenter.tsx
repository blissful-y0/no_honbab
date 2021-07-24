import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, ScrollView, Image } from "react-native";
import { CreateMeetingButton, SearchImage, styles } from "./MeetingList.style";
import { MainView, SearchInput, SearchView } from "./MeetingList.style";

const ListUI = ({ inputText, setInputText }) => {
  const navigation = useNavigation();

  return (
    <MainView>
      <CreateMeetingButton>
        <Image
          source={require("../../../../public/meetings/create-button.png")}
        />
      </CreateMeetingButton>
      <SearchView>
        <SearchInput
          style={{ paddingHorizontal: 20 }}
          placeholder="검색어를 입력해 주세요"
          maxLength={25}
          value={inputText}
        />
        <SearchImage
          source={require("../../../../public/meetings/search-bold.png")}
        />
      </SearchView>
    </MainView>
  );
};

export default ListUI;
