import React from 'react';
import Header from './Header';
import bag_img from '../log.png';
import { useState } from 'react';

const Login = () => {

  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div className='relative'>
      <Header/>
      <img className='w-full absolute' src={bag_img}/>
      <form 
      className='w-full md:w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>

      <h1 className="font-bold text-3xl py-4">
          {isSignInForm?"Sign In":"Sign Up"}
        </h1>  

      <input type='text' placeholder='email' className='p-4 my-4 w-full bg-gray-700'/>
      
      <input type='text' placeholder='password' className='p-4 my-4 w-full bg-gray-700'/>
      
      {!isSignInForm &&
            <input
             type='text'
             placeholder='name'
            className='p-4 my-4 w-full bg-gray-700'/>
      }
      <button className='p-4 my-6 bg-red-700 w-full rounded-lg hover:scale-110'>
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