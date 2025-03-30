import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
      <blockquote className="blockquote mb-0">
        <p style={{ textAlign: "justify" }}>
          Hi Everyone, I am <span className="purple">Zhaoxi Li </span>
          from <span className="purple">Shanghai, China.</span>
          <br />
          I’m currently pursuing an MSc in Data Science at the University of Glasgow.
          <br />
          I completed my Bachelor's degree in Data Science and Big Data Technology at the University of Shanghai for Science and Technology.
          <br />
          <br />
          Besides coding and data, here are a few things I enjoy doing in my free time!
        </p>
        <ul>
          <li className="about-activity">
            <ImPointRight /> Exploring new tech and open-source projects
          </li>
          <li className="about-activity">
            <ImPointRight /> Playing table tennis and badminton
          </li>
          <li className="about-activity">
            <ImPointRight /> Jogging in the nature park
          </li>
        </ul>

        <p style={{ color: "rgb(155 126 172)" }}>
          "Stay curious, keep building, and make things that matter!"
        </p>
        <footer className="blockquote-footer">Zhaoxi</footer>
      </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
