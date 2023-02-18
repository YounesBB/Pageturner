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
                    <NavItem link="/SearchResults" label="Search"/>
                </li>
                <li id="newBook">
                    <NavItem link="/newbook" label="New Book"/>
                </li>
            </ul>
        </nav>
    )
}