import { Container, Row, Col } from "react-bootstrap";
import { FaFacebook } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { PiCode } from "react-icons/pi";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <h1 className="logo">
              <PiCode />
              React Developer
            </h1>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <div className="social-icon">
                <a
                  href="https://www.facebook.com/profile.php?id=100069718897965"
                  target="_blank"
                >
                  <FaFacebook />
                </a>
                <a
                  href="https://www.linkedin.com/in/marina-kerdikashvili-35a815228/"
                  target="_blank"
                >
                  <AiFillLinkedin />
                </a>
                <a href="https://github.com/MariKerdika" target="_blank">
                  <FaGithub />
                </a>
              </div>
            </div>
            <p>Copyright 2023. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
