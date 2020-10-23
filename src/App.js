import React from "react";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import Body from "./components/Body/Body";

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Body />
    </div>
  );
}

export default App;
