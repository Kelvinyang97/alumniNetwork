import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/functions';

let config = {
    apiKey: "AIzaSyC2CeKufp7dvD0dhZFFrRAtv1w7_D5Z_jI",
    authDomain: "unswcollegesalumninetwork.firebaseapp.com",
    databaseURL: "https://unswcollegesalumninetwork.firebaseio.com",
    projectId: "unswcollegesalumninetwork",
    storageBucket: "unswcollegesalumninetwork.appspot.com",
    messagingSenderId: "113572819922",
    appId: "1:113572819922:web:2d942c65998613ac094e0b",
};

const fb = app.initializeApp(config);
const db = fb.database();
const auth = fb.auth();
// const functions = fb.functions();
// const analytics = fb.analytics();
// const perf = fb.performance();
// functions.useFunctionsEmulator('http://localhost:5000');

export { app, auth, db};
