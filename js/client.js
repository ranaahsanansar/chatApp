const socket = io('http://localhost:8000');

const form = document.getElementById('msg_form');

const messageInput = document.getElementById('msginput');

const messageContainer = document.querySelector(".inbox_container");

const username = prompt("Enter your name:");


socket.emit('new-user-joined' , username);
