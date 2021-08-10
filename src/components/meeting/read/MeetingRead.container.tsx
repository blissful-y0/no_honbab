import { useQuery } from "@apollo/client";
import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../../../App";
import {
  IQuery,
  IQueryFetchMeetingArgs,
} from "../../../commons/types/generated/types";
import ReadUI from "./MeetingRead.presenter";
import { FETCH_MEETING } from "./MeetingRead.query";
import firestore from "@react-native-firebase/firestore";
import { useNavigation } from "@react-navigation/native";
import { UniqueKeyGegenerator } from "../../../libarires/utils";

function Read({ route }) {
  const { user } = useContext(AuthContext);
  const meetingID: string = route.params.id;
  const userRef = firestore().collection("users");
  const navigation = useNavigation();
  const [chatFlag, setChatFlag] = useState(false);

  const { data } = useQuery<IQuery, IQueryFetchMeetingArgs>(FETCH_MEETING, {
    variables: {
      meetingId: meetingID,
    },
  });

  useEffect(() => {
    userRef
      .doc(user.uid)
      .get()
      .then((doc) => {
        const meetingArray = doc.data().meetingID;
        if (meetingArray.indexOf(meetingID) === -1) {
          return setChatFlag(false);
        } else setChatFlag(true);
      });
  }, [chatFlag]);

  const onClickJoinChat = async () => {
    const userDB = await userRef.doc(user.uid).update({
      meetingID: firestore.FieldValue.arrayUnion(meetingID),
    });
    const chatDB = await firestore()
      .collection("chat")
      .doc(meetingID)
      .collection(user.uid)
      .add({
        _id: UniqueKeyGegenerator(),
        meetingID: meetingID,
        text: `${data.fetchMeeting.title} 에 참가 신청하셨습니다! 곧 확인할게요! 같이 먹어요!`,
        createdAt: firestore.FieldValue.serverTimestamp(),
        user: {
          user: data?.fetchMeeting?.host?._id,
          name: data?.fetchMeeting?.host?.name,
          avatar: user.photoURL,
        },
      })
      .then(() => console.log("done"));
    navigation.navigate("채팅", {
      meetingId: data?.fetchMeeting?._id,
      hostId: data?.fetchMeeting?.host._id,
      user: data?.fetchMeeting?.host.name,
    });
  };

  return (
    <ReadUI data={data} chatFlag={chatFlag} onClickJoinChat={onClickJoinChat} />
  );
}

export default Read;
