const express = require("express");
const socketio = require("socket.io");
const http = require("http");
const dotenv = require("dotenv");
dotenv.config();

const {addUser, removeUser,getUser, getUsersInRoom} = require("./src/users")

const app = express();
const server = http.createServer(app);
const io = socketio(server);

io.on('connection', (socket)=>{
    console.log("we have a new connection!!")

    // all codes will run here
    socket.on('join', ({name,room})=>{
        console.log(name,room)
    })

    
    socket.on('disconnect', ()=>{
        console.log('user has left!!')
    })
})

const port = process.env.PORT || 3006;

const router = require("./src/router")
app.use("/", router)

server.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
