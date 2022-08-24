import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import "./App.css";
import Chat from "./Chat";
import Sidebar from "./Sidebar";
import Login from "./Login";
import { auth } from "./firebase";
import { login, logout } from "./features/userSlice";

function App() {
  // dispatch hook to send data to the data layer in redux
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log(authUser);
      if (authUser) {
        // user is logged in
        dispatch(
          login({
            uid: authUser.providerData[0].uid,
            displayName: authUser.providerData[0].displayName,
            photo: authUser.providerData[0].photoURL,
            email: authUser.providerData[0].email,
          })
        );
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
