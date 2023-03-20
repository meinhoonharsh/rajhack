import React, { useState } from "react";
import jsondata from "./data.json";
import image from "./jeetpakki.png";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import axios from "axios";
import Slides from "./Slides";

export default function Home() {
  const [prompt, setPrompt] = useState("");
  const [showSlides, setShowSlides] = useState(false);
  const [data, setData] = useState(jsondata);

  const handleLearnClick = () => {
    const token = "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";
    const newprompt = `Suppose you are a School Teacher, Explain ${prompt} to your Student
    Explain it with the help of 5 points, Each should not be more than 25-30 words

    Write Image generation prompts for each point, image should not contain any text

    return your answer in the form
    {
      "points":[
         "point one",
         "point two",
         "point three"
    ],
      "prompts_for_images":[
         "prompt for point one",
         "prompt for point two",
         "prompt for point three"
    ]
    }
    `;
    axios
      .post(
        "https://api.openai.com/v1/completions",

        {
          model: "text-davinci-003",
          prompt: newprompt,
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
        const output = res.data.choices[0].text;

        // trim before first { and after last }
        const start = output.indexOf("{");
        const end = output.lastIndexOf("}");
        const trimmed = output.substring(start, end + 1);
        console.log(trimmed);

        const parsed = JSON.parse(trimmed);
        setData(parsed);
        setShowSlides(true);
      })
      .catch((err) => {
        console.log(err);
      });

    // setData(jsondata);
  };

  return (
    <div>
      <div className="navbar">
        <div className="logo">Gyan Wallah</div>
        <div className="nav-links">
          <a
            href="https://github.com/meinhoonharsh/rajhack/"
            target="_blank"
            class="button"
          >
            Github
          </a>
        </div>
      </div>

      <div className="hero">
        <div className="hero-left">
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
              Get Gyan!
            </button>
          </div>
        </div>
        <div className="hero-right">
          <img src={image} />
        </div>
      </div>

      {/* Slides */}
      {showSlides && <Slides data={data} />}
    </div>
  );
}
