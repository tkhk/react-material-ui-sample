import React from "react";
import ReactDOM from "react-dom";

import { Topbar } from "./topbar";
import { Sidebar } from "./sidebar";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <Topbar />
      <Sidebar />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
