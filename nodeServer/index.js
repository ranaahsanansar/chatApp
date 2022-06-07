const io = require('socket.io')(8000)

const users = {};


io.on('connection' , socket =>{

    console.log("new Connection");
    socket.on('new-user-joined' , (name) =>{

        console.log("New user" + name);

        users[socket.id] = name;
        socket.broadcast.emit('user-joined' , name);
        // console.log(users);

    }); 

    socket.on('send' , (message) =>{
        socket.broadcast.emit('receive' , {r_message: message , name: users[socket.id]});
    });

});
