const express = require("express");
const socketio = require("socket.io");
const http = require("http");
const dotenv = require("dotenv");
dotenv.config();

const { addUser, removeUser, getUser, getUsersInRoom } = require("./src/users");

const app = express();
const server = http.createServer(app);
const io = socketio(server);

io.on("connection", (socket) => {
  console.log("we have a new connection!!");

  // all codes will run here
  // 1. Join room
  socket.on("join", ({ name, room }, callback) => {
    const { error, user } = addUser({ id: socket.id, name, room }); //addUser() can return either an error or a user. We get the id from the ocket id
    if (error) {
      return callback(error);
    } else {
      // join a user to a room
      socket.join(user.room);
      socket.emit('message', {user: 'admin', text: `${user.name}welcome to the room ${user.room}`})
      //the message below is telling evryone that the user has joined
      socket.broadcast.to(user.room).emit('message', {user: 'admin', text: `${user.name}, has joined}`})
      callback()
    }
  });

  //2.send message

  socket.on('sendMessage', (message,callback)=>{
      const user = getUser(socket.id)
      io.to(user.room).emit('message', {user: user.name, text:message});
      callback()
  })

  socket.on("disconnect", () => {
    console.log("user has left!!");
  });
});

const port = process.env.PORT || 3006;

const router = require("./src/router");
app.use("/", router);

server.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
