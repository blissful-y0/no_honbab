import React, { useContext } from "react";
import ListUI from "./MeetingList.presenter";
import { AuthContext } from "../../../../App";
import { useQuery } from "@apollo/client";
import { FETCH_MEETINGS } from "./MeetingList.query";
import {
  IQuery,
  IQueryFetchMeetingsArgs,
} from "../../../commons/types/generated/types";

function List() {
  const [inputText, setInputText] = React.useState("");
  const { data } = useQuery<IQuery, IQueryFetchMeetingsArgs>(FETCH_MEETINGS);

  return (
    <ListUI inputText={inputText} setInputText={setInputText} data={data} />
  );
}

export default List;
