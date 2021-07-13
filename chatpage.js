

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

    room_name = localStorage.getItem("room_name");
username = localStorage.getItem("username");

function send(){
msg = document.getElementById("message").value;
firebase.database().ref(room_name).push({
name : username ,
message : msg , 
like : 0
document.getElementById("message").value = "";
});
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;

console.log(firebase_message_id);
console.log(message_data);
name = message_data['message'];
message = message_data['message'];
like = message_data['like'];
name_with_tag = "<h4>" + name + "<img class='user_tick' src='tick.png'></h4>";
message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";              
like_button = "<button class='btn btn-warning' id=" + firebase_message_id + "value="+ like + "onclick='updateLike(this.id)'>";
span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'> Like :"+ like +"</span></button><hr>";
row = name_with_tag + message_with_tag + like_button + span_with_tag ;
document.getElementById("output").innerHTML += row;

      } });  }); }
getData();

function updateLike(message_id){
button_id = message_id;
likes = document.getElementById("button_id").value;
updatedLikes = Number(likes) + 1;
firebase.database().ref(room_name).child(message_id).update({
like : updatedLikes;
});
}

