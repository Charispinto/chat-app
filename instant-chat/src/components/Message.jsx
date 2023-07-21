import React from "react";
import { UserAuth } from "../context/AuthContext";

function Message({message}) {
  // console.log(message);
  const {currentUser}=UserAuth();
  return (
    <div>
      <div className={`chat ${currentUser.uid===message.uid?"chat-end":"chat-start"}`}>
        <div className="chat-image avatar">
        <div className="w-10 rounded-full">
        <img src={message.avatar} />
        </div>
      </div>
        <div className="chat-header">
          {message.name}
          <time className="text-xs opacity-50"> 2 hours ago</time>
        </div>
        <div className="chat-bubble">{message.text}</div>
        <div className="chat-footer opacity-50">Seen</div>
      </div>
    
    </div>
  );
}

export default Message;
