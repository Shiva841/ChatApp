import React, { useState } from 'react';
import { useEffect } from 'react';
import "./conversation.css";

export default function Conversation({conversation,currentUser}) {
  const [user,setUser] = useState(null);

  useEffect(()=>{
    const friendId = conversation.member.find((m)=> m !== currentUser._id);
  },[conversation,currentUser._id]);

  return (
    <div className='conversation'>
      <img src="https://images.unsplash.com/photo-1594007759138-855170ec8dc0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1376&q=80" 
        alt="" 
        className="conversation-img" />
      <span className="conversation-name">Shiva</span>
    </div>
  )
}
