import React, { useState, useEffect } from "react";
import { UserInput } from './';
import "./main.css"
import { API_SECRET_KEY, API_SECRET_KEY } from "../../API_KEY";

const Main = () => {

  const API_KEY = API_SECRET_KEY;
  // const authorizationHeader = { header: "Authorization: Bearer " + API_KEY };

  const [prompt, setPrompt] = useState('');
  const [maxTokens, setMaxTokens] = useState(5);
  const [temperature, setTemperature] = useState(.5);
  const [botTalk, setBotTalk] = useState('');

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

  // async function responseToString(res) {
  //   res.then((response) => {
  //     return response.data.choices[0].text
  //   });
  // }

  async function submit() {

    await getCompletion(prompt, maxTokens, temperature).then((res) => {
     setBotTalk(res.data.choices[0].text)
      console.log(botTalk);
    });

  }

  return (
    <div id="main">
      <UserInput  setPrompt={setPrompt}
        setMaxTokens={setMaxTokens}
        setTemperature={setTemperature}
        submit = {submit} />
      
      {botTalk ? <h3 id="bottalk">{botTalk}</h3> : <div id="default">the bot is deep in thought... hm....</div>}
      
    </div >
  );
};

export default Main;
