import React from 'react'
import { auth } from '../firebase'
const style = {
    message: `flex items-center shadow-md shadow-black m-4 py-2 px-3 rounded-full rounded-full dark:text-white dark:shadow-white `, 

    name: `absolute mt-[-4rem] text-gray-600 text-xs dark:text-pink-600`,

    sent: `bg-[#395dff] text-white flex-row-reverse text-end float-right rounded-bl-full dark:text-white`, 

    received: `bg-[#e5e5ea] text-black float-left rounded-br-full dark:text-white dark:bg-black`,

}
const Message = ({message}) => {

    const messageClass = 
    message.uid === auth.currentUser.uid ? `${style.sent}`: `${style.received}`
  return (
    <div>
        <div className={`${style.message} ${messageClass}`}>

            <p className={style.name}>{message.name}</p>
            <p>{message.text}</p>
           

        </div>
      
    </div>
  )
}

export default Message
