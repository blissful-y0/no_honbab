import { StyleSheet } from "react-native";
import styled from "@emotion/native";

export const MainView = styled.View`
  flex: 1;
  background-color: white;
  padding: 5%;
`;

export const TitleInput = styled.TextInput`
  font-size: 18px;
  color: #333333;
  font-weight: bold;
`;

export const PostCode = styled.TouchableOpacity;

export const DdayWrapper = styled.View`
  /* flex-direction: row; */
  align-items: flex-start;
  padding-left: 1%;
  width: 100%;
  justify-content: flex-start;
`;

export const LocationAndTimeWrapper = styled.View`
  flex-direction: row;
  align-items: flex-start;
  padding-left: 1%;
  width: 100%;
  justify-content: flex-start;
`;

export const DdayCountDown = styled.Text`
  color: #e24e4a;
  font-size: 13px;
  font-weight: bold;
`;

export const DdayCountDownNotifyingMessage = styled.Text`
  color: #bdbdbd;
`;

export const SelectedDateAndTime = styled.Text`
  color: #333333;
  font-size: 13px;
`;

export const SelectedLocation = styled.Text`
  color: #333333;
  font-size: 13px;
`;

export const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 20,
    backgroundColor: "#ffffff",
  },
  textInput: {
    marginBottom: 8,
  },
  remarksWrapper: {
    flexDirection: "row",
    marginBottom: 20,
  },
  subView: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#bdbdbd",
    alignItems: "center",
    width: 320,
    height: 40,
    marginBottom: 10,
    paddingLeft: 30,
    backgroundColor: "#ffffff",
    shadowColor: "#000",
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  tagImg: {
    position: "absolute",
    top: 0,
    left: 10,
  },
  title: {
    fontWeight: "bold",
    fontSize: 12,
    width: "30%",
  },
  text: {
    fontSize: 12,
  },
  contentsWrapper: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#bdbdbd",
    paddingTop: 10,
    width: 350,
    height: 220,
    marginBottom: 45,
    paddingLeft: 30,
    marginTop: 15,
    backgroundColor: "#ffffff",
    shadowColor: "#000",
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  button: {
    marginLeft: 15,
    width: "90%",
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#bdbdbd",
    borderRadius: 20,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#ffffff",
  },
});
