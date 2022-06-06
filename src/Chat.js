import React from 'react'
import Avatar from './icons/Avatar'
import './Chat.css'
import SearchGlass from './icons/SearchGlass'
import AttachFile from './icons/AttachFile'
import ChatDots from './icons/ChatDots'
import Smily from './icons/Smily'

import Mic from './icons/Mic'
function Chat() {
  return (
    <div className='chat'>
        <div className="chat_header">
          <Avatar/>
        <div className="chat_headerInfo">
          <h4>Room name</h4>
          <p>Last seen at...</p>
        </div>
        <div className="chat_headerRight">
          <SearchGlass/>
          <AttachFile/>
          <ChatDots/>
        </div>
    </div>
    <div className="chat_body">
        
        <div className="chat_message">
          This is a message
        <div className='chat_timestamp'>{
          new Date().toLocaleTimeString()
        }
        </div>
        <div className='chat_name'>Pulkit</div>
        </div>
        
        <div className="chat_reciever chat_message">
          This is a message
        <div className='chat_timestamp'>{
          new Date().toLocaleTimeString()
        }
        </div>
        <div className='chat_name'>Pulkit</div>
        </div>
        
        <div className="chat_message">
          This is a message
        <div className='chat_timestamp'>{
          new Date().toLocaleTimeString()
        }
        </div>
        <div className='chat_name'>Pulkit</div>
        </div>
    </div>

    <div className="chat_footer">
      <Smily/>
      <input className="form-control" type="search" placeholder="Message" aria-label="Search"></input>
      <Mic/>
    </div>
    </div>
  ) 
}

export default Chat