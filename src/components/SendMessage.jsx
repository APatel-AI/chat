import React, { useState } from 'react';
import {auth, db} from '../firebase'
import {addDoc, collection, serverTimestamp} from 'firebase/firestore'
import { AiOutlineSend } from 'react-icons/ai';
const style = {
  form: `h-14 w-full max-w-[900px]  flex text-xl absolute bottom-0`,
  input: `w-full text-xl p-3 bg-gray-300 dark:bg-black text-black dark:text-white outline-none border-none`,
  button: `w-[15%] justify-center items-center  bg-gradient-to-r from-yellow-200 to-red-700 dark:bg-gradient-to-r dark:from-blue-800 dark:to-blue-500`,
  send: `mx-auto dark:text-white`
 
};

const SendMessage = ({scroll}) => {
  const [input, setInput] = useState('');

  const sendMessage = async (e) => {
    e.preventDefault()
    if (input === '') {
        alert('Please enter a valid message')
        return
    }
    const {uid, displayName} = auth.currentUser
    await addDoc(collection(db, 'messages'), {
        text: input,
        name: displayName,
        uid,
        timestamp: serverTimestamp()
    })
    setInput('')
    scroll.current.scrollIntoView({behavior: 'smooth'})
  }

  return (
    <form onSubmit={sendMessage} className={style.form}>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className={style.input}
        type='text'
        placeholder='Message' 
      />
      <button className={style.button} type='submit'>
       <AiOutlineSend className={style.send} size={'30px'}/>
      </button>
     
    </form>
  );
};

export default SendMessage;