import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
const config = {
  apiKey: "AIzaSyAyxlcUL8zLBeSzwiVqWrCVdBB-fJCjX1w",
  authDomain: "netflix-1fea4.firebaseapp.com",
  projectId: "netflix-1fea4",
  storageBucket: "netflix-1fea4.appspot.com",
  messagingSenderId: "818505183466",
  appId: "1:818505183466:web:35352adfc4151496946793",
};

const firebase = Firebase.initializeApp(config);

export { firebase };
