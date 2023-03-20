import React, { useState } from "react";
import axios from "axios";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default function Slides({ data }) {
  console.log("Data from slides.js", data);
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

  // React.useEffect(() => {
  // console.log("Data from slides.js", data);
  // data.prompts_for_images.forEach((prompt) => {
  //   console.log(prompt);
  //   images.push(getImageFromPrompt(prompt));
  // });
  // });
  return "Hello";
}
