import React, { useContext } from "react";
import ListUI from "./MeetingList.presenter";
import { AuthContext } from "../../../../App";

function List() {
  const { user } = useContext(AuthContext);
  const [inputText, setInputText] = React.useState("");

  return <ListUI inputText={inputText} setInputText={setInputText} />;
}

export default List;
