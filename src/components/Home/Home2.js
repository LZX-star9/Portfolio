import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I’m currently pursuing my MSc in <b className="purple">Data Science</b> at the University of Glasgow, 
              with a strong passion for backend development and intelligent systems.
              <br />
              <br />
              I'm proficient in
              <i>
                <b className="purple"> Java, Python, and SQL, </b>
              </i>
              and I enjoy building robust systems that combine scalability with clean architecture.
              <br />
              <br />
              My interests lie in designing and developing
              <i>
                <b className="purple"> backend services, recommendation systems, </b> and
                exploring areas like{" "}
                <b className="purple">distributed computing and real-time data processing</b>.
              </i>
              <br />
              <br />
              I’ve worked on full-stack projects such as an
              <b className="purple"> EV-sharing platform </b> and a
              <b className="purple"> personalized movie recommender system</b>,
              utilizing tools and frameworks like
              <i>
                <b className="purple"> Django, Spring Boot, MySQL, Redis, Celery, and WebSocket</b>
              </i>
              to bring ideas into production.
              <br />
              <br />
              I’m always excited to learn and collaborate on meaningful projects that blend
              <b className="purple"> data, software, and impact.</b>
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
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/LZX-star9"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/zhaoxi-li-6a9a04337/"
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
