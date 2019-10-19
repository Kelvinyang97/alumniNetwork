import React, {Component} from 'react'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
// import { app, cf, analytics } from '../firebase'
// import { Redirect } from 'react-router-dom'
import * as firebase from "firebase/app";
// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";
// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

// Configure Firebase.
const config = {
    apiKey: "AIzaSyC2CeKufp7dvD0dhZFFrRAtv1w7_D5Z_jI",
    authDomain: "unswcollegesalumninetwork.firebaseapp.com",
    databaseURL: "https://unswcollegesalumninetwork.firebaseio.com",
    projectId: "unswcollegesalumninetwork",
    storageBucket: "unswcollegesalumninetwork.appspot.com",
    messagingSenderId: "113572819922",
    appId: "1:113572819922:web:2d942c65998613ac094e0b",
};

const uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: 'popup',
    // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
    signInSuccessUrl: '/dashboard',
    // We will display Google and Facebook as auth providers.
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID
    ]
};

firebase.initializeApp(config);


export default function Signin() {

    return (
        <div>
          <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()}/>
        </div>
      );
}

  