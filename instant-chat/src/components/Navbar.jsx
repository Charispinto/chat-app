import React from "react";
import { UserAuth } from "../context/AuthContext";

const Navbar = () => {

  const{currentUser,logout}=UserAuth();

  const logoutHandler= async()=>{
    try{await logout();}
    catch(e){console.log(e)}
  }
  return (
    <div className="navbar fixed z-10 navbar-accent bg-neutral text-neutral-content">
      <div className="containerWrap flex justify-between">
        <a className="btn btn-ghost normal-case text-xl">chatIT</a>
        {currentUser?<button onClick={logoutHandler} className="button">Logout</button>:""}
      </div>
    </div>
  );
};

export default Navbar;
