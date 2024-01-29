// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyDRTBAV1gB0YOfM5ufBUFhGR2cmzmGnnV4",
      authDomain: "c93-a0f4e.firebaseapp.com",
      projectId: "c93-a0f4e",
      storageBucket: "c93-a0f4e.appspot.com",
      messagingSenderId: "1068395075780",
      appId: "1:1068395075780:web:75c5c0e267c4c76292d191"
    };
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();

