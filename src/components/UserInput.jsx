import React from "react";
import { useEffect, useState } from 'react';
import "./userInput.css"

const UserInput = (props) => {
  const { setPrompt, setMaxTokens, setTemperature, submit } = props
  // console.log(prompt)

  return (
    <div id="whole">

      <div id="inputWrapper">
        <h1>Ask Something:</h1>
        <div id="twoinp">
          <p>Options:</p>
          <input onChange={(e) => setMaxTokens(e.target.value)} type="text" placeholder="Max Tokens" />
          <input onChange={(e) => setTemperature(e.target.value)} type="text" placeholder="Temperature (0-2)" />
        </div>
        <textarea id="input" onChange={(e) => setPrompt(e.target.value)} type="text" placeholder="Prompt" />
        <button id="submit" onClick={() => submit()}>Submit</button >
      </div>
    </div>
  );
};


export default UserInput;
