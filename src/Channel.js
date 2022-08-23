import React from "react";
import "./Channel.css";

function Channel({ id, channel }) {
  return (
    <div className="channel">
      <h4>
        <span className="channel-hash">#</span>
        ChannelName
      </h4>
    </div>
  );
}

export default Channel;