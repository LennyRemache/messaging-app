import React from "react";
import "./Sidebar.css";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddIcon from "@mui/icons-material/Add";
import Channel from "./Channel";

import Avatar from "@mui/material/Avatar";
import MicIcon from "@mui/icons-material/Mic";
import HeadsetIcon from "@mui/icons-material/Headset";
import SettingsIcon from "@mui/icons-material/Settings";

function Sidebar() {
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
        <Avatar />
        <div className="profile-info">
          <h3>Lenny1x</h3>
          <p>#1160</p>
        </div>
        <div className="profile-icons">
          <MicIcon />
          <HeadsetIcon />
          <SettingsIcon />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
