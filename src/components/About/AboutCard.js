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
            I&apos;m a{" "}
            <span className="purple">Software Engineering graduate</span> and a
            <span className="purple"> Software Engineer</span> at
            <span className="purple"> Boxfusion</span>, where I work in
            software development consulting.
            <br />
            Earlier in my career, I worked in the
            <span className="purple"> insurtech space</span>, contributing
            across cybersecurity, DevOps, and full-stack development.
            <br />
            My current work centres on
            <span className="purple">
              {" "}
              React, Next.js, TypeScript, JavaScript, C#, ASP.NET, and EF Core
            </span>
            , while drawing on experience with Node.js, Azure, and cloud-focused
            delivery.
            <br />
            <br />
            I&apos;m especially motivated by software that solves practical
            problems, communicates clearly to its users, and remains easy for
            teams to maintain over time.
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

          <p className="about-quote">
            "Build useful software. Keep it clear. Make it dependable."
          </p>
          <footer className="blockquote-footer">Hashim Aziz Muhammad</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
