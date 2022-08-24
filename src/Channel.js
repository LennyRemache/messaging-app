import React from "react";
import "./Channel.css";

function Channel({ id, channelName }) {
  return (
    <div className="channel">
      <h4>
        <span className="channel-hash"># {channelName}</span>
      </h4>
    </div>
  );
}

export default Channel;
