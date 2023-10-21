import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import html from "../assets/images/html.png";
import css from "../assets/images/css.png";

const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  {
  }
  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>skills</h2>
              <p>lorem ipsum</p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                <div className="item">
                  <img src={html} alt="html 5"></img>
                  <h5>Web development</h5>
                </div>
                <div className="item">
                  <img src={css} alt="html 5"></img>
                  <h5>Web development</h5>
                </div>
                <div className="item">
                  <img src={html} alt="html 5"></img>
                  <h5>Web development</h5>
                </div>
                <div className="item">
                  <img src={html} alt="html 5"></img>
                  <h5>Web development</h5>
                </div>
                <div className="item">
                  <img src={html} alt="html 5"></img>
                  <h5>Web development</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Skills;
