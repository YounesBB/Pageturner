import React, { useState } from "react";
import { User } from "../api/users"
import AuthContext from "../context/AuthProvider";

//import axios from "./api/login";
const LOGIN_URL = "/auth";

export function LogIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const LogInnClick = async (username, password) => {
    setUsername(username);
    console.log(username);
    setPassword(password);
    console.log(password);
    User(username, password).then(

    ).catch(() => {
      // handle error here
    })
  };

  return (
    <>
      <div className="login-wrapper">
        <h1 className="login-title">Log in or Register</h1>

        <form>
          <input
            className="login-input"
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            placeholder="Username"
          />
          <br></br>
          <input
            className="login-input"
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Password"
          />
          <br></br>
          <button className="login-submit" onClick={event => LogInnClick(username, password)}>Log in</button>
          <br></br>
          <button className="register-submit" onClick={event => LogInnClick(username, password)}>Register</button>
        </form>
      </div>

    </>
  );
}
