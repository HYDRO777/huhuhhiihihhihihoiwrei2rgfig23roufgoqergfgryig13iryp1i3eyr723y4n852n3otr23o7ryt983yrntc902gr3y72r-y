user = localStorage.getItem("username");
document.getElementById("username").innerHTML = "Welcome" + " " + user + "!";

var firebaseConfig = {
      apiKey: "AIzaSyAgMZOKqFbgqz0GG60oHVwxJ-xKdaKfaa0",
      authDomain: "chatappblahblahblahblahblahbl.firebaseapp.com",
      databaseURL: "https://chatappblahblahblahblahblahbl-default-rtdb.firebaseio.com",
      projectId: "chatappblahblahblahblahblahbl",
      storageBucket: "chatappblahblahblahblahblahbl.appspot.com",
      messagingSenderId: "1014472734844",
      appId: "1:1014472734844:web:616cfd321601f1d18bf1f9"
    };
    
    firebase.initializeApp(firebaseConfig);
    
    function addRoom(){
room = document.getElementById("roomfind").value;

firebase.database().ref("/").child(room).update({
      purpose : "adding chatroom"
});

localStorage.setItem("roomname", room);
window.location = "chatpage.html"

    }
function redirectTo(troom){
      localStorage.setItem("room_name", troom);
      window.location = "chatpage.html"
}


function getData() {firebase.database().ref("/").on('value', function(snapshot) 
{document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot)
 {childKey  = childSnapshot.key;
       Room_names = childKey;
      

      row = '<div class="room_name" id= ' + Room_names + 'onclick= "redirectTo(this.id)">#'+ Room_names + '</div> <br>';
document.getElementById("output").innerHTML += row ;





      
      });});}

      function logout(){
            localStorage.removeItem("room_name");
            localStorage.removeItem("username");
            window.locattion = "index.html";
      }
getData();

