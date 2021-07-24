import React from "react";
import { useNavigation } from "@react-navigation/native";
import { MainView, Logo, GoogleLoginButton } from "./Landing.styles";
import { TouchableOpacity } from "react-native";

function LandingUI({ onGoogleButtonPress }) {
  const navigation = useNavigation();

  return (
    <MainView>
      <Logo source={require("../../../public/landing/logo.png")} />
      <TouchableOpacity onPress={() => onGoogleButtonPress()}>
        <GoogleLoginButton
          source={require("../../../public/landing/login-google-button.png")}
        />
      </TouchableOpacity>
    </MainView>
  );
}

export default LandingUI;
