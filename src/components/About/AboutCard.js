import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am{" "}
            <span className="purple">Hashim Aziz Muhammad </span>
            from <span className="purple"> Johannesburg, South Africa.</span>
            <br />I am currently a Software Engineering Student at
            <span className="purple"> WeThinkCode_</span>.
            <br />
            I have completed Full Stack Web Development at HyperionDev as well
            as Back End Development at ALX-Africa and Kubernetes from Linux
            Foundation.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Wathcing Sports
            </li>
            <li className="about-activity">
              <ImPointRight /> Hiking
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Hashim Aziz Muhammad</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
