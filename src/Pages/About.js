import React from "react";
import "../App.css";
import image from "./logo.svg";

export default function About() {
  return (
    <div className="BigDiv">
      {/* <h1>Hi</h1> */}
      <div className="HeserDiv">
        <header className="App-header">
          <img src={image} className="App-logo" alt="logo" />
        </header>
      </div>
      <br />
      <h1 className="Title">About Us </h1>
      <br />
      <div className="ParaDiv">
        <div className="AboutDiv">
          <p className="AboutPara">
            Our products <br /> At Meta, we are constantly iterating, solving
            problems and working together to connect people all over the world.
            That’s why it’s important that our workforce reflects the diversity
            of the people we serve. Hiring people with different backgrounds and
            points of view helps us make better decisions, build better products
            and create better experiences for everyone.
          </p>
        </div>
        <div className="AboutDiv2">
          <p className="AboutPara">
            Community <br />
            At Meta, we are constantly iterating, solving problems and working
            together to connect people all over the world. That’s why it’s
            important that our workforce reflects the diversity of the people we
            serve. Hiring people with different backgrounds and points of view
            helps us make better decisions, build better products and create
            better experiences for everyone.
          </p>
        </div>
      </div>
    </div>
  );
}
