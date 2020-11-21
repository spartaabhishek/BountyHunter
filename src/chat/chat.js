import { Avatar, IconButton } from "@material-ui/core";
import { AttachFile, SearchOutlined, MoreVert } from "@material-ui/icons";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import MicIcon from "@material-ui/icons/Mic";
import React from "react";
import "./chat.css";

function chat() {
  return (
    <div className="chat">
      <div className="chat_header">
        <Avatar />
        <div className="chat_headerInfo">
          <h3>Room Name</h3>
          <p>last seen at ...</p>
        </div>
      
      </div>

      <div className="chat_body">
        <p className="chat_message">
          <span className="chat_name">Abhishek</span>
          This is a message
          <span className="chat_timestamp">{new Date().toUTCString()}</span>
        </p>
        <p className="chat_message chat_receiver">
          <span className="chat_name">Abhishek</span>
          This is a message
          <span className="chat_timestamp">{new Date().toUTCString()}</span>
        </p>
      </div>
      <div className="chat_footer">
        <InsertEmoticonIcon />
        <form>
          <input placeholder="type a message" type="text" />
          <button type="submit">send a message</button>
        </form>
        <MicIcon></MicIcon>
      </div>
    </div>
  );
}

export default chat;
