import React from "react";
import "./sidebar.css";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchIcon from "@material-ui/icons/Search";
import { Avatar, IconButton } from "@material-ui/core";
import SidebarChat from './SidebarChat'


function sidebar() {
  return (
    <div className="sidebar">
      <div className="header">
        <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRlU8V9gP8YGrPOMrRQgjXH03iqu2j1OTzSqw&usqp=CAU" />
        <div className="sidebar_headerRight">
          <IconButton>
            <DonutLargeIcon></DonutLargeIcon>
          </IconButton>
          <IconButton>
            <ChatIcon></ChatIcon>
          </IconButton>
          <IconButton>
            <MoreVertIcon></MoreVertIcon>
          </IconButton>
        </div>
      </div>

      <div className="sidebar_search">
        <div className="sidebar_searchContainer">
          <SearchIcon></SearchIcon>
          <input placeholder="Search or start new chat"
          type="text"></input>
        </div>
      </div>

      <div className="sidebar_chats">
        <SidebarChat/>
        <SidebarChat/>
        <SidebarChat/>
      </div>  
    </div>
  );
}

export default sidebar;
