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
      <div className="chat-input">
        <form>
          <input
            id="input-txt"
            type="text"
            placeholder="Message #Channel Name"
            autoComplete="off"
          />
          <button className="input-btn" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Chat;
