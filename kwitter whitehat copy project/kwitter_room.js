var firebaseConfig = {
      apiKey: "AIzaSyDHFhPMLAI2-xGDAPAdYO3Cst8OKYCxGRs",
      authDomain: "kwitter-app-8f6d5.firebaseapp.com",
      databaseURL: "https://kwitter-app-8f6d5-default-rtdb.firebaseio.com",
      projectId: "kwitter-app-8f6d5",
      storageBucket: "kwitter-app-8f6d5.appspot.com",
      messagingSenderId: "251772333317",
      appId: "1:251772333317:web:bd3709c5e38a50c52a9b6c",
      measurementId: "G-9FGC8NE0W1"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    





user_name = localStorage.getItem("username");
document.getElementById("username").innerHTML = "welcome "+ user_name;
function addroom(){
      room_name = document.getElementById("room_name").value
      localStorage.setItem("room_name", room_name);
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding_room_name"
      })
      window.location = "kwitterpage.html"
}


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();


function logout(){
    localStorage.removeItem("username")
    localStorage.removeItem("room_name")
      window.location = "index.html";
}
