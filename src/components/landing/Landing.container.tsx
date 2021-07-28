import React from "react";
import LandingUI from "./Landing.presenter";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import auth from "@react-native-firebase/auth";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

GoogleSignin.configure({
  webClientId:
    "190456314170-acl1rahn8rmkpna0nfvk67aicu6rta68.apps.googleusercontent.com",
});

function LandingPage() {
  const navigation = useNavigation();

  const onGoogleButtonPress = async () => {
    try {
      const { idToken } = await GoogleSignin.signIn();

      // Create a Google credential with the token
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);

      // Sign-in the user with the credential
      auth()
        .signInWithCredential(googleCredential)
        //@ts-ignore
        .then((userCrendential) => setUser(userCrendential));

      // return navigation.navigate("tabNavigator");
    } catch (error) {
      console.log(error);
    }
  };

  return <LandingUI onGoogleButtonPress={onGoogleButtonPress} />;
}

export default LandingPage;
