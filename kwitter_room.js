var firebaseConfig = {
      apiKey: "AIzaSyB2ou7lZ-Nq9QqWdxaICkDQ9S__ztLY3Lo",
      authDomain: "kwitter-223a5.firebaseapp.com",
      databaseURL: "https://kwitter-223a5-default-rtdb.firebaseio.com",
      projectId: "kwitter-223a5",
      storageBucket: "kwitter-223a5.appspot.com",
      messagingSenderId: "159305529951",
      appId: "1:159305529951:web:51cb985233969f1b0b39ea",
      measurementId: "G-PTYGQT60XG"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom() {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
                  console.log("Room Names - " + Room_names);
                  row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >" + Room_names + "</div><hr>";
                  document.getElementById("output").innerHTML += row;
                  //End code
            });
      });
}
getData();

function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}