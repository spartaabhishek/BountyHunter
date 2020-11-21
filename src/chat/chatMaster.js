import React from "react";
import "./chatMaster.css";
import Sidebar from "./sidebar.js";
import Chat from "./chat.js";
function chatMaster() {
  return (
    <div className="app">
      <div className="app_body">
        <Sidebar></Sidebar>
        <Chat></Chat>
      </div>
    </div>
  );
}

export default chatMaster;
