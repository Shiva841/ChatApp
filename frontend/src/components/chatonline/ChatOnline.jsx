import React from 'react'
import "./chatonline.css";

export default function ChatOnline({currentUser}) {
  const pubfol = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div className='chat-online'>
        <div className="chat-online-friends">
            <div className="chat-img-container">
            <img 
                src={currentUser.profilePicture
                  ?pubfol+currentUser.profilePicture
                  :pubfol+"noUser2.jpg"}
                alt="" className="online-friends-img" 
            />
            <div className="online-friends-badge"></div>
            </div>
            <span className="chat-online-friends-name">{currentUser.username}</span>
        </div>
    </div>
  )
}
