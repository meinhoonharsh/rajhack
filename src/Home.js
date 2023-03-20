import React, { useState } from "react";
import data from "./data.json";
// Import openai

export default function Home() {
  const [prompt, setPrompt] = useState("");
  const [showSlides, setShowSlides] = useState(true);

  const handleLearnClick = () => {
    // when button clicks, call the API of OpenAI
    // and get the response
    // const openai = new OpenAI(
    //   "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"
    // );
    // openai
    //   .complete({
    //     engine: "davinci",
    //     prompt: "Jai Shri Ram in Hindi",
    //     maxTokens: 5,
    //     temperature: 0.9,
    //     topP: 1,
    //     presencePenalty: 0,
    //     frequencyPenalty: 0,
    //     bestOf: 1,
    //     n: 1,
    //     stream: false,
    //     stop: ["\n", " Human:", " AI:"],
    //   })
    //   .then((response) => {
    //     console.log(response.data);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });

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
      {showSlides && (
        <div className="slides">
          <div className="slide layout1">
            <div className="slide-text">
              Image of a computer chip with binary code on the screen to show
              how computers use binary
            </div>
            <div className="slide-image">
              <img src="https://pub-8b49af329fae499aa563997f5d4068a4.r2.dev/generations/26e83d8b-6c01-4b5b-8cdc-8ab337939830-0.png" />
            </div>
          </div>
          <div className="slide layout1">
            <div className="slide-text">
              Image of a computer chip with binary code on the screen to show
              how computers use binary
            </div>
            <div className="slide-image">
              <img src="https://pub-8b49af329fae499aa563997f5d4068a4.r2.dev/generations/26e83d8b-6c01-4b5b-8cdc-8ab337939830-0.png" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
