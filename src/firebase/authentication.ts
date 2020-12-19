import firebase from "./firebase";

export async function signUp(email: string, password: string, firstName: string, lastName: string) {
  const result = await firebase.auth().createUserWithEmailAndPassword(email, password);
  if (result.user) {
    await result.user.updateProfile({ displayName: firstName + " " + lastName });
  }
}

export async function signInWithEmail(email: string, password: string) {
  return firebase.auth().signInWithEmailAndPassword(email, password);
}

export async function signInWithGoogle() {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().useDeviceLanguage();

  return firebase.auth().signInWithPopup(provider);
}

export async function logout() {
  return firebase.auth().signOut();
}

export async function verifyUser(currentUser: firebase.User) {
  // const verifiedUsersSnapshot = await firebase
  //   .firestore()
  //   .collection("verifiedUsers")
  //   .where("uid", "==", currentUser.uid)
  //   .limit(1)
  //   .get();

  // return verifiedUsersSnapshot.docs.length !== 0;
  return true; // Temporary for testing.
}
