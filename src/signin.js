import React, {Component} from 'react'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
// import { app, cf, analytics } from '../firebase'
// import { Redirect } from 'react-router-dom'
import {app, auth} from './firebase'


const uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: 'popup',
    // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
    signInSuccessUrl: '/dashboard',
    // We will display Google and Facebook as auth providers.
    signInOptions: [
      app.auth.GoogleAuthProvider.PROVIDER_ID,
      app.auth.EmailAuthProvider.PROVIDER_ID
    ]
};

export default function Signin() {

    return (
        <div>
          <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth}/>
        </div>
      );
}

  