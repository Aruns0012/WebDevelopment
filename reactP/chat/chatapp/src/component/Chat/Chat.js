import React, { useEffect, useState } from 'react';
import { user } from '../Join/Join';
import socketIo from 'socket.io-client';
import './chat.css';
import sendLogo from '../../images/accessories/send.png';
import Message from '../Messages/Message';
import ReactScrollToBottom from 'react-scroll-to-bottom';

// const ENDPOINT = 'https://msgap.herokuapp.com/';
// before deploying another build you will need to comment line below and uncomment line above
const ENDPOINT = 'http://localhost:4500/';



let socket;
const Chat = () => {

    const fetch = ()=>{
        let messageHistLocal = localStorage.getItem('messagesH');
        // console.log(messageHistLocal);

        if(messageHistLocal){
            return JSON.parse(localStorage.getItem('messagesH'));
        } else{
            return [];
        }
    }

    const [id, setId] = useState("");
    const [messages, setMessages] = useState(fetch);

    const sendM = () => {
        const message = document.getElementById('chatInput').value;
        socket.emit('message', { message, id });
        console.log(messages);
        document.getElementById('chatInput').value = "";
    }
    // console.log(message);

    useEffect(() => {
        socket = socketIo(ENDPOINT, { transports: ['websocket'] });
        socket.on('connect', () => {
            alert('connected');
            setId(socket.id);
        })

        socket.emit('joined', { user })

        socket.on('welcome', (data) => {
            setMessages([...messages, data]);
            console.log(data.user, data.message);
        })

        socket.on('userJoined', (data) => {
            setMessages([...messages, data]);
            console.log(data.user, data.message);
        })

        socket.on('leave', (data) => {
            setMessages([...messages, data]);
            console.log(data.message);
        })

        return () => {
            socket.emit('disconnect');
            socket.off();
        }
    }, [])

    useEffect(() => {
        socket.on('sendMessage', (data) => {
            setMessages([...messages, data]);
            console.log(messages);
            console.log(data.user, data.message, data.id);
            localStorage.setItem('messagesH', JSON.stringify(messages));
        })

        // return () => {
        //     socket.off();
        // }
    }, [messages])


    return (
        <div className='chatPage'>
            <div className='chatContainer'>
                <div className='header' >
                    <h2>Welcome {(user) ? user : 'anonyomus'}</h2>
                    <a href='/'>&#9932;

                    </a>
                </div>
                <ReactScrollToBottom className='chatBox'>
                    {messages.map((item, i) => <Message user={item.id === id ? '' : item.user} message={item.message} classs={item.id === id ? 'right' : 'left'} />)}
                </ReactScrollToBottom>
                <div className="inputBox">
                    <input type="text" id="chatInput" onKeyPress={(event) => event.key === 'Enter' ? sendM() : null} />
                    <button className='sendbtn' onClick={sendM}><img src={sendLogo} alt="Send" /></button>
                </div>
            </div>
        </div>
    )
}

export default Chat
