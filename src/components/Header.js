import React from 'react';
import logon from "../logon.jpg"
import {auth} from "../utils/firebase";
import { Navigate, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { useSelector } from 'react-redux';
const Header = () => {

  const navigate=useNavigate();
  const user = useSelector((store) => store.user);
  const handleSignout= ()=>{
   signOut(auth)
    .then(() => {
      navigate("/");
    })
    .catch((error) => {
      navigate("/error");
    });
  }
  return (
    <div className='flex justify-between absolute w-screen z-10 px-8 py-2 bg-gradient-to-b from-black'>
      <img className='w-44 '
       src= 'https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'
       alt="logo" />
{ user &&
       <div className='flex'>
        <img  className='hidden md:block w-12 h-12' src={logon}/>

        <button onClick={handleSignout} className='font-bold text-white'> (sign out) </button>
       </div>
}
    </div>
  );
}

export default Header;
