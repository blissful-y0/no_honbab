import { gql } from "@apollo/client";

export const FETCH_JOINED_MEETING = gql`
  query fetchJoinedMettings($userId: ID!) {
    fetchJoinedMeetings(userId: $userID) {
      _id
      foodType
      title
      dateLimit
      recruitment
      countMember
      date
      address
      place
    }
  }
`;
