import React, { useState } from "react"
import { Link } from "react-router-dom"
import logo from "../logo.jpeg"

const NavItem = ({link, label}) => {
    return (
        <div  id="navitem">
            <Link to={link}> {label} </Link>
        </div>
    )
}

// logic for navigation bar
// app Logo, Search, and My Books should be displayed
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
                    <NavItem link="/search" label="Search"/>
                </li>
                <li id="myBooks">
                    <NavItem link="/mybooks" label="My Books"/>
                </li>
            </ul>
        </nav>
    )
}