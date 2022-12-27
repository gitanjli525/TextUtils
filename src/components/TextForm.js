import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("UpperCase was Clicked : " + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showalert("Converted to Uppercase!", "success");
  };
  const handleDownClick = () => {
    // console.log("UpperCase was Clicked : " + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showalert("Converted to Lowercase!", "success");
  };
  const handleOnChange = (event) => {
    // console.log("On Change");
    setText(event.target.value);
  };

  const handleClear = () => {
    // console.log("Clear text was Clicked : " + text);
    let newText = "";
    setText(newText);
    props.showalert("Cleared text!", "success");
  };

  const handleCopy = () => {
    // console.log("i am copy");
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showalert("Copied to clipboard!", "success");
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showalert("Extra spaces removed!", "success");
  };

  const [text, setText] = useState("");
  // text = "new text"; //wrong way to change state
  // setText("new text");  //correct way to change state
  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "light" ? "white" : "grey",
              color: props.mode === "dark" ? "white" : "black",
            }}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleDownClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleClear}>
          Clear text
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleCopy}>
          Copy text
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>
          Remove extra spaces
        </button>
      </div>
      <div
        className="conatiner my-3"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h2>Your text summary</h2>
        <p>
          {
            text.split(" ").filter((element) => {
              return element.length != 0;
            }).length
          }{" "}
          words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter something in the Textbox above to preview it here"}
        </p>
      </div>
    </>
  );
}
