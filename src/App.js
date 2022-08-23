import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import "./App.css";
import Chat from "./Chat";
import Sidebar from "./Sidebar";
import Login from "./Login";
import { auth } from "./firebase";

function App() {
  // dispatch hook to send data to the data layer in redux
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // user is logged in
      } else {
        // user is logged out
      }
    });
  }, []);
  return (
    <div className="app">
      {user ? (
        <>
          <Sidebar />
          <Chat />
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
