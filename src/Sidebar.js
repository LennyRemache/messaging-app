import React from "react";
import "./Sidebar.css";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddIcon from "@mui/icons-material/Add";
import Channel from "./Channel";

import Avatar from "@mui/material/Avatar";

import SettingsIcon from "@mui/icons-material/Settings";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";

import { auth } from "./firebase";

function Sidebar() {
  // access data from redux global state
  const user = useSelector(selectUser);

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h3>DevChat</h3>
      </div>
      <div className="sidebar-channels">
        <div className="channels-header">
          <div className="header">
            <ExpandMoreIcon />
            <h4>Text Channels</h4>
          </div>
          <AddIcon className="channels-addChannel" />
        </div>
        <div className="channels-list">
          <Channel />
          <Channel />
          <Channel />
        </div>
      </div>
      <div className="sidebar-profile">
        <Avatar onClick={() => auth.signOut()} src={user.photo} />
        <div className="profile-info">
          <h4>{user.displayName}</h4>
          <p>#{user.uid.substr(0, 4)}</p>
        </div>
        <div className="profile-icons">
          <SettingsIcon />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
