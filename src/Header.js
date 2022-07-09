import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <h1 className="logo-title">
          H<span style={{ color: "rgb(12, 177, 12)" }}>B</span>
        </h1>
      </div>
      <h1 className="title">Slideshow App</h1>
    </div>
  );
};

export default Header;
