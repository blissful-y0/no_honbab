import { gql } from "@apollo/client";

export const FETCH_MEETING = gql`
  query fetchMeeting($meetingId: ID!) {
    fetchMeeting(meetingId: $meetingId) {
      _id
      foodType
      dateLimit
      title
      recruitment
      countMember
      host {
        name
        _id
      }
      date
      address
      place
      contents
      longitude
      latitude
    }
  }
`;
