import { useState } from "react";
import firebase from "../firebase/firebase";

export function useCurrentUser() {
  const [currentUser, setCurrentUser] = useState<firebase.User | null>(null);

  firebase.auth().onAuthStateChanged(setCurrentUser);

  return currentUser;
}
