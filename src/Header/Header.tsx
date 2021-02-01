import React from "react";
import "./Header.css";
const Header: React.FC = () => {
  return (
    <div className="header">
      <span className="logo">conduit</span>
      <div className="home-btn">
        <span>Home</span>
        <span>Sign in</span>
        <span>Sign up</span>
      </div>
    </div>
  );
};

export default Header;
