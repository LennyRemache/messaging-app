import React from "react";
import "./Chat.css";
import Message from "./Message";

function Chat() {
  return (
    <div className="chat">
      <div className="chat-header">
        <h3># Channel Name</h3>
      </div>
      <div className="chat-messages">
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
      </div>
      <div className="chat-input">input</div>
    </div>
  );
}

export default Chat;
