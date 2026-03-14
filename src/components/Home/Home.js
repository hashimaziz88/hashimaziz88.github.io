import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <div className="hero-badge">Software Engineer | Johannesburg</div>
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Building dependable products across consulting and delivery
              </h1>

              <h1 className="heading-name">
                <strong className="main-name"> Hashim Aziz Muhammad </strong>
              </h1>

              <div className="hero-intro-card">
                <Type />
                <p className="hero-summary">
                  I build modern software with a strong bias for clarity,
                  maintainability, and delivery. My background spans
                  insurtech, cybersecurity, DevOps, and full-stack product
                  development, and I now work in software development
                  consulting at <strong className="purple">Boxfusion</strong>.
                </p>
                <div className="hero-highlights">
                  <span>React & Next.js</span>
                  <span>TypeScript & JavaScript</span>
                  <span>C# & ASP.NET</span>
                  <span>Azure & DevOps</span>
                </div>
                <p className="hero-supporting-copy">
                  From frontend experience to backend systems and cloud
                  delivery, I enjoy turning complex requirements into software
                  that teams can ship and scale with confidence.
                </p>
                <div className="hero-actions">
                  <Button
                    variant="primary"
                    href="https://www.linkedin.com/in/hashimaziz88/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaLinkedinIn /> &nbsp;LinkedIn
                  </Button>
                  <Button
                    variant="primary"
                    href="https://github.com/hashimaziz88"
                    target="_blank"
                    rel="noreferrer"
                    className="hero-secondary-btn"
                  >
                    <AiFillGithub /> &nbsp;GitHub
                  </Button>
                  <Button
                    variant="primary"
                    as={Link}
                    to="/resume"
                    className="hero-secondary-btn"
                  >
                    <CgFileDocument /> &nbsp;Resume
                  </Button>
                </div>
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
