import "./App.css";
// import About from "./components/About";
// import Eabout from "./components/Eabout";
import Navbar from "./components/Navbar";
// import Enavbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React from "react";
import { useState } from "react";

function App() {
  const [mode, setMode] = useState("light"); //whether dark mode is enabled or not
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#063a6e";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };
  return (
    <>
      {/* <Navbar /> */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      {/* <Enavbar title="TextUtils" mode={mode} toggleMode={toggleMode} /> */}
      <div className="container my-3">
        {/* <About /> */}
        {/* <Eabout mode={mode} /> */}
        <TextForm heading="Enter the text to analyse below" mode={mode} />
      </div>
    </>
  );
}

export default App;

//jsx
//htmlFor
//tabIndex
