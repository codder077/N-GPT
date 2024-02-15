import React, { useEffect } from 'react';
import logon from "../logon.jpg"
import {auth} from "../utils/firebase";
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO } from '../utils/constant';
const Header = () => {

  const navigate=useNavigate();
  const dispatch=useDispatch();
  const user = useSelector((store) => store.user);
  const handleSignout= ()=>{
   signOut(auth)
    .then(() => {})
    .catch((error) => {
      navigate("/error");
    });
  }
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);
  return (
    <div className='flex justify-between absolute w-screen z-10 px-8 py-2 bg-gradient-to-b from-black'>
      <img className='w-44 '
       src= {LOGO}
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
