import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Consistency On <strong className="purple">GitHub</strong>
      </h1>
      <GitHubCalendar
        username="hashimaziz88"
        blockSize={15}
        blockMargin={5}
        color="#38bdf8"
        fontSize={16}
      />
    </Row>
  );
}

export default Github;
