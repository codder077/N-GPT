import React, { useRef } from 'react';
import Header from './Header';
import bag_img from '../log.png';
import { useState } from 'react';
import { checkValidData } from '../utils/validata';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { addUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";
import {USER_AVATAR} from "../utils/constant";

import { auth } from "../utils/firebase";

const Login = () => {

  const [isSignInForm, setIsSignInForm] = useState(true);

  const [errorMessage,setErrorMessage] =useState(null);
  const dispatch=useDispatch();
  const email=useRef(null);
  const password=useRef(null);
  const name=useRef(null);
  const handleButtonClick= () =>{
   const message= checkValidData(email.current.value,password.current.value);
   setErrorMessage(message);

   if(message) return;

   if(!isSignInForm){
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      ).then((userCredential) => {
        const user = userCredential.user;
        updateProfile(user, {
          displayName: name.current.value,
          photoURL: USER_AVATAR,
        }).then(() => {
          const { uid, email, displayName, photoURL } = auth.currentUser;
          dispatch(
            addUser({
              uid: uid,
              email: email,
              displayName: displayName,
              photoURL: photoURL,
            })
          );
        })
        .catch((error) => {
          setErrorMessage(error.message);
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode + "-" + errorMessage);
      });
   }
   else{
    signInWithEmailAndPassword(
      auth,
      email.current.value,
      password.current.value
    )
      .then((userCredential) => {
        const user = userCredential.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode + "-" + errorMessage);
      });
   }
  }
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div className=' relative'>
      <Header/>
      <div className="absolute bg-cover w-full h-screen  ">
        <img className="h-screen w-[2500px]" src={bag_img} alt="logo" />
      </div>
      <form onSubmit={(e) => {e.preventDefault()}}
      className='w-full md:w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>

      <h1 className="font-bold text-3xl py-4">
          {isSignInForm?"Sign In":"Sign Up"}
        </h1>  
      
      {!isSignInForm &&
            <input
            ref={name}
             type='text'
             placeholder='name'
            className='p-4 my-4 w-full bg-gray-700'/>
      }

      <input type='text' ref = {email} placeholder='email' className='p-4 my-4 w-full bg-gray-700'/>
      
      <input type='password' ref = {password} placeholder='password' className='p-4 my-4 w-full bg-gray-700'/>
      <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>
      
      <button 
      className='p-4 my-6 bg-red-700 w-full rounded-lg hover:scale-110' 
      onClick={handleButtonClick}>
       {isSignInForm?"Sign In":"Sign Up"}
        </button>
     
      <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already registered? Sign In Now."}
        </p>

      </form>

    </div>
  );
}

export default Login;
