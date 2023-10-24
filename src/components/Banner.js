import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import headerImg from "../assets/images/header-img.svg";
import { BsArrowRightSquareFill } from "react-icons/bs";
import kerdikashvili from "../assets/images/kerdikashvili.pdf";
import "animate.css";
import TrackVisibility from "react-on-screen";

const Banner = () => {
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              <div className="animate__animated animate__slideInUp">
                <h1 className="wrap">Hi! I'm a junior React Developer.</h1>
                <a href={kerdikashvili} download className="tagline">
                  Download CV
                </a>
              </div>
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              <div className="animate__animated animate__zoomIn">
                <img src={headerImg} alt="Header Img" />
              </div>
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
