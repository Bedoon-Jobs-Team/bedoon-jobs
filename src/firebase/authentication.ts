import firebase from "./firebase";

export async function signInWithGoogle() {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().useDeviceLanguage();

  return firebase.auth().signInWithPopup(provider);
}

export async function logout() {
  return firebase.auth().signOut();
}

export async function verifyUser(currentUser: firebase.User) {
  const verifiedUsersSnapshot = await firebase
    .firestore()
    .collection("verifiedUsers")
    .where("uid", "==", currentUser.uid)
    .limit(1)
    .get();

  return verifiedUsersSnapshot.docs.length !== 0;
}
