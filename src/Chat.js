import {
  addDoc,
  collection,
  doc,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./Chat.css";
import { selectChannelId, selectChannelName } from "./features/channelSlice";
import { selectUser } from "./features/userSlice";
import db from "./firebase";
import Message from "./Message";

function Chat() {
  const user = useSelector(selectUser);
  const channelName = useSelector(selectChannelName);
  const channelId = useSelector(selectChannelId);

  const [input, setInput] = useState("");

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (channelId) {
      const channel = collection(db, `channels/${channelId}/messages`);

      const q = query(channel, orderBy("timestamp", "asc"));

      onSnapshot(q, (snapshot) => {
        setMessages(snapshot.docs.map((doc) => doc.data()));
      });
    }
  }, [channelId]);

  const sendMessage = (e) => {
    e.preventDefault();

    const channel = collection(db, `channels/${channelId}/messages`);
    addDoc(channel, {
      user: user,
      message: input,
      timestamp: serverTimestamp(),
    });

    setInput("");
  };

  return (
    <div className="chat">
      <div className="chat-header">
        <h3># {channelName}</h3>
      </div>
      <div className="chat-messages">
        {messages &&
          messages.map((message) => {
            return <Message {...message} />;
          })}
      </div>
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
          <button className="input-btn" type="submit" onClick={sendMessage}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Chat;
