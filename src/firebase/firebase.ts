import firebase from "firebase/app";
import "firebase/auth";
import "firebase/analytics";

const config = {
  apiKey: "AIzaSyAUCIh6-DXs6m8J5Yos-j8EWZSeJxH1vkM",
  authDomain: "project-bidoon.firebaseapp.com",
  databaseURL: "https://project-bidoon.firebaseio.com",
  projectId: "project-bidoon",
  storageBucket: "project-bidoon.appspot.com",
  messagingSenderId: "771917087128",
  appId: "1:771917087128:web:61494ed20796ae7095abed",
  measurementId: "G-NPP98XZ40L",
};

firebase.initializeApp(config);
firebase.analytics();

export default firebase;
