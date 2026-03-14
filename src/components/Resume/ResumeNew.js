import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/../Assets/Hashim _Aziz-Muhammad_CV.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { FaExternalLinkAlt } from "react-icons/fa";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <div className="resume-header">
          <span className="resume-badge">Resume</span>
          <h1 className="project-heading">Experience Snapshot</h1>
          <p className="section-lead">
            A concise view of my experience across software engineering,
            consulting, full-stack delivery, and cloud-focused development.
          </p>
        </div>
        <Row className="resume-actions">
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            className="hero-secondary-btn"
            style={{ maxWidth: "250px" }}
          >
            <FaExternalLinkAlt />
            &nbsp;Open in New Tab
          </Button>
        </Row>

        <Row className="resume">
          <Document file={pdf} className="d-flex justify-content-center">
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
