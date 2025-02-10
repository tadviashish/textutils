import { useState } from "react";
import React from "react";
import "./compo.css";

export default function Textform(props) {
    //UPPER CLICK 
    const upclick = () => {
        let newText = text.toUpperCase();
        setText(newText)
    }
    //LOWER CLICK 
    const lowerclick = () => {
        let newText = text.toLowerCase();
        setText(newText)
    }
    //Copy Text 
    const copyText = () => {
        let copyText = document.getElementById("textBox");
        copyText.select();
        navigator.clipboard.writeText(copyText.value);
    }

    const removeSpace = () => {

    }
    const handleChange = (event) => {
        setText(event.target.value)
    }

    const [text, setText] = useState("")
    return (
        <div className="container form-floating ">
            <h1>{props.heading}</h1>
            <textarea onChange={handleChange} value={text} className="form-control w-50  d-flex align-items-center" rows={10} cols={20} id="textBox">
            </textarea>
            <div>
                <button onClick={upclick} className="btn btn-primary my-2 my-4">Upper case</button>
                <button onClick={lowerclick} className="btn btn-primary mx-2">Lower case</button>
                <button onClick={copyText} className="btn btn-primary mx-2">Copy Text</button>
                <button onClick={removeSpace} className="btn btn-primary mx-2">Remove Extra Space Text</button>
            </div>
            <div className="answer my-3">
                <h2>Text Preview</h2>
                <p>{text.split(" ").length} words and {text.length} Characters</p>
                <h2>Time to read</h2>
                <p>{text.split(" ").length * 0.025} Min</p>
                <h2>Summary</h2>
                <p>{text}</p>
            </div>
        </div>
    );
}
