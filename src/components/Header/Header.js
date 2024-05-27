import React from "react";
import logo from "../../assets/logo.svg";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo-container">
          <img src={logo} alt="Crypto Logo" className="logo" />
        </div>
        <h1 className="title">Crypto Dashboard</h1>
      </nav>
    </header>
  );
};

export default Header;
