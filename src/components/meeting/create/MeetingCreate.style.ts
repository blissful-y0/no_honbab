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

export const SelectedLocation = styled.TextInput`
  color: #333333;
  font-size: 15px;
  ::placeholder {
    color: #333333;
    font-weight: bold;
  }
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
  width: 85%;
  flex-direction: row;
  align-items: center;
  padding-left: 7%;
  /* justify-content: center; */
`;

export const HostSelectText = styled.Text`
  width: 55%;
  color: #333333;
  font-weight: bold;
`;

export const HostText = styled.Text`
  color: #333333;
`;
