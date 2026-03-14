import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import moviereview from "../../Assets/Projects/moviereview.png";
import xbanker from "../../Assets/Projects/xbanker.png";
import netguardian from "../../Assets/Projects/netguardian.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Selected <strong className="purple">Projects </strong>
        </h1>
        <p className="section-lead project-lead">
          A few builds that reflect how I approach frontend craft, full-stack
          delivery, and practical problem-solving.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={netguardian}
              isBlog={false}
              title="NetGuardian"
              stack="React, Next.js, TypeScript, Tailwind CSS"
              description="A lightweight managed detection and response platform created for the ITWeb Security Summit 2025 Hackathon. I built the frontend experience and real-time dashboard, focusing on clarity, responsiveness, and a polished security-focused workflow."
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
              stack="React, JavaScript, Tailwind CSS"
              description="A modern banking landing page built to showcase clean visual hierarchy, responsive layout work, and component-driven frontend execution. The focus was on crisp presentation and strong UX fundamentals."
              ghLink="https://github.com/hashimaziz88/XBanker"
              demoLink="https://hashimaziz88.github.io/XBanker/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={moviereview}
              isBlog={false}
              title="Movie Reviewer"
              stack="Django, Python, REST API"
              description="A backend-focused movie review platform with account management, ratings, reviews, and recommendation features. It highlights API design, business logic, and the structure needed for content-driven applications."
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
