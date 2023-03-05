import React, { useState } from "react"
import { Link, useLocation, useHistory, useNavigate  } from "react-router-dom"
import logo from "../logo2.png"
import { Search } from "./Search";
import { AddBook } from "../components/AddBook";


const NavItem = ({link, label}) => {
    return (
        <div  id="navitem">
            <Link to={link}> {label} </Link>
        </div>
    )
}

export const NavBar = () => {
    const history = useNavigate();
  
    return (
      <nav id="navbar">
        <ul>
          <li id="home">
            <Link to="/">
              <img src={logo} alt="Logo" id="logo" />
            </Link>
          </li>
          <div id="searchbox">
            <li>
                <Search
                onSearchChange={(query) => console.log("searching for", query)}
                history={history}
                />
            </li>
          </div>
          <li id="myBooks">
            <NavItem link="/mybooks" label="My Books" />
          </li>
        </ul>
      </nav>
    );
  };