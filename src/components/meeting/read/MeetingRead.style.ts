import styled from "@emotion/native";

export const MainView = styled.View`
  flex: 1;
  background-color: white;
  padding: 5%;
`;

export const TitleInput = styled.Text`
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
  padding-top: 2%;
  justify-content: flex-start;
`;

export const LocationAndTimeWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  padding-left: 1%;
  width: 100%;
  justify-content: flex-start;
  padding-top: 7%;
`;

export const LocationWrapper = styled.View`
  align-items: flex-start;
  justify-content: center;
`;

export const DdayCountDown = styled.Text`
  color: #e24e4a;
  font-size: 13px;
  font-weight: bold;
  margin-top: 3%;
`;

export const DdayCountDownNotifyingMessage = styled.Text`
  color: #bdbdbd;
  margin-top: 1%;
`;

export const SelectedDateAndTime = styled.Text`
  color: #333333;
  font-size: 15px;
`;

export const SelectedLocation = styled.Text`
  color: #333333;
  font-size: 15px;
`;

export const TimeIcon = styled.Image`
  margin-right: 2%;
`;

export const LocationIcon = styled.Image`
  margin-right: 2%;
`;

export const LocationDetail = styled.Text`
  font-size: 15px;
  color: #bdbdbd;
  margin-left: 5%;
  margin-top: 2%;
`;

export const DakePickerOpacity = styled.TouchableOpacity``;

export const PostBoxOpacity = styled.TouchableOpacity``;

export const MeetingInfoContainer = styled.View`
  flex-direction: row;
  border: 1px solid #bdbdbd;
  width: 95%;
  height: 50px;
  margin-top: 5%;
`;

export const MeetingInfoContainerWrapper = styled.View`
  flex: 1;
  width: 100%;
  margin-top: 2%;
  align-items: center;
`;

export const MeetingContentsContainer = styled.View`
  flex-direction: row;
  border: 1px solid #bdbdbd;
  width: 95%;
  height: 250px;
  margin-top: 5%;
  align-items: flex-start;
`;

export const TagRed = styled.View`
  margin-left: 2%;
  width: 5%;
  height: 65%;
  background-color: #e24e4a;
  border: 0px;
`;

export const TagBaige = styled.View`
  margin-left: 2%;
  width: 5%;
  height: 65%;
  background-color: #faa296;
  border: 0px;
`;

export const TagOrange = styled.View`
  margin-left: 2%;
  width: 5%;
  height: 65%;
  background-color: #f9964d;
  border: 0px;
`;

export const TagLongRed = styled.View`
  margin-left: 2%;
  width: 5%;
  height: 13%;
  background-color: #e24e4a;
  border: 0px;
`;

export const MeetingHostInfo = styled.View`
  width: 80%;
  flex-direction: row;
  align-items: center;
  padding-left: 7%;
`;

export const HostSelectText = styled.Text`
  width: 25%;
  color: #333333;
  font-weight: bold;
  font-size: 14px;
`;

export const HostText = styled.Text`
  color: #333333;
  font-size: 16px;
  margin-left: 10%;
`;

export const PickerWrapper = styled.View`
  width: 90%;
  align-items: center;
  justify-content: center;
`;

export const ContentsInput = styled.Text`
  width: 95%;
  color: #333333;
  height: 80%;
`;

export const ContentsInputText = styled.Text`
  width: 30%;
  color: #333333;
  font-weight: bold;
  font-size: 14px;
  padding-top: 10%;
`;

export const ContentsWrapper = styled.View`
  width: 90%;
  height: 100%;
`;

export const UploadButton = styled.View`
  width: 90%;
  height: 50px;
  border: 0px;
  background-color: #e24e4a;
  justify-content: center;
  align-items: center;
`;

export const UploadTouchArea = styled.TouchableOpacity`
  width: 100%;
  align-items: center;
  padding-top: 3%;
`;

export const JoinButton = styled.Text`
  font-weight: bold;
  font-size: 15px;
  color: white;
`;
