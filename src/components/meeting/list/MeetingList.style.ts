import styled, { css } from "@emotion/native";
import { StyleSheet } from "react-native";

export const MainView = styled.View`
  flex: 1;
  padding-top: 8%;
  background-color: white;
  display: flex;
  align-items: center;
`;
export const SubView = styled.View`
  padding-top: 10%;
`;

export const SearchView = styled.View`
  display: flex;
  flex-direction: row;
  width: 90%;
  align-items: center;
`;

export const CreateMeetingButton = styled.TouchableOpacity`
  position: absolute;
  bottom: 15;
  right: 25;
  z-index: 1;
`;

export const SearchInput = styled.TextInput`
  width: 90%;
  border: 1.5px solid #e24e4a;
  border-radius: 15px;
  margin-right: 3%;
  height: 80%;
`;

export const SearchImage = styled.Image``;

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
