import { gql } from "@apollo/client";

export const CREATE_MEETING = gql`
  mutation createMeeting($createMeetingInput: CreateMeetingInput!) {
    createMeeting(createMeetingInput: $createMeetingInput)
  }
`;
