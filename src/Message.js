import React from "react";
import "./Message.css";
import Avatar from "@mui/material/Avatar";

function Message({ user, message, timestamp }) {
  return (
    <div className="message">
      <Avatar src={user.photoURL} />
      <div className="message-info">
        <div className="info">
          <h4>{user.displayName}</h4>
          <p className="message-timestamp">
            {timestamp?.toDate().toUTCString()}
          </p>
        </div>
        <p className="message-text">{message}</p>
      </div>
    </div>
  );
}

export default Message;
