import "./App.css";
// import About from "./components/About";
// import Eabout from "./components/Eabout";
import Navbar from "./components/Navbar";
// import Enavbar from "./components/Navbar";
import Alert from "./components/Alert";
import TextForm from "./components/TextForm";
import React from "react";
import { useState } from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); //whether dark mode is enabled or not
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#063a6e";
      showAlert("Dark mode has been enabled", "success");
      // setInterval(() => {
      //   document.title = "Textutils is amazing app";
      // }, 2000);
      // setInterval(() => {
      //   document.title = "Install textutils now";
      // }, 1500);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };
  const [alert, setalert] = useState(null);

  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 1500);
  };
  return (
    <>
      {/* <BrowserRouter> */}
      {/* <Navbar /> */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      {/* <Enavbar title="TextUtils" mode={mode} toggleMode={toggleMode} /> */}
      <div className="container my-3">
        {/* <Routes> */}
        {/* /users --> component 1
            /users/home --> component 2 */}
        {/* <Route exact path="/about" element={<About />}></Route> */}

        {/* <Route */}
        {/* exact */}
        {/* path="/" */}
        {/* element={ */}
        <TextForm
          showalert={showAlert}
          heading="Enter the text to analyse below"
          mode={mode}
        />
        {/* } */}
        {/* ></Route> */}
        {/* </Routes> */}
      </div>
      {/* </BrowserRouter> */}
    </>
  );
}

export default App;

//jsx
//htmlFor
//tabIndex
