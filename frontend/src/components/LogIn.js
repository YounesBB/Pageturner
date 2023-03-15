// import React, { useState } from "react";
// import { User } from "../api/users"
// import AuthContext from "../context/AuthProvider";


// export function LogIn() {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   const LogInnClick = async (username, password) => {
//     setUsername(username);
//     console.log(username);
//     setPassword(password);
//     console.log(password);
//     User(username, password).then(

//     ).catch(() => {
//       // handle error here
//     })
//   };

//   return (
//     <>
//       <div className="login-wrapper">
//         <h1 className="login-title">Log in or Register</h1>

//         <form>
//           <input
//             className="login-input"
//             type="text"
//             id="username"
//             name="username"
//             value={username}
//             onChange={(event) => setUsername(event.target.value)}
//             placeholder="Username"
//           />
//           <br></br>
//           <input
//             className="login-input"
//             type="password"
//             id="password"
//             name="password"
//             value={password}
//             onChange={(event) => setPassword(event.target.value)}
//             placeholder="Password"
//           />
//           <br></br>
//           <button className="login-submit" onClick={event => LogInnClick(username, password)}>Log in</button>
//           <br></br>
//           <button className="register-submit" onClick={event => LogInnClick(username, password)}>Register</button>
//         </form>
//       </div>

//     </>
//   );
// }


// // import React, { useState } from "react";
// // import { User } from "../api/users";
// // import { RegisterUser } from "../api/users";

// // export function LogIn() {
// //   const [username, setUsername] = useState("");
// //   const [password, setPassword] = useState("");
// //   const [isRegistering, setIsRegistering] = useState(false);

// //   const handleLogin = async () => {
// //     try {
// //       const token = await User(username, password);
// //       // Handle successful login
// //     } catch (error) {
// //       // Handle login error
// //     }
// //   };

// //   const handleRegister = async () => {
// //     try {
// //       const user = await RegisterUser(username, password);
// //       const token = await User(username, password);
// //       // Handle successful registration and login
// //     } catch (error) {
// //       // Handle registration error
// //     }
// //   };

// //   const toggleRegister = (e) => {
// //     e.preventDefault();
// //     setIsRegistering(!isRegistering);
// //   };

// //   const handleFormSubmit = (e) => {
// //     e.preventDefault();
// //     if (isRegistering) {
// //       handleRegister();
// //     } else {
// //       handleLogin();
// //     }
// //   };

// //   const LoginForm = () => {
// //     return (
// //       <>
// //         <input
// //           type="text"
// //           value={username}
// //           onChange={(e) => setUsername(e.target.value)}
// //           placeholder="Username"
// //         />
// //         <input
// //           type="password"
// //           value={password}
// //           onChange={(e) => setPassword(e.target.value)}
// //           placeholder="Password"
// //         />
// //         <button onClick={handleFormSubmit}>Log in</button>
// //         <button onClick={toggleRegister}>Register</button>
// //       </>
// //     );
// //   };

// //   const RegisterForm = () => {
// //     return (
// //       <>
// //         <input
// //           type="text"
// //           value={username}
// //           onChange={(e) => setUsername(e.target.value)}
// //           placeholder="Username"
// //         />
// //         <input
// //           type="password"
// //           value={password}
// //           onChange={(e) => setPassword(e.target.value)}
// //           placeholder="Password"
// //         />
// //         <button onClick={handleFormSubmit}>Register</button>
// //         <button onClick={toggleRegister}>Back to Log in</button>
// //       </>
// //     );
// //   };

// //   return (
// //     <>
// //       <h1>{isRegistering ? "Register" : "Log In"}</h1>
// //       <form onSubmit={handleFormSubmit}>
// //         {isRegistering ? <RegisterForm /> : <LoginForm />}
// //       </form>
// //     </>
// //   );
// // }

// import React, { useState, useContext } from "react";
// import { loginUser, registerUser } from "../api/users";
// import AuthContext from "../context/AuthProvider";

// export function LogIn() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [name, setName] = useState("");
//   const [isRegistering, setIsRegistering] = useState(false);
//   const auth = useContext(AuthContext);

//   const handleLogin = async () => {
//     try {
//       const token = await loginUser(email, password);
//       auth.login(token);
//     } catch (error) {
//       console.error(error);
//       // handle error here
//     }
//   };

//   const handleRegistration = async () => {
//     try {
//       const user = await registerUser(name, email, password);
//       const token = await loginUser(email, password);
//       auth.login(token);
//     } catch (error) {
//       console.error(error);
//       // handle error here
//     }
//   };

//   const toggleRegistration = (e) => {
//     e.preventDefault();
//     setIsRegistering(!isRegistering);
//   };

//   const LoginForm = () => {
//     return (
//       <>
//         <input
//           className="login-input"
//           type="email"
//           id="email"
//           name="email"
//           value={email}
//           onChange={(event) => setEmail(event.target.value)}
//           placeholder="Email"
//           autoFocus
//         />
//         <br></br>
//         <input
//           className="login-input"
//           type="password"
//           id="password"
//           name="password"
//           value={password}
//           onChange={(event) => setPassword(event.target.value)}
//           placeholder="Password"
//         />
//         <br></br>
//         <button className="login-submit" onClick={handleLogin}>
//           Log in
//         </button>
//         <br></br>
//         <button onClick={toggleRegistration}>Register</button>
//       </>
//     );
//   };

//   const RegistrationForm = () => {
//     return (
//       <>
//         <input
//           className="register-input"
//           type="text"
//           id="name"
//           name="name"
//           value={name}
//           onChange={(event) => setName(event.target.value)}
//           placeholder="Name"
//           autoFocus
//         />
//         <br></br>
//         <input
//           className="register-input"
//           type="email"
//           id="email"
//           name="email"
//           value={email}
//           onChange={(event) => setEmail(event.target.value)}
//           placeholder="Email"
//         />
//         <br></br>
//         <input
//           className="register-input"
//           type="password"
//           id="password"
//           name="password"
//           value={password}
//           onChange={(event) => setPassword(event.target.value)}
//           placeholder="Password"
//         />
//         <br></br>
//         <button className="register-submit" onClick={handleRegistration}>
//           Register
//         </button>
//         <br></br>
//         <button onClick={toggleRegistration}>Back to Log in</button>
//       </>
//     );
//   };

//   return (
//     <>
//       <div className="login-wrapper">
//         <h1 className="login-title">
//           {isRegistering ? "Register" : "Log in"}
//         </h1>
//         {isRegistering ? (
//           <RegistrationForm />
//         ) : (
//           <LoginForm />
//         )}
//       </div>
//     </>
//   );
// }


import React, { useState, useContext } from "react";
import { loginUser, registerUser } from "../api/users";
import AuthContext from "../context/AuthProvider";
import { useNavigate } from 'react-router-dom';

export function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const token = await loginUser(email, password);
      auth.login(token);
      navigate('/');
    } catch (error) {
      console.error(error);
      // handle error here
    }
  };

  const handleRegistration = async () => {
    try {
      const user = await registerUser(name, email, password);
      const token = await loginUser(email, password);
      auth.login(token);
      navigate('/');
    } catch (error) {
      console.error(error);
      // handle error here
    }
  };

  const toggleRegistration = (e) => {
    e.preventDefault();
    setIsRegistering(!isRegistering);
  };

  const LoginForm = () => {
    return (
      <>
        <input
          className="login-input"
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Email"
          autoFocus
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
        <button className="login-submit" onClick={handleLogin}>
          Log in
        </button>
        <br></br>
        <button onClick={toggleRegistration}>Register</button>
      </>
    );
  };

  const RegistrationForm = () => {
    return (
      <>
        <input
          className="register-input"
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Name"
          autoFocus
        />
        <br></br>
        <input
          className="register-input"
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Email"
        />
        <br></br>
        <input
          className="register-input"
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="Password"
        />
        <br></br>
        <button className="register-submit" onClick={handleRegistration}>
          Register
        </button>
        <br></br>
        <button onClick={toggleRegistration}>Back to Log in</button>
      </>
    );
  };

  return (
    <>
      <div className="login-wrapper">
        <h1 className="login-title">
          {isRegistering ? "Register" : "Log in"}
        </h1>
        {isRegistering ? (
          <RegistrationForm />
        ) : (
          <LoginForm />
        )}
      </div>
    </>
  );
}
