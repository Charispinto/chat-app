import React, { useEffect, useState } from "react";
import Message from "./Message";
import { collection, query, limit, onSnapshot, orderBy } from "firebase/firestore";
import { db } from "../firebase";
import { useRef } from "react";

const ChatBox = () => {
  const messagesEndRef= useRef();
  const [messages, setMessages] = useState([]);

  const scrolltobot = ()=>{
    messagesEndRef.current.scrollIntoView({behavior:"smooth"});
  }
  useEffect(scrolltobot,[messages])
  useEffect(() => {
    const q = query(
      collection(db, "messages"),
      orderBy("createdAt"),
      limit(20)
      );
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const messages = [];
      querySnapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      setMessages(messages);
    });
    return () => unsubscribe;
  });


  return (
    <div className="pb-44 pt-20 containerWrap">
      {messages.map((message) => (
        
        <Message
          key={message.id}
          message={message}
        />
        
      ))}
      <div ref={messagesEndRef}></div>
    </div>
  );
};

export default ChatBox;
