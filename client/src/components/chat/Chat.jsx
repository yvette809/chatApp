import React,{useState, useEffect} from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';

let socket;

const Chat = ({location}) => {

  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const ENDPOINT = 'localhost:3005'


    useEffect(()=>{
        const {name,room} = queryString.parse(location.search)
        socket = io()
        setName(name);
        setRoom(room);
        console.log(socket)
    })
    return (
        <div>
            chat
        </div>
    )
}

export default Chat

