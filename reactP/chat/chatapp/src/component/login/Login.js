import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import "./login.css";

let otpValue;
const Login = () => {
    const [number, setNumber] = useState('')
    const [val, setVal] = useState("     ");

    const otp = () => {
        setTimeout(() => {
            let ladoo = Math.floor(100000 + Math.random() * 900000);
            // console.log(ladoo);

            setVal(ladoo);
            otpValue = ladoo;
            // console.log(otpValue);
        }, 200);
    }
    return (
        <div className='LoginPage'>
            <div className='LoginContainer'>
                <div className="text">Chatter</div>
                <div>
                    <div className="pgName">Create server</div>
                </div>
                <div className='otp'>
                    {val}
                </div>

                <form  action="sendmessage" method="post" >
                <input className='MobNum' onChange={(e) => setNumber(e.target.value)} type="tel" placeholder='Enter your phone number' name='number' />
                <button onClick={(event) => number ? otp() : setVal('Enter correct number')} type="submit" className='otpButton'>Get otp</button>

                </form>




            </div>
            <Link onClick={(event) => number ? null : event.preventDefault()} to="/join">
                <button className='Joinbtn'>Next</button><br />
            </Link>
            {/* <Link to="/join">
                <button className='Joinbtn'>Join room</button>
            </Link> */}

        </div>
    )
}

export default Login
export { otpValue }