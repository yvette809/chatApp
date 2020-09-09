import React, { useState } from "react";
import { Link } from "react-router-dom";

import './Join.css';

const Join = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  

  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h1 className="heading">Join</h1>
      </div>
      <div>
        <input
          placeholder="name"
          className="joinInput"
          type="text"
          value={name}
          onChange={(e) => 
            setName(e.currentTarget.value)
          }
        />
      </div>
      <div>
        <input
          placeholder="room"
          className="joinInput mt-20"
          type="text"
          value={room}
          onChange={(e)=> setRoom(e.currentTarget.value)}
        />
      </div>
      <Link to={`/chat?name=${name}&room=${room}`}>
        <button className="button mt-20" type="submit" >
          Sign IN
        </button>
      </Link>
    </div>
  );
};

export default Join;
