import React, { useEffect } from "react";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const {currentUser,signinwithgoogle} = UserAuth();
  console.log(currentUser);


  const loginHandler=async()=>{
    try{
        await signinwithgoogle();
    }catch(e){
      console.log(e)
    }
  }
  useEffect(()=>{
    if(currentUser){
      navigate("/chat");
    }
  },[currentUser]);



  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Bonjour!</h1>
            <p className="py-6">
              Join new conversation, meet different people and connect with your loved ones. All in one chatroom
            </p>
            <button onClick={loginHandler} className="btn btn-accent">Login</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
