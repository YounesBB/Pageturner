import { webDarkTheme, webLightTheme } from "@fluentui/react-components";
import { Link, useNavigate  } from "react-router-dom"
import logo from "../Logo1Light.png"
import logoDark from "../Logo1.png"
import { Search } from "./Search";
import React from "react";
import { Toggle } from '@fluentui/react';
const NavItem = ({link, label}) => {
  return (
    <div  id="navitem">
      <Link to={link}> {label} </Link>
    </div>
  )
}

export const NavBar = ({ handleToggleTheme, isDarkMode }) => {
  const history = useNavigate();
  
  return (
    <>
      <nav id={isDarkMode ? "navbarBlack" : "navbar"}>
        <ul>
          <li id="home">
            <Link to="/">
              <img src={isDarkMode ? logoDark : logo} alt="Logo" id="logo" />
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
          <li id="toggle">
            <Toggle
              onChange={handleToggleTheme}
              checked={isDarkMode}
              onText="Dark"
              offText="Light"
              style={{ backgroundColor: isDarkMode ? '#225332' : 'white', color: isDarkMode ? '#fff' : '#333' }}
            />
          </li>
        </ul>
      </nav>
    </>
  );
};
