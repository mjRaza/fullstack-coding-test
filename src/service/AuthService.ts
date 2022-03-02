import {auth} from "../config/firebase.config";


export const signUpUser = (email, password) =>
auth.createUserWithEmailAndPassword(email, password);

export const signInUser = (email, password) =>
  auth.signInWithEmailAndPassword(email, password);

export const signOut = () => auth.signOut();


