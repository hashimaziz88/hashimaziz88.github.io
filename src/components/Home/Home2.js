import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              A QUICK <span className="purple"> INTRODUCTION </span>
            </h1>
            <p className="home-about-body">
              I&apos;m a software engineer based in
              <span className="purple"> Johannesburg, South Africa</span>, with
              a strong foundation in software engineering and hands-on
              experience across product development, platform work, and
              consulting.
              <br />
              <br />
              I started my career in the
              <i>
                <b className="purple"> insurtech space </b>
              </i>
              where I worked across
              <b className="purple"> cybersecurity, DevOps, </b>
              and
              <b className="purple"> full-stack engineering </b>
              using
              <b className="purple">
                {" "}
                React, Node.js, TypeScript, Next.js, and AWS
              </b>
              .
              <br />
              <br />
              Today, I work at
              <b className="purple"> Boxfusion </b>
              in software development consulting, building modern solutions
              with
              <b className="purple">
                {" "}
                React, Next.js, TypeScript, JavaScript, C#, ASP.NET, and EF
                Core
              </b>
              .
              <br />
              <br />
              I enjoy turning complex requirements into clean, maintainable
              software and collaborating with teams to ship products that are
              thoughtful, scalable, and useful.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>LET&apos;S CONNECT</h1>
            <p>
              You can find me on
              <span className="purple"> GitHub </span>
              and
              <span className="purple"> LinkedIn</span>.
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/hashimaziz88"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/hashimaziz88/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
