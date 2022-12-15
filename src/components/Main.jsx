import React, { useState, useEffect } from "react";
import { Navbar } from './';


const Main = () => {

  const API_SECRET_KEY = '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';
  const authorizationHeader = { header: "Authorization: Bearer " + API_SECRET_KEY };

  const [prompt, setPrompt] = useState('');
  const [maxTokens, setMaxTokens] = useState(5);
  const [temperature, setTemperature] = useState(.5);
  const [botTalk, setBotTalk] = useState('');

  let responseText = '';

  async function getCompletion(prompt, maxTok = 5, temp = .5) {

    const { Configuration, OpenAIApi } = require("openai");
    const configuration = new Configuration({
      apiKey: API_SECRET_KEY,
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
      <Navbar  setPrompt={setPrompt}
        setMaxTokens={setMaxTokens}
        setTemperature={setTemperature} />
      <button onClick={() => submit()}> Submit</button >
      <h3>{botTalk}</h3>
    </div >
  );
};

export default Main;
