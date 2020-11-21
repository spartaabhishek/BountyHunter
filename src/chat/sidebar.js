import React from "react";
import "./sidebar.css";

import SearchIcon from "@material-ui/icons/Search";

import SidebarChat from "./SidebarChat";

function sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar_search">
        <div className="sidebar_searchContainer">
          <SearchIcon />
          <input placeholder="Search or start new chat" type="text"></input>
        </div>
      </div>

      <div className="sidebar_chats">
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
      </div>
    </div>
  );
}

export default sidebar;
