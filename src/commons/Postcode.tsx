import React, { useState } from "react";
import { Modal, View, TouchableWithoutFeedback } from "react-native";
import Postcode from "@actbase/react-daum-postcode";
import styled from "@emotion/native";

const PostboxView = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: rgba(200, 200, 200, 0.5);
`;

const PostboxTabout = styled.TouchableWithoutFeedback`
  width: 100%;
  height: 100%;
`;

const YourView = ({
  setPostboxVisibility,
  setselectedLocation,
  togglePostBox,
  isPostboxVisible,
}) => {
  return (
    <Modal transparent={true} visible={isPostboxVisible}>
      <PostboxTabout onPress={togglePostBox}>
        <PostboxView>
          <TouchableWithoutFeedback>
            <Postcode
              style={{ width: 320, height: 320 }}
              //@ts-ignore
              jsOptions={{ animated: true, hideMapBtn: true }}
              onSelected={(data) => {
                setselectedLocation(data.address);
                togglePostBox();
              }}
            />
          </TouchableWithoutFeedback>
        </PostboxView>
      </PostboxTabout>
    </Modal>
  );
};

export default YourView;
