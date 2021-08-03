import { gql } from "@apollo/client";

export const FETCH_MEETINGS = gql`
  query {
    fetchMeetings(latitude: 37.633154779105, longitude: 126.8706911008) {
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
