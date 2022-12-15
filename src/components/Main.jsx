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
  const [gradeLevel, setGradeLevel] = useState("12th grade");

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

    let engineeredPrompt = `The following is an essay between ${maxWords > 50 ? maxWords - 100 : 50} and ${maxWords} words.
    It is written at a ${gradeLevel} writing level. 
        It is based on the prompt: ${prompt}: \n\n`;
    return engineeredPrompt;
  }

  return (
    <div id="main">
      <UserInput setPrompt={setPrompt}
        setMaxWords={setMaxWords}
        setTemperature={setTemperature}
        setGradeLevel={setGradeLevel}
        submit={submit} />
      {botTalk ? <h3 id="bottalk">{botTalk}</h3> : <div id="default">The bot is deep in thought... hm....</div>}
    </div >
  );
};

export default Main;
