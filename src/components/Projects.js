import { Row, Nav, Col, Container, Tab } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import banner from "../assets/images/banner-bg.png";
import portfolio from "../assets/images/portfolio.png";

const Projects = () => {
  const projects = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: portfolio,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: banner,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: banner,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: banner,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: banner,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: banner,
    },
  ];
  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>lorem ipsim</p>
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
                    {projects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">lorem</Tab.Pane>
                <Tab.Pane eventKey="third">lorem</Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
