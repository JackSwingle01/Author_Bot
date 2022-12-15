import React from "react";
import { useEffect, useState } from 'react';
import "./userInput.css"

const UserInput = (props) => {
  const { setPrompt, setMaxWords, setTemperature, submit } = props
  // console.log(prompt)

  return (
    <div id="whole">

      <div id="inputWrapper">
        <h1>Ask Something:</h1>
        <div id="twoinp">
          <p>Options:</p>
          <input onChange={(e) => setMaxWords(e.target.value)} type="text" placeholder="Max Words (aprox.)" />
          <input onChange={(e) => setTemperature(e.target.value)} type="text" placeholder="Creativity (0-2)" />
        </div>
        <textarea id="input" onChange={(e) => setPrompt(e.target.value)} type="text" placeholder="Prompt" />
        <button id="submit" onClick={() => submit()}>Submit</button >
      </div>
    </div>
  );
};


export default UserInput;
