import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./Chat.css";
import { selectChannelId, selectChannelName } from "./features/channelSlice";
import Message from "./Message";

function Chat() {
  const channelName = useSelector(selectChannelName);
  const channelId = useSelector(selectChannelId);

  const [input, setInput] = useState("");

  const [messages, setMessages] = useState([]);

  function addMessages() {
    setMessages((prevMessages) => {
      return [...prevMessages, input];
    });
  }

  return (
    <div className="chat">
      <div className="chat-header">
        <h3># {channelName}</h3>
      </div>
      <div className="chat-messages">{/*messages*/}</div>
      <div className="chat-input">
        <form>
          <input
            id="input-txt"
            type="text"
            placeholder="Message #Channel Name"
            autoComplete="off"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            disabled={!channelId}
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
