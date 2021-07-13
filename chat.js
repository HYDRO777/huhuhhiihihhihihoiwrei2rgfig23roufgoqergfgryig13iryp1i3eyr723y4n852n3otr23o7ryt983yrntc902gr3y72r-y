function nameinlocalstorage() {
    var name = document.getElementById("username").value;
    localStorage.setItem("username", name );
    window.location = "chatroom.html";
}