import React, { useState } from "react";
import { User } from "../api/users"

export function LogIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const LogInnClick = () => {
    setUsername("");
    console.log(username);
    setPassword("");
    console.log(password);
    User(username, password).then(

    ).catch(() => {
      // handle error here
    })
  };

  return (
    <>
      <div class="login-wrapper">
        <h1 class="login-title">Log In</h1>

        <form>
          <input
            class="login-input"
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            placeholder="Username"
          />

          <input
            class="login-input"
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Password"
          />

          <button class="login-submit" onClick={event => LogInnClick()}>Log In</button>
        </form>
      </div>

    </>
  );
}
