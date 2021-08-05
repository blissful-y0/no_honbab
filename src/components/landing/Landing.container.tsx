import React from "react";
import LandingUI from "./Landing.presenter";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import auth from "@react-native-firebase/auth";
import { useNavigation } from "@react-navigation/native";
import firestore from "@react-native-firebase/firestore";

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
        .then((userCrendential) => {
          let docRef = firestore()
            .collection("users")
            .doc(userCrendential.user.uid);
          docRef.get().then((doc) => {
            if (doc.exists) {
              return;
            } else {
              firestore()
                .collection("users")
                .doc(userCrendential.user.uid)
                .set({});
            }
          });
        });
    } catch (error) {
      console.log(error);
    }
  };

  return <LandingUI onGoogleButtonPress={onGoogleButtonPress} />;
}

export default LandingPage;
