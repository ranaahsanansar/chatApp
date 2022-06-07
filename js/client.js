const socket = io('http://localhost:8000');

const form = document.getElementById('msg_form');

const messageInput = document.getElementById('msginput');

const messageContainer = document.querySelector(".inbox");

const append = (message, position)=>{
    const mesaageElement = document.createElement('div');
    mesaageElement.innerText = message;
    mesaageElement.classList.add('message');
    mesaageElement.classList.add(position);

    messageContainer.append(mesaageElement);
}


const username = prompt("Enter your name:");

socket.emit('new-user-joined' , username);


socket.on('user-joined' , data=>{
    append(`${username} joined the Chat` , 'left');
});
