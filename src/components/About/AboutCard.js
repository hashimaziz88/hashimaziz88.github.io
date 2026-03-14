import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi, I&apos;m{" "}
            <span className="purple">Hashim Aziz Muhammad </span>
            from <span className="purple"> Johannesburg, South Africa.</span>
            <br />
            I am a <span className="purple">Software Engineering graduate</span>
            and currently a <span className="purple">Software Engineer</span> at
            <span className="purple"> Boxfusion</span>, where I work in software
            development consulting.
            <br />
            Earlier in my career, I worked in the
            <span className="purple"> insurtech space</span>, contributing
            across cybersecurity, DevOps, and full-stack development.
            <br />
            My day-to-day work includes building with
            <span className="purple">
              {" "}
              React, Next.js, TypeScript, JavaScript, C#, ASP.NET, and EF Core
            </span>
            while drawing on experience with Node.js, AWS, and cloud-focused
            delivery.
            <br />
            <br />
            I care about building software that is useful, well-structured, and
            ready for real-world teams to maintain and grow.
            <br />
            <br />
            Outside of work, I also enjoy:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Sports
            </li>
            <li className="about-activity">
              <ImPointRight /> Hiking
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Build useful software. Keep it simple. Make it dependable."
          </p>
          <footer className="blockquote-footer">Hashim Aziz Muhammad</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
