import styled from "@emotion/native";
import { selectTextColor, selectbackgroundColor } from "../../libarires/utils";

interface IProps {
  type: string;
}

export const MainView = styled.View`
  flex: 1;
  background-color: white;
`;

export const UserInfoView = styled.View`
  flex: 2;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 8%;
  padding-top: 15%;
  flex-direction: row;
`;

export const InfoDetailView = styled.View`
  flex: 10;
  align-items: center;
  /* border: 1px solid pink; */
`;

export const ProfileImage = styled.Image``;

export const UserInfo = styled.View`
  width: 100%;
  flex-direction: column;
`;

export const UpdateProfile = styled.View`
  width: 100%;
  height: 30px;
  flex-direction: row;
  margin-top: 3%;
  justify-content: space-around;
`;

export const UserInfoWrapper = styled.View`
  width: 70%;
  margin-left: 5%;
`;

export const UserName = styled.Text`
  color: #333333;
  font-size: 20px;
  font-weight: bold;
`;

export const UserEmail = styled.Text`
  color: #bdbdbd;
  font-size: 13px;
`;

export const LogOut = styled.TouchableOpacity`
  flex: 1;
  background-color: white;
  align-items: center;
  justify-content: center;
  border-top-width: 1px;
  border-color: #e24e4a;
`;

export const LogOutText = styled.Text`
  font-size: 15px;
  color: #e24e4a;
`;

export const UpdateUserInfoButton = styled.TouchableOpacity`
  width: 48%;
  background-color: #e24e4a;
  border: 0px;
  border-radius: 2px;
  align-items: center;
  justify-content: center;
`;

export const UpdateNamePhotoText = styled.Text`
  font-size: 12px;
  color: white;
  font-weight: bold;
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

export const FetchedMeetings = styled.TouchableOpacity`
  align-items: center;
`;

export const MeetingWrapper = styled.View`
  display: flex;
  flex-direction: row;
  width: 90%;
  height: 150px;
  border: 1px solid #bdbdbd;
  border-radius: 15px;
  margin-top: 3%;
  margin-bottom: 1%;
  background-color: white;
  box-shadow: 1px 1px 1px rgba(20, 20, 20, 0.3);
`;

export const FoodType = styled.View`
  align-items: center;
  justify-content: center;
  width: 13%;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
  background-color: ${(props: IProps) => selectbackgroundColor(props.type)};
`;

export const FoodTypeText = styled.Text`
  color: ${(props: IProps) => selectTextColor(props.type)};
`;

export const MeetingDetail = styled.View`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 87%;
  padding: 5%;
`;

export const MeetingLimitText = styled.Text`
  color: #e24e4a;
  font-size: 13px;
`;

export const MeetingTitle = styled.Text`
  color: #333333;
  font-weight: bold;
  font-size: 16px;
`;

export const MeetingTimeText = styled.Text`
  color: #333333;
  font-size: 14px;
  margin-left: 2%;
`;

export const MeetingLocaitonTitle = styled.Text`
  color: #333333;
  font-size: 14px;
  margin-left: 2%;
`;

export const MeetingLocaiton = styled.Text`
  color: #bdbdbd;
  font-size: 14px;
  margin-left: 5%;
`;

export const MeetingDetailWrapper = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 6%;
`;

export const MeetingLocationWrapper = styled.View`
  align-items: flex-start;
  margin-top: 3%;
`;

export const MeetingTimeLogo = styled.Image``;

export const MeetingLocationLogo = styled.Image``;

export const MeetingLocationWrapperForRow = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const RealtimeMeetingDetail = styled.View`
  align-items: flex-end;
  justify-content: space-between;
  flex-direction: row;
  width: 100%;
`;

export const JoinedMemberStatusWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;

export const MemberText = styled.Text`
  color: #bdbdbd;
  font-size: 12px;
`;

export const MemberJoinedstatusText = styled.Text`
  color: #e24e4a;
  font-size: 12px;
  margin-left: 5%;
`;

export const MeetingTouchOpacity = styled.TouchableOpacity``;

export const NodataView = styled.View`
  justify-content: center;
  align-items: center;
`;

export const NodataText = styled.Text`
  color: #e24e4a;
  font-size: 20px;
`;

export const NickNameChangeModal = styled.Modal``;
