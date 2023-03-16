import React, { useState, useContext } from "react";
import { loginUser, registerUser } from "../api/users";
import AuthContext from "../context/AuthProvider";
import { useNavigate } from 'react-router-dom';

export function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const auth = useContext(AuthContext);
    const navigate = useNavigate();


    const handleRegister = async () => {
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

    return (
        <>
            <div className="register-wrapper">
                <h1 className="register-title">
                    Register your account
                </h1>
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
                    autoFocus
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
                    autoFocus
                />
                <br></br>
                <button className="register-submit" onClick={handleRegister}>
                    Register
                </button>
                <br></br>
            </div>
        </>
    );
}