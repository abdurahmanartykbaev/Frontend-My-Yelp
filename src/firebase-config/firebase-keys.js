import "firebase/compat/auth";
import "firebase/compat/storage";
import "firebase/compat/firestore";
import firebase from "firebase/compat/app";

const firebaseConfig = {
  apiKey: "AIzaSyB5xfIpuU3cLWbavleg7DStMdJEamxkzwk",
  authDomain: "abdu-yelp.firebaseapp.com",
  projectId: "abdu-yelp",
  storageBucket: "abdu-yelp.appspot.com",
  messagingSenderId: "606189364667",
  appId: "1:606189364667:web:eba1d6a09cede69566d09e"
};

firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();

const database = {
  folders: firestore.collection("folders"),
  formatDoc: (doc) => {
    return { id: doc.id, ...doc.data() };
  },
  getCurrentTimestamp: firebase.firestore.FieldValue.serverTimestamp,
};

const auth = firebase.auth();
const storage = firebase.storage();

export { database, storage, auth };
export default firebase;
