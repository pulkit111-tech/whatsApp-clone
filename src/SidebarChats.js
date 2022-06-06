import React from 'react'
import Avatar from './icons/Avatar'
import './SidebarChats.css'
function SidebarChats() {
  return (
    <div className='sidebarChats'>
      <Avatar/>
      <div className="sidebarChat_info">
        <h2>Room name</h2>
        <p>This is the last message</p>
      </div>
    </div>
  )
}

export default SidebarChats