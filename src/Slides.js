import React, { useState } from "react";
import axios from "axios";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default function Slides({ data }) {
  console.log("Data from slides.js", data);
  const getImageFromPrompt = async (prompt) => {
    axios
      .post("http://stablediffusionapi.com/api/v3/text2img", {
        key: "izBBAFO0G84bXNB2Vh7KR0kYPirfEZzYgaBAci5LYRqINDf5IVN1eohPBJSt",
        prompt:
          "Kid eating an apple under the tree, in bright sunny day with a little cloud",
        negative_prompt:
          "((out of frame)), ((extra fingers)), mutated hands, ((poorly drawn hands)), ((poorly drawn face)), (((mutation))), (((deformed))), (((tiling))), ((naked)), ((tile)), ((fleshpile)), ((ugly)), (((abstract))), blurry, ((bad anatomy)), ((bad proportions)), ((extra limbs)), cloned face, (((skinny))), glitchy, ((extra breasts)), ((double torso)), ((extra arms)), ((extra hands)), ((mangled fingers)), ((missing breasts)), (missing lips), ((ugly face)), ((fat)), ((extra legs)), anime",
        width: "512",
        height: "512",
        samples: "1",
        num_inference_steps: "20",
        seed: null,
        guidance_scale: 7.5,
        safety_checker: "yes",
        webhook: null,
        track_id: null,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  React.useEffect(() => {
    console.log("Data from slides.js", data);
    data.prompts_for_images.forEach((prompt) => {
      console.log(prompt);
      images.push(getImageFromPrompt(prompt));
    });
  });
  return (
    <div className="slides">
      <Carousel
        showArrows={true}
        autoPlay={true}
        infiniteLoop={false}
        showThumbs={true}
        emulateTouch={true}
      >
        {data.points.map((item) => {
          return (
            <div>
              <div className="slide layout1">
                <div className="slide-text">{item}</div>
                <div className="slide-image">
                  <img src="https://pub-8b49af329fae499aa563997f5d4068a4.r2.dev/generations/26e83d8b-6c01-4b5b-8cdc-8ab337939830-0.png" />
                </div>
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}
