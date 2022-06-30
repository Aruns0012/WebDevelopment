import React, { useState } from 'react'
import './join.css';
import logo from '../../images/Naruto Sign-30-60-90px/logo01.png';
import { Link } from 'react-router-dom';
import {otpValue} from '../login/Login'


let user;
// let otp = otpValue;

const sendUser = () => {
  user = document.getElementById('JoinInput').value;
  // document.getElementById('joinInput').value = '';
}


const Join = () => {

  const [name, setname] = useState("");
  const [pass, setPass] = useState("")

  return (
    <div className='JoinPage'>
      <div className='JoinContainer'>
        
        <img src={logo} alt="logo" />
        <h1>Chatter</h1>
        <input onChange={(e) => setname(e.target.value)} type="text" placeholder='Enter your name' id="JoinInput" />

        <input onChange={(e) => setPass(e.target.value)} type="text" placeholder='Enter OTP password'
          id="JoinPass" />


        <Link onClick={(event) => (name && (pass == otpValue)) ? null : event.preventDefault()} to="/chat">
          <button onClick={sendUser} className='Joinbtn'>Login</button>
        </Link>



      </div>
    </div>
  )
}

export default Join
export { user }