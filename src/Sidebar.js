import React, { useState, useEffect } from "react";
import "./Sidebar.css";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddIcon from "@mui/icons-material/Add";
import Channel from "./Channel";

import Avatar from "@mui/material/Avatar";

import SettingsIcon from "@mui/icons-material/Settings";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";

import db, { auth } from "./firebase";
import { addDoc, collection, onSnapshot } from "firebase/firestore";

function Sidebar() {
  // selector is used access data from redux global state
  const user = useSelector(selectUser);

  const [channels, setChannels] = useState([]);

  useEffect(() => {
    const channeldb = collection(db, "channels");
    // if the channels db ever changes, update the state
    onSnapshot(channeldb, (snapshot) =>
      setChannels(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          channel: doc.data(),
        }))
      )
    );
  }, []);

  console.log(channels);

  function addChannel() {
    const channelName = prompt("Enter new channel name");

    if (channelName) {
      const channeldb = collection(db, "channels");
      addDoc(channeldb, { channelName: channelName });
    }
  }

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
          <AddIcon className="channels-addChannel" onClick={addChannel} />
        </div>
        <div className="channels-list">
          {channels.map((channel) => {
            console.log(channel);
            return (
              <Channel
                key={channel.id}
                id={channel.id}
                channelName={channel.channel.channelName}
              />
            );
          })}
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
