import { Row, Nav, Col, Container, Tab } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import portfolio from "../assets/images/portfolio.png";
import nature from "../assets/images/nature.png";
import youtube from "../assets/images/youtube.png";
import pizza from "../assets/images/pizza.png";
import parallax from "../assets/images/parallax.png";
import movieland from "../assets/images/movieland.png";
import fitness from "../assets/images/fitness.png";
import landing from "../assets/images/landing.png";
import scholarship from "../assets/images/scholarship.png";
import stopcov from "../assets/images/stopcov.png";
import is from "../assets/images/is.png";
import fas from "../assets/images/fas.png";
import iec from "../assets/images/iec.png";
import insurance from "../assets/images/insurance.png";
import bootstraptemplate from "../assets/images/bootstraptemplate.png";

const Projects = () => {
  const projects = [
    {
      title: "Portfolio Website",
      description: "React project with animations",
      imgUrl: portfolio,
    },
    {
      title: "Travel Website",
      description: "React project with react router",
      imgUrl: nature,
    },
    {
      title: "Youtube clone",
      description: "React project with MUI",
      imgUrl: youtube,
    },
    {
      title: "Pizza Website",
      description: "React project with styled-components",
      imgUrl: pizza,
    },
    {
      title: "animation",
      description: "React Parallax",
      imgUrl: parallax,
    },
    {
      title: "Movieland Website",
      description: "React Project",
      imgUrl: movieland,
    },
  ];
  const markupProjects = [
    {
      title: "Fitness Website",
      description: "Responsive Markup",
      imgUrl: fitness,
    },
    {
      title: "Portfolio Website",
      description: "Responsive Markup",
      imgUrl: landing,
    },
    {
      title: "Scholarship Website",
      description: "Responsive Markup",
      imgUrl: scholarship,
    },
    {
      title: "Bootstrap Template",
      description: "Responsive Markup",
      imgUrl: bootstraptemplate,
    },
    {
      title: "StopCov Website",
      description: "Responsive Markup",
      imgUrl: stopcov,
    },
  ];
  const dnn = [
    {
      title: "Insurance.ge",
      description: "DNN Project",
      imgUrl: insurance,
    },
    {
      title: "Is.ge",
      description: "DNN Project",
      imgUrl: is,
    },
    {
      title: "Fas.ge",
      description: "DNN Project",
      imgUrl: fas,
    },
    {
      title: "iec.gov.ge",
      description: "DNN Project",
      imgUrl: iec,
    },
  ];
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <h2>MY WORKS</h2>

            <Tab.Container id="project-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">React Projects</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Markup Projects</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">DNN projects</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((projects, index) => {
                      return <ProjectCard key={index} {...projects} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <Row>
                    {markupProjects.map((markupProjects, index) => {
                      return <ProjectCard key={index} {...markupProjects} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <Row>
                    {dnn.map((dnn, index) => {
                      return <ProjectCard key={index} {...dnn} />;
                    })}
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
