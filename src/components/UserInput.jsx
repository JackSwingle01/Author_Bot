import React from "react";
import { useEffect, useState } from 'react';
import "./userInput.css"

const UserInput = (props) => {
  const { setPrompt, setMaxTokens, setTemperature, submit } = props
  // console.log(prompt)

  return (
    <div id="whole">
      
    <div id="inputWrapper">
    
      <input id="twoinp" onChange={(e) => setMaxTokens(e.target.value)} type="text" placeholder="Max Tokens" />
      <input id="twoinp"  onChange={(e) => setTemperature(e.target.value)} type="text" placeholder="Temperature (0-2)" />
    <textarea id="input" onChange={(e) => setPrompt(e.target.value)} type="text" placeholder="prompt" />
      <button id="submit" onClick={() => submit()}> Submit</button >
    </div>
    </div>
  );
};


export default UserInput;
