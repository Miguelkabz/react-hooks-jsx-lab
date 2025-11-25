import React from "react";
import { image } from "../data/data";

function About({ image = "https://i.imgur.com/mV8PQxj.gif" }) {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <img src={image} alt="I made this" />
    </div>
  );
}

export default About;