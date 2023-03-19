import React from "react";

export default function Home() {
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
          <input type="text" placeholder="Search for a topic" />
          <button className="search-button">Learn</button>
        </div>
      </div>
    </div>
  );
}
