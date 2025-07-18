import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import moviereview from "../../Assets/Projects/moviereview.png";
import emotion from "../../Assets/Projects/emotion.png";
import xbanker from "../../Assets/Projects/xbanker.png";
import netguardian from "../../Assets/Projects/netguardian.png";
import suicide from "../../Assets/Projects/suicide.png";
import woolies from "../../Assets/Projects/woolies.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={netguardian}
              isBlog={false}
              title="NetGuardian"
              description="NetGuardian is a lightweight Managed Detection & Response (MDR) platform built for the ITWeb Security Summit 2025 Hackathon.I developed the frontend using React, Next.js, TypeScript, and Tailwind CSS, creating a responsive UI and real-time threat dashboard that integrates with backend detection systems."
              ghLink="https://github.com/hashimaziz88/NetGuardianITWEB2025"
              demoLink="https://neural-defenders-5tgr.vercel.app/"
              youtubeLink="https://youtu.be/QpULuEAWKx8?si=1OrG90Abgmp0Y5yM"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={xbanker}
              isBlog={false}
              title="XBanker"
              description="XBanker is a single-page banking app landing page built with React, Tailwind CSS, and JavaScript.

It showcases my frontend skills in crafting clean, responsive UI layouts with modern design practices."
              ghLink="https://github.com/hashimaziz88/XBanker"
              demoLink="https://hashimaziz88.github.io/XBanker/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={moviereview}
              isBlog={false}
              title="Movie Reviewer"
              description="This Django-based API allows users to manage movie reviews, ratings, and recommendations. Users can create accounts, submit reviews, rate movies, and get personalized recommendations based on their preferences."
              ghLink="https://github.com/hashimaziz88/ALXBE_Capstone_Django"
              demoLink="https://github.com/hashimaziz88/ALXBE_Capstone_Django"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={woolies}
              isBlog={false}
              title="Woolies Clone"
              description="A front-end clone of the Woolworths online store, built using React, CSS, BootStrap and JavaScript.

This project showcases my ability to replicate real-world e-commerce layouts with product listings, responsive design, and clean UI components."
              ghLink="https://github.com/hashimaziz88/woolies-clone"
              demoLink="https://hashimaziz88.github.io/woolies-clone/"
            />
          </Col> */}

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title=""
              description=""
              ghLink=""
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title=""
              description=""
              ghLink=""
              // demoLink="https://"      <--------Please include a demo link here
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
