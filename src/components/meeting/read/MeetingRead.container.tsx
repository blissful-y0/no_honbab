import { useQuery } from "@apollo/client";
import React from "react";
import {
  IQuery,
  IQueryFetchMeetingArgs,
} from "../../../commons/types/generated/types";
import ReadUI from "./MeetingRead.presenter";
import { FETCH_MEETING } from "./MeetingRead.query";

function Read({ navigation, route }) {
  const { data } = useQuery<IQuery, IQueryFetchMeetingArgs>(FETCH_MEETING, {
    variables: {
      meetingId: route.params.id,
    },
  });

  console.log(data);

  return <ReadUI data={data} />;
}

export default Read;
