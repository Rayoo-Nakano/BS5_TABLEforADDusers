import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Delivery } from "./components/Delivery";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">納品先</h1>
      </header>
      <Delivery></Delivery>
    </div>
  );
}

export default App;
