import React, { useState, useEffect } from "react";
import { UserInput } from './';
import "./main.css"
import { API_SECRET_KEY } from "../API_KEY";

const Main = () => {

  const API_KEY = API_SECRET_KEY;
  // const authorizationHeader = { header: "Authorization: Bearer " + API_KEY };

  const [prompt, setPrompt] = useState('');
  const [maxWords, setMaxWords] = useState(5);
  const [temperature, setTemperature] = useState(.5);
  const [botTalk, setBotTalk] = useState('');
  const [gradeLevel, setGradeLevel] = useState("High School");
  const [formalityLevel, setFormalityLevel] = useState("");
  const [type, setType] = useState("expository");
  const [tone, setTone] = useState("neutral");
  const [introductionEnabled, setIntroductionEnabled] = useState(true);
  const [conclusionEnabled, setConclusionEnabled] = useState(true);
  const [examplesEnabled, setExamplesEnabled] = useState(false);
  const [quotesEnabled, setQuotesEnabled] = useState(false);

  let responseText = '';

  async function getCompletion(prompt, maxTok = 5, temp = .5) {

    const { Configuration, OpenAIApi } = require("openai");
    const configuration = new Configuration({
      apiKey: API_KEY,
    });
    const openai = new OpenAIApi(configuration);
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: prompt,
      max_tokens: parseInt(maxTok),
      temperature: parseInt(temp)
    });
    return response;
  }

  async function submit() {
    let maxTokens = maxWords * (4 / 3);
    await getCompletion(await engineerPrompt(), maxTokens, temperature).then((res) => {
      setBotTalk(res.data.choices[0].text)
      // console.log(botTalk);
    });
  }

  async function engineerPrompt() {

    let engineeredPrompt = `Write me a ${type} essay between ${maxWords > 50 ? maxWords - 100 : 50} and ${maxWords} words. It is written by a ${gradeLevel}, It has a ${formalityLevel} and ${tone} tone. It is based on the topic: "${prompt}". ${introductionEnabled? "Include an introduction. ": ""} ${conclusionEnabled? "Include a conclusion.": ""} ${examplesEnabled? "Include examples.": ""} ${quotesEnabled? "Include quotes (and the source)." : ""}\n\n`;
    return engineeredPrompt;
  }

  return (
    <div id="main">
      <UserInput setPrompt={setPrompt}
        setMaxWords={setMaxWords}
        setTemperature={setTemperature}
        setGradeLevel={setGradeLevel}
        setFormalityLevel={setFormalityLevel}
        setType={setType}
        setTone={setTone}
        setIntroductionEnabled={setIntroductionEnabled}
        setConclusionEnabled={setConclusionEnabled}
        setExamplesEnabled={setExamplesEnabled}
        setQuotesEnabled={setQuotesEnabled}
        submit={submit} />
      <div id="bottalk">
        {botTalk ? <p>{botTalk}</p> : <p>The bot is deep in thought... hm....</p>}
      </div>

      <p>DISCLAIMER: We make no guarantees about the factual accuracy of the essays. We recommend fact checking any claims and running the essay through a plagiarism checker before submission.</p>
    </div >
  );
};

export default Main;
