import React, { useState } from "react"
import { Link } from "react-router-dom"
import logo from "../logo.jpeg"

export const NavBar = ({ children }) => {
    return (
        <nav id="navbar">
            <ul>
                <li id="home">
                    <Link to="/">
                        <img src={logo} alt="Logo" id="logo"/>
                    </Link>
                </li>
                <li id="Search">
                    <Link to="/SearchResults">Search</Link>
                </li>
                <li id="newBook">
                    <Link to="/newbook">New Book</Link>
                </li>
            </ul>
        </nav>
    )
}
