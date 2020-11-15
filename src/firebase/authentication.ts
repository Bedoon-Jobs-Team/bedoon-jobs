import firebase from "./firebase";

export async function signInWithGoogle() {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().useDeviceLanguage();

  return firebase.auth().signInWithPopup(provider);
}

export async function logout() {
  return firebase.auth().signOut();
}
