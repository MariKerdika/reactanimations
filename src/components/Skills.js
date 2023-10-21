import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import html from "../assets/images/html.png";
import css from "../assets/images/css.png";
import js from "../assets/images/js.png";
import react from "../assets/images/react.png";
import sass from "../assets/images/sass.png";
import bootstrap from "../assets/images/bootstrap.png";

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
              <h2>Web Development Skills</h2>

              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                <div className="item">
                  <img src={html} alt="html 5"></img>
                  <h5>HTML 5</h5>
                </div>
                <div className="item">
                  <img src={css} alt="Css 3"></img>
                  <h5>CSS 3</h5>
                </div>
                <div className="item">
                  <img src={js} alt="JavaScript ES6"></img>
                  <h5>ES6</h5>
                </div>
                <div className="item">
                  <img src={react} alt="React"></img>
                  <h5>React</h5>
                </div>
                <div className="item">
                  <img src={sass} alt="sass"></img>
                  <h5>sass</h5>
                </div>
                <div className="item">
                  <img src={bootstrap} alt="bootstrap"></img>
                  <h5>Bootstrap</h5>
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
