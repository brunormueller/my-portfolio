import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import { Container, Row, Col, Nav } from "react-bootstrap";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            {/* <img src={logo} alt="Logo" /> */}
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/brunormueller/">
                <img src={navIcon1} alt="Icon" />
              </a>
              <a href="https://github.com/brunormueller">
                <img src={navIcon2} alt="Icon" />
              </a>
              <a href="https://www.instagram.com/brunormueller">
                <img src={navIcon3} alt="Icon" />
              </a>
            </div>
            <p>CopyRight 2022. All Right Reserved </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
