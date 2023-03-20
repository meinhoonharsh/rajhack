import React, { useState } from "react";
import axios from "axios";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default function Slides({ data }) {
  var images = [];

  const getImageFromPrompt = async (prompt) => {
    axios
      .post("http://stablediffusionapi.com/api/v3/text2img")
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    // axios
    //   .get("https://manage.connectup.in/api/posts", {
    //     page: 3,
    //   })
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };

  React.useEffect(() => {
    // console.log("Data from slides.js", data);
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
        <div>
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
        <div>
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
      </Carousel>
    </div>
  );
}
