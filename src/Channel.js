import React from "react";
import { useDispatch } from "react-redux";
import "./Channel.css";
import { setChannelInfo } from "./features/channelSlice";

function Channel({ id, channelName }) {
  const dispatch = useDispatch();

  return (
    <div
      className="channel"
      onClick={() =>
        dispatch(
          setChannelInfo({
            channelId: id,
            channelName: channelName,
          })
        )
      }
    >
      <h4>
        <span className="channel-hash"># {channelName}</span>
      </h4>
    </div>
  );
}

export default Channel;
