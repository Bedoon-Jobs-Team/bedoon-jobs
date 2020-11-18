import firebase from "./firebase";

export const jobAdPreviewsRef = firebase.firestore().collection("jobAdPreviews");
export const jobAdDetailsRef = firebase.firestore().collection("jobAdDetails");
