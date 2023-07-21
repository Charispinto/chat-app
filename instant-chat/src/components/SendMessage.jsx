import React, { useState } from "react";
import { UserAuth } from "../context/AuthContext";
import { serverTimestamp } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";

const SendMessage = () => {
  const [value, setMesvalue] = useState("");
  const {currentUser} = UserAuth();

  const submitHandler = async (message) => {
    message.preventDefault();
    if(value.trim()===""){
      alert("Enter valid message!")
      return
    }
    try{
      const {uid,displayName,photoURL}= currentUser;
      await addDoc(collection(db, "messages"), {
        text: value,
        name: displayName,
        avatar:photoURL,
        createdAt: serverTimestamp(),
        uid
      })
    }
    catch(e){console.log(e)}
    console.log(value);
    setMesvalue("");
  };
  


  return (
    <div>
      <div className="fixed bottom-0 bg-neutral-200 py-10 shadow-lg w-full">
        <form onSubmit={submitHandler} className="flex containerWrap">
          <input
            type="text"
            value={value}
            onChange={(e) => setMesvalue(e.target.value)}
            className="input w-full focus:outline-none bg-gray-100 rounded-r"
          />
          <button className="bg-gray-600 text-white rounded-r-lg w-auto text-sm px-5">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default SendMessage;
