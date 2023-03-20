import React, { useState } from "react";
import jsondata from "./data.json";
import axios from "axios";
import Slides from "./Slides";

export default function Home() {
  const [prompt, setPrompt] = useState("");
  const [showSlides, setShowSlides] = useState(false);
  const [data, setData] = useState([]);

  const handleLearnClick = () => {
    const token = "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";
    const newprompt = `
    `;
    // axios
    //   .post(
    //     "https://api.openai.com/v1/completions",

    //     {
    //       model: "text-davinci-003",
    //       prompt: prompt,
    //       temperature: 0.7,
    //       max_tokens: 256,
    //       top_p: 1,
    //       frequency_penalty: 0,
    //       presence_penalty: 0,
    //     },
    //     {
    //       headers: {
    //         "Content-Type": "application/json",
    //         Authorization: "Bearer " + token,
    //       },
    //     }
    //   )
    //   .then((res) => {
    //     // console.log(res.data);
    //     const output = res.data.choices[0].text;
    //     console.log(output);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    setData(jsondata);

    setShowSlides(true);
  };

  return (
    <div>
      <div className="navbar">
        <div className="logo">JSR</div>
        <div className="nav-links">
          <button class="button">Home</button>
        </div>
      </div>

      <div className="hero">
        <div className="hero-text">
          <h1>
            Understand <span className="yellowspan">Any Topic</span> <br /> in
            just <span className="pinkspan">One</span> Click
          </h1>
        </div>
        {/* Input with button */}
        <div className="input-holder">
          <input
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Search for a topic"
          />
          <button className="search-button" onClick={handleLearnClick}>
            Learn
          </button>
        </div>
      </div>

      {/* Slides */}
      {showSlides && <Slides data={data} />}
    </div>
  );
}
