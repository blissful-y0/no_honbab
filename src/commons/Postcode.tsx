import React, { useState } from "react";
import { Modal, View } from "react-native";
import Postcode from "@actbase/react-daum-postcode";

const YourView = ({ modalOpen }) => {
  const [isModal, setModal] = useState(false);
  return (
    <>
      <Modal visible={modalOpen}>
        <Postcode
          style={{ width: 320, height: 320 }}
          //@ts-ignore
          jsOptions={{ animated: true, hideMapBtn: true }}
          onSelected={(data) => {
            alert(JSON.stringify(data));
            setModal(false);
          }}
        />
      </Modal>
    </>
  );
};

export default YourView;
