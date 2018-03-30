import React from "react";
import "./Header.css";

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="header-left">
          <h1 className="page-title">NHL Dashboard</h1>
        </div>
        <div className="header-right">
          <span className="team-select">Select your favourite team</span>
        </div>
      </div>
    );
  }
}

export default Header;
