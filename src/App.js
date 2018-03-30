import React, { Component } from "react";
import "./App.css";

import Header from "./components/Header";
import TodayPanel from "./components/TodayPanel";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="page-container">
          <div className="side-bar">
            <TodayPanel />
          </div>
          <div className="main-content" />
        </div>
      </div>
    );
  }
}

export default App;
