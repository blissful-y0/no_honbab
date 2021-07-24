import styled, { css } from "@emotion/native";
import { StyleSheet } from "react-native";

export const MainView = styled.View`
  flex: 1;
  padding-top: 10%;
  background-color: white;
  display: flex;
  align-items: center;
`;
export const SubView = styled.View`
  padding-top: 5%;
  width: 100%;
`;

export const SearchView = styled.View`
  display: flex;
  flex-direction: row;
  width: 90%;
  height: 8%;
  align-items: center;
`;

export const CreateMeetingButton = styled.TouchableOpacity`
  position: absolute;
  bottom: 5%;
  right: 5%;
  z-index: 1;
`;

export const SearchInput = styled.TextInput`
  width: 90%;
  border: 1.5px solid #e24e4a;
  border-radius: 15px;
  margin-right: 3%;
  height: 100%;
`;

export const SearchImage = styled.Image``;

export const BannerImage = styled.Image`
  width: 100%;
`;

export const BannerRemarketImage = styled.Image`
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 40%;
  left: 28%;
`;

export const LocationSubWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  padding-left: 7%;
  padding-bottom: 1%;
`;

export const SearchLocationText = styled.Text`
  color: #e63832;
  text-decoration-line: underline;
`;

export const SearchIcon = styled.Image`
  margin-right: 4%;
`;

export const SearchResultText = styled.Text`
  margin-left: 1%;
`;

export const TotalNumberResultText = styled.Text`
  color: #bdbdbd;
  padding-left: 14%;
  font-size: 12px;
`;

export const styles = StyleSheet.create({
  subView: {
    paddingTop: 15,
  },
  searchView: {
    position: "relative",
  },
  textInput: {
    height: 40,
    margin: 12,
    borderWidth: 1.5,
    borderColor: "#E24E4A",
    borderRadius: 15,
    paddingHorizontal: 20,
  },
  searchImg: {
    position: "absolute",
    top: 20,
    right: 30,
  },
  bannerImg: {
    width: "100%",
  },
  bannerRemarkImg: {
    position: "absolute",
    top: 40,
    left: 110,
  },
  locationSubWrapper: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 20,
    paddingBottom: 5,
  },
  searchMessage: {
    color: "#bdbdbd",
    fontSize: 12,
    paddingLeft: 35,
    marginBottom: 20,
  },
  meetingWrapper: {
    flexDirection: "row",
    width: 335,
    height: 125,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#bdbdbd",
    marginBottom: 10,
  },
  meetingLeftWrapper: {
    alignItems: "center",
    justifyContent: "center",
    width: 50,
    backgroundColor: "#E24E4A",
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
  },
  meetingRightWrapper: {
    padding: 10,
  },
});
