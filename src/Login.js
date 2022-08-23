import { Button } from "@mui/material";
import React from "react";
import "./Login.css";
import { auth, provider } from "./firebase";
import { signInWithPopup } from "firebase/auth";
import db from "./firebase";

function Login() {
  function signIn() {
    signInWithPopup(auth, provider).catch((error) => alert(error.message));
  }

  return (
    <div className="login">
      <h1>DevChat</h1>
      <Button onClick={signIn}>Sign In</Button>
    </div>
  );
}

export default Login;
