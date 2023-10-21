import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import headerImg from "../assets/images/header-img.svg";
import { BsArrowRightSquareFill } from "react-icons/bs";

const Banner = () => {
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <h1 className="wrap">Hi! I'm a junior React Developer.</h1>
            <button className="tagline" onClick={() => console.log("connect")}>
              Let's connect <BsArrowRightSquareFill />
            </button>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt="header image" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
