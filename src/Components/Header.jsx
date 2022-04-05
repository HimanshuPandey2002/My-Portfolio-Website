import React from "react";
import logo from "../Assets/logo.svg";
import logodark from "../Assets/logo-dark.svg";
import sun from "../Assets/sun.png";
import moon from "../Assets/moon.png";
import "./css/Header.css";

function Header({ theme, changeTheme }) {
  const isLight = theme.name === "light";

  return (
    <header>
      <div className="app-container header">
        <img src={isLight ? logodark : logo} alt="" className="logo-icon" />
        <nav>
          <a
            href="/"
            className="header-link"
            style={{ color: `${theme.text}` }}
          >
            Home
          </a>
          <a
            href="/"
            className="header-link"
            style={{ color: `${theme.text}` }}
          >
            About
          </a>
          <a
            href="/"
            className="header-link"
            style={{ color: `${theme.text}` }}
          >
            Skills
          </a>
          <a
            href="/"
            className="header-link"
            style={{ color: `${theme.text}` }}
          >
            Projects
          </a>
          <a
            href="/"
            className="header-link"
            style={{ color: `${theme.text}` }}
          >
            Connect
          </a>
          <button className="theme-switcher">
            <img src={isLight ? moon : sun} alt="" onClick={changeTheme} />
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
