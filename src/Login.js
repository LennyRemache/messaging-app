import { Button } from "@mui/material";
import React from "react";
import "./Login.css";
import { auth, provider } from "./firebase";
import { signInWithPopup } from "firebase/auth";

function Login() {
  function signIn() {
    signInWithPopup(auth, provider).catch((error) => alert(error.message));
  }

  function guestSignIn() {}

  return (
    <div className="login">
      <h1>DevChat</h1>
      <Button onClick={signIn}>Sign In</Button>
      <Button onClick={guestSignIn}>Guest</Button>
    </div>
  );
}

export default Login;
