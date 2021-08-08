var firebaseConfig = {
      apiKey: "AIzaSyBjcDqcXEq9bZCDfiQ7xvoBYu80MUP7dmo",
      authDomain: "kwitter-eb522.firebaseapp.com",
      databaseURL: "https://kwitter-eb522-default-rtdb.firebaseio.com",
      projectId: "kwitter-eb522",
      storageBucket: "kwitter-eb522.appspot.com",
      messagingSenderId: "545067593333",
      appId: "1:545067593333:web:1d5a6c85286506cf5e523c"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");
    room_name = localStorage.getItem("room_name");
    function send() {
          msg = document.getElementById("msg").value;
          firebase.database().ref(room_name).push({
                like:0,
                Message:msg,
                Name:user_name
          });
          document.getElementById("msg").value= "";
    }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
//End code
      } });  }); }
getData();
function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}