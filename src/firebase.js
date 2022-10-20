const {initializeApp} = require('firebase/app')
const {getFirestore} = require('firebase/firestore')
const {getAuth} = require('firebase/auth')

const {collection} = require('firebase/firestore')

const firebaseConfig = {
    apiKey: "AIzaSyDcZC0T3NmC9_9aD9ccw3PCHtoJk85SL7w",
    authDomain: "protein-pump.firebaseapp.com",
    projectId: "protein-pump",
    storageBucket: "protein-pump.appspot.com",
    messagingSenderId: "16572254694",
    appId: "1:16572254694:web:75d4a5a9abb95bf1e6ee27"
};
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

const menuItems = collection(db, 'menu-items')

module.exports = {db, auth, app, menuItems};
