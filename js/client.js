const socket = io('http://localhost:8000');

const form = document.getElementById('msg_form');

const messageInput = document.getElementById('msginput');

const messageContainer = document.querySelector(".inbox");

var audio = new Audio('ring.mp3');

const append = (message, position)=>{
    const mesaageElement = document.createElement('div');
    mesaageElement.innerText = message;
    mesaageElement.classList.add('message');
    mesaageElement.classList.add(position);

    messageContainer.append(mesaageElement);
    if(position == 'left'){
        audio.play();
    }
    
}

form.addEventListener('submit' , (e)=>{
    e.preventDefault();
    const message = messageInput.value;
    append(`You: ${message}`, 'right');
    socket.emit('send' , message);
    messageInput.value = "";
})

const username = prompt("Enter your name:");

socket.emit('new-user-joined' , username);


socket.on('user-joined' , data=>{
    append(`${username} joined the Chat` , 'left');
});

socket.on('receive' , data=>{
    append(` ${data.name} : ${data.r_message} ` , 'left');
});

socket.on('disconnected' , name =>{
    append(`${name} Left the Chat` , 'left');
});
