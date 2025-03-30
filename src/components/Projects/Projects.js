import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import evshare from "../../Assets/Projects/evshare.png";
import secondhand from "../../Assets/Projects/secondhand.png";

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
              imgPath={evshare}
              isBlog={false}
              title="Shared-car-system"
              description="A Django-based electric vehicle (EV) sharing management system with Google Maps integration. Features include real-time EV tracking, automatic battery monitoring, rental and repair management, user subscriptions, and admin dashboard. Built with Django, SQLite, and JavaScript."
              ghLink="https://github.com/LZX-star9/Shared-car-system"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={secondhand}
              isBlog={false}
              title="Second-hand Trading Platform"
              description="A Django-based web application for buying and selling second-hand products. Includes user registration, product listings, order management, wishlist, and review system. Built with Django, Bootstrap, and SQLite."
              ghLink="https://github.com/LZX-star9/Second-hand-Trading-Platform"
              demoLink=""
            />
          </Col>




        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
