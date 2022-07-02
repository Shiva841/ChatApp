import "./messenger.css";
import React, { useContext, useState, useEffect } from "react";
import Topbar from "../components/Topbar/Topbar";
import Conversation from "../components/conversations/Conversation";
import Message from "../components/Message/Message";
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import ChatOnline from "../components/chatonline/ChatOnline";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";

export default function Messenger() {
  const [conversations,setConversation] = useState([]);
  const [currentChat,setCurrentchat] = useState("");
  const [messages,setMessages] = useState([]);
  const {user} = useContext(AuthContext);
 
  useEffect(()=>{
    const getConversation = async () =>{
      try {
        const response = await axios.get("/conversation/"+user._id);
        setConversation(response.data);
      } catch (error) {
        console.log(error);
      }
      
    };
    getConversation();
  },[user._id]);

 useEffect(()=>{
    const getMessages = async () =>{
        try {
          const res = await axios.get("/message/"+currentChat._id);
          setMessages(res.data);
        } catch (error) {
          console.log(error);
        }
    }
    getMessages();
 },[currentChat]);


  return (
    <div>
    <Topbar/>
       <div className="Messenger">
          <div className="chat-menu">
            <div className="chat-menu-wrapper">
                <input placeholder="search for friends" className="chat-menu-input" />
                <hr />
                {conversations.map((u)=>(
                  <div className="container" onClick={()=>setCurrentchat(u)}>
                      <Conversation conversation={u} currentUser={user}/>
                  </div>
                    
                ))}
               
            </div>
          </div>
          <div className="chat-box">
            <div className="chat-box-wrapper">
              {
                currentChat ?
                <>
                <div className="chat-box-top">
                  {
                    messages.map((m)=>(
                      <Message message={m} own={m.sender === user._id}/>
                    ))
                  }
                  
                </div>
                <div className="chat-box-bottom">
                  <SentimentSatisfiedAltIcon className="chat-emoji"/>
                  <textarea placeholder="write something..." className="chat-bottom-input"></textarea>
                  <button className="chat-send-button">Send</button>
                </div>
                </>
                : <span className="no-chat">Open a Conversation to start a Chat</span> 
                }
            </div>
          </div>
          <div className="chat-online">
            <div className="chat-online-wrapper">
                <span className="online-heading">Active user</span>
                 <ChatOnline/>
            </div>
          </div>
       </div>
    </div>
  )
}
