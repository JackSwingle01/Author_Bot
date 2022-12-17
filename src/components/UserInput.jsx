import React from "react";
import { useEffect, useState } from 'react';
import "./userInput.css"

const UserInput = (props) => {
  const { setPrompt, setMaxWords, setTemperature, setGradeLevel,
    setFormalityLevel, setType, setTone,
    setIntroductionEnabled, setConclusionEnabled, setExamplesEnabled, setQuotesEnabled,
    submit } = props

  return (
    <div id="whole">

      <div id="inputWrapper">
        <h1>Write My Paper:</h1>
        <div id="inputs">
          <p>Options:</p>
          <input onChange={(e) => setMaxWords(e.target.value)} type="text" placeholder="Max Words (aprox.)" />
          <input onChange={(e) => setTemperature(e.target.value)} type="text" placeholder="Creativity (0-2)" />
          <input type="text" onChange={(e) => setTone(e.target.value)} placeholder="Tone" />
          <br />
          <label htmlFor="gradeLevel">Grade Level:</label>
          <select onChange={(e) => setGradeLevel(e.target.value)} id="gradeLevel" placeholder="Grade Level">
            <option value="1st grader">1st grade</option>
            <option value="2nd grader">2nd grade</option>
            <option value="3rd grader">3rd grade</option>
            <option value="4th grader">4th grade</option>
            <option value="5th grader">5th grade</option>
            <option value="6th grader">6th grade</option>
            <option value="7th grader">7th grade</option>
            <option value="8th grader">8th grade</option>
            <option value="9th grader">9th grade</option>
            <option value="10th grader">10th grade</option>
            <option value="11th grader">11th grade</option>
            <option value="12th grader" selected>12th grade</option>
            <option value="college freshman">College Freshman</option>
            <option value="college sophomore">College Sophomore</option>
            <option value="college junior">College Junior</option>
            <option value="college senior">College Senior</option>
            <option value="graduate student">Graduate Student</option>
            <option value="post-grad">Post-Graduate</option>
            <option value="professional">Professional</option>
            <option value="A grandiloquent 18th century german p  hilosopher">Philosopher</option>
          </select>

          <label htmlFor="Formality">Formality Level</label>
          <select onChange={(e) => setFormalityLevel(e.target.value)} id="Formality" placeholder="Formality Level">
            <option value="very formal">Very Formal</option>
            <option value="formal">Formal</option>
            <option value="" selected>Neutral</option>
            <option value="informal">Informal</option>
            <option value="very informal">Very Informal</option>
          </select>

          <label htmlFor="type">Type</label>
          <select onChange={(e) => setType(e.target.value)} id="type">
            <option value="narrative">Narrative</option>
            <option value="descriptive">Descriptive</option>
            <option value="expository" selected>Expository</option>
            <option value="persuasive">Persuasive</option>
            <option value="compare and contrast">Compare and Contrast</option>
            <option value="cause and effect">Cause and Effect</option>
            <option value="definition">Definition</option>
          </select>
        </div>

        
        <div class="inputs" >

          <p>Content:</p>
          <div id="optional-checkboxes">
            <br />
            <label>
              <input
                type="checkbox"
                name="introduction"
                defaultChecked={true}
                onChange={(e) => setIntroductionEnabled(e.target.value)}
              />
              Introduction
            </label>
            <br />
            <label>
              <input
                type="checkbox"
                name="conclusion"
                defaultChecked={true}
                onChange={(e) => setConclusionEnabled(e.target.value)}
              />
              Conclusion
            </label>
            <br />
            <label>
              <input
                type="checkbox"
                name="examples"
                onChange={(e) => setExamplesEnabled(e.target.value)}
              />
              Examples
            </label>
            <label>
              <input
                type="checkbox"
                name="quotes"
                onChange={(e) => setQuotesEnabled(e.target.value)}
              />
              Quotes
            </label>
          </div>
          
        </div>
        <textarea id="topic-input" onChange={(e) => setPrompt(e.target.value)} type="text" placeholder="Topic" />

        <button id="submit" onClick={() => submit()}>Submit</button >


      </div>
    </div >


  );
};


export default UserInput;
