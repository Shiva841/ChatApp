import "./messenger.css";
import React from "react";
import Topbar from "../components/Topbar/Topbar";
import Conversation from "../components/conversations/Conversation";
import Message from "../components/Message/Message";
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import ChatOnline from "../components/chatonline/ChatOnline";

export default function Messenger() {
  return (
    <div>
    <Topbar/>
       <div className="Messenger">
          <div className="chat-menu">
            <div className="chat-menu-wrapper">
                <input placeholder="search for friends" className="chat-menu-input" />
                <hr />
                <Conversation/>
            </div>
          </div>
          <div className="chat-box">
            <div className="chat-box-wrapper">
                <div className="chat-box-top">
                  <Message/>
                  <Message own={true}/>
                  <Message/>
                </div>
                <div className="chat-box-bottom">
                  <SentimentSatisfiedAltIcon className="chat-emoji"/>
                  <textarea placeholder="write something..." className="chat-bottom-input"></textarea>
                  <button className="chat-send-button">Send</button>
                </div>
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
