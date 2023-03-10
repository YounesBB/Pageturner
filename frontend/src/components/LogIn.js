import React, { useState } from "react";
import { User } from "../api/users"

export function LogIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const LogInnClick = (username, password) => {
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
      <div class="login-wrapper">
  <h1 class="login-title">Log in or Register</h1>

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
    <br></br>
    <input
      class="login-input"
      type="password"
      id="password"
      name="password"
      value={password}
      onChange={(event) => setPassword(event.target.value)}
      placeholder="Password"
    />
     <br></br>
    <button class="login-submit" onClick={event => LogInnClick(username, password)}>Log in</button>
    <br></br>
    <button class="register-submit" onClick={event => LogInnClick(username, password)}>Register</button>
  </form>
</div>

    </>
  );
}
