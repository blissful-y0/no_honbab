import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image } from "react-native";
import {
  BannerImage,
  BannerRemarketImage,
  CreateMeetingButton,
  SearchImage,
  SubView,
  SearchIcon,
  MainView,
  SearchInput,
  SearchView,
  SearchLocationText,
  LocationSubWrapper,
  SearchResultText,
  TotalNumberResultText,
} from "./MeetingList.style";

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
          style={{ paddingHorizontal: 10 }}
          placeholder="검색어를 입력해 주세요"
          maxLength={25}
          value={inputText}
        />
        <SearchImage
          source={require("../../../../public/meetings/search-bold.png")}
        />
      </SearchView>
      <SubView>
        <BannerImage
          source={require("../../../../public/meetings/banner.png")}
        />
        <BannerRemarketImage
          source={require("../../../../public/meetings/banner-remark.png")}
        />
      </SubView>
      <SubView>
        <LocationSubWrapper>
          <SearchIcon
            source={require("../../../../public/meetings/search-s.png")}
          />
          <SearchLocationText>강남역</SearchLocationText>
          <SearchResultText>주변 검색된 결과입니다.</SearchResultText>
        </LocationSubWrapper>
        <TotalNumberResultText>100+ 건이 검색되었습니다.</TotalNumberResultText>
      </SubView>
    </MainView>
  );
};

export default ListUI;
