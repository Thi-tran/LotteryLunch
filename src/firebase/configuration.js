import firebase from 'firebase/app';
  
// Initialize Firebase
var config = {
apiKey: "AIzaSyCY5Heeg5uS_kGzZmmE6ko4w3e9GPwyUSI",
authDomain: "lottery-lunch-work.firebaseapp.com",
databaseURL: "https://lottery-lunch-work.firebaseio.com",
projectId: "lottery-lunch-work",
storageBucket: "lottery-lunch-work.appspot.com",
messagingSenderId: "538744142058"
};
firebase.initializeApp(config);

export default firebase;
