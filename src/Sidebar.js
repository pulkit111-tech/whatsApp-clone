import Search from './Search'
import React from 'react'
import Avatar from './icons/Avatar'
import ChatIcon from './icons/ChatIcon'
import StoryPic from './icons/StoryPic'
import Verdots from './icons/Verdots'
import "./Sidebar.css"
import SidebarChats from './SidebarChats'

function Sidebar() {
  return (
    <div className='sidebar'>
        <div className="sidebar_header">
          <Avatar/>        
          {/* <i className="bi bi-person-bounding-box"></i> */}
          <div className="sidebar_headerRight">
            <button type="submit" className="btn btn-light" style={{border:'none',background:'none'}}><StoryPic/></button>
            <button type="submit" className="btn btn-light" style={{border:'none',background:'none'}}><ChatIcon/></button>
            <button type="submit" className="btn btn-light" style={{border:'none',background:'none'}}><Verdots/></button>
          </div>
        </div>
        <div className="sidebar_search my-1">
            <Search/>
        </div>
        <div className="sidebar_chats my-1">
            <SidebarChats/>
            <SidebarChats/>
            <SidebarChats/>
            <SidebarChats/>
            <SidebarChats/>
            <SidebarChats/>
            <SidebarChats/>
            <SidebarChats/>
            <SidebarChats/>
            <SidebarChats/>
            
        </div>

    </div>
  )
}
export default Sidebar
