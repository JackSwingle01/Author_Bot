import React from "react";
import { useEffect, useState } from 'react';

const Navbar = (props) => {
  const { setPrompt, setMaxTokens, setTemperature } = props
  // console.log(prompt)

  return (
    <div id="navbar">

      <input onChange={(e) => setPrompt(e.target.value)} type="text" placeholder="prompt here" />
      <input onChange={(e) => setMaxTokens(e.target.value)} type="text" placeholder="Max Tokens" />
      <input onChange={(e) => setTemperature(e.target.value)} type="text" placeholder="Temperature (0-1)" />
    </div>
  );
};


export default Navbar;
