import React, { useState } from "react";
import data from "./data.json";
import axios from "axios";

export default function Home() {
  const [prompt, setPrompt] = useState("");
  const [showSlides, setShowSlides] = useState(true);

  const handleLearnClick = () => {
    const token = "idhr par token daalna hai";
    axios
      .post(
        "https://api.openai.com/v1/completions",

        {
          model: "text-davinci-003",
          prompt: prompt,
          temperature: 0.7,
          max_tokens: 256,
          top_p: 1,
          frequency_penalty: 0,
          presence_penalty: 0,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
        }
      )
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

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
