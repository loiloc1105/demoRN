import * as firebase from 'firebase'
var Config = {
    apiKey: "AIzaSyBWacLnbGD1quTWMibwIqPly5yhI0nyFuk",
    authDomain: "mob306-ps08224.firebaseapp.com",
    databaseURL: "https://mob306-ps08224.firebaseio.com",
    projectId: "mob306-ps08224",
    storageBucket: "mob306-ps08224.appspot.com",
    messagingSenderId: "736955854374",
    appId: "1:736955854374:web:93e46ff7a6e09af4ee40e7",
    measurementId: "G-FYJTW3V0JH"
};
// Initialize Firebase
export default (firebaseConfig = firebase.initializeApp(Config));