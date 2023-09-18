import React from 'react'
import {auth} from '../firebase'
import {FiLogOut} from 'react-icons/fi'

const style = {
 
    icon: `text-black dark:text-white`
}



const Logout = () => {
    const signOut = () => {
        signOut(auth)
    }
  return (
    <button onClick={() => auth.signOut()}>
      <FiLogOut className={style.icon}size={'30px'}/>
    </button>
  )
}

export default Logout
