import React from "react";
import "./Message.css";
import Avatar from "@mui/material/Avatar";

function Message() {
  return (
    <div className="message">
      <Avatar />
      <div className="message-info">
        <div className="info">
          <h4>Lenny1x</h4>
          <p className="message-date">08/22/2022</p>
          <p className="message-time">10:49pm</p>
        </div>
        <p className="message-text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, cum
          assumenda ipsam eveni
        </p>
      </div>
    </div>
  );
}

export default Message;
