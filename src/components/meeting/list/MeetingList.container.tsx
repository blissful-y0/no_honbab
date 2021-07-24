import React from "react";
import ListUI from "./MeetingList.presenter";

function List() {
  const [inputText, setInputText] = React.useState("");

  return <ListUI inputText={inputText} setInputText={setInputText} />;
}

export default List;
