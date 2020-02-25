import Firebase from 'firebase'
import 'firebase/firestore'

//const settings = {timestampsInSnapshots: true};

let config = {
  apiKey: "AIzaSyCchz97s9ZVzWSPZRYGNXPBmGCkPffBM4g",
  authDomain: "mcbriggs-5cad9.firebaseapp.com",
  databaseURL: "https://mcbriggs-5cad9.firebaseio.com",
  projectId: "mcbriggs-5cad9",
  storageBucket: "mcbriggs-5cad9.appspot.com",
  messagingSenderId: "54792564885",
  appId: "1:54792564885:web:acd794dd7edd92e5"
};
let app = Firebase.initializeApp(config);
export const db = app.firestore();
//firebase.firestore().settings(settings);

//export default firebase;