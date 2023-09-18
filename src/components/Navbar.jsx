import React from 'react'
import { auth } from '../firebase'; 
import { useAuthState } from 'react-firebase-hooks/auth'; 
import SignIn from './Signin';
import DarkMode from '../darkMode';
import Logout from './Logout';
const style ={

    nav: `bg-gray-300 h-20 p-4 flex justify-between  dark:bg-black items-center`, 
    heading: `text-gray-500 text-3xl dark:text-pink-500`

}

const Navbar = () => {
  const [user] = useAuthState (auth)
  console.log(user)
  return (
    <div className={style.nav}>
     

        <DarkMode className={style.heading} />

        {user ? <Logout /> : <SignIn />}
     
      
    </div>
  )
}

export default Navbar
