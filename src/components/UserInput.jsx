import React from "react";
import { useEffect, useState } from 'react';
import "./userInput.css"

const UserInput = (props) => {
  const { setPrompt, setMaxWords, setTemperature, setGradeLevel, setFormalityLevel, submit } = props
  // console.log(prompt)

  return (
    <div id="whole">

      <div id="inputWrapper">
        <h1>Write My Essay:</h1>
        <div id="inputs">
          <p>Options:</p>
          <input onChange={(e) => setMaxWords(e.target.value)} type="text" placeholder="Max Words (aprox.)" />
          <input onChange={(e) => setTemperature(e.target.value)} type="text" placeholder="Creativity (0-2)" />
          {/* <label htmlFor="gradeLevel"></label> */}
          <select onChange={(e) => setGradeLevel(e.target.value)} id="gradeLevel" placeholder="Grade Level">
            <option value="1st grade">1st grade</option>
            <option value="2nd grade">2nd grade</option>
            <option value="3rd grade">3rd grade</option>
            <option value="4th grade">4th grade</option>
            <option value="5th grade">5th grade</option>
            <option value="6th grade">6th grade</option>
            <option value="7th grade">7th grade</option>
            <option value="8th grade">8th grade</option>
            <option value="9th grade">9th grade</option>
            <option value="10th grade">10th grade</option>
            <option value="11th grade">11th grade</option>
            <option value="12th grade" selected>12th grade</option>
            <option value="College Freshman">College Freshman</option>
            <option value="College Sophomore">College Sophomore</option>
            <option value="College Junior">College Junior</option>
            <option value="College Senior">College Senior</option>
            <option value="Graduate Student">Graduate Student</option>
            <option value="Post-Graduate">Post-Graduate</option>
            <option value="professional">Professional</option>
            <option value="A grandiloquent 18th century German Philosopher">Philosopher</option>
          </select>
          <select onChange={(e) => setFormalityLevel(e.target.value)} id="Formality" placeholder="Formality Level">
            <option value="very formal">Very Formal</option>
            <option value="formal">Formal</option>
            <option value="" selected>Neutral</option>
            <option value="informal">Informal</option>
            <option value="very informal">Very Informal</option>
          </select>
        </div>


        <textarea id="input" onChange={(e) => setPrompt(e.target.value)} type="text" placeholder="Topic" />
        <button id="submit" onClick={() => submit()}>Submit</button >
      </div>
    </div >
  );
};


export default UserInput;
