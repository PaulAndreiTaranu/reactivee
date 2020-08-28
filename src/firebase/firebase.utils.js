import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
   apiKey: "AIzaSyCGHpTbbBGJIDQy1Si--WOaL74Oe_l7vbo",
   authDomain: "fresh-as-kek.firebaseapp.com",
   databaseURL: "https://fresh-as-kek.firebaseio.com",
   projectId: "fresh-as-kek",
   storageBucket: "fresh-as-kek.appspot.com",
   messagingSenderId: "153641648758",
   appId: "1:153641648758:web:7ea8df26352227b80f1557",
   measurementId: "G-CW89MM6DS5",
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
   if (!userAuth) return;

   const userRef = firestore.doc(`users/${userAuth.uid}`);

   const snapShot = await userRef.get();

   if (!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();
      try {
         await userRef.set({
            displayName,
            email,
            createdAt,
            ...additionalData,
         });
      } catch (error) {
         console.log("error creating user", error.message);
      }
   }

   return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
