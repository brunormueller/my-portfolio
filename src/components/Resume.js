import { useEffect, useState } from "react";
import { Container, Row, Col, Nav, Alert } from "react-bootstrap";
import MyResumeEN from "../assets/Resume-en.pdf";
import MyResumePT from "../assets/Resume-pt.pdf";
export const Resume = ({ onValidated, status, message }) => {
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (status === "success") clearFields();
  }, [status]);

  const handleSubmit = (e) => {
    e.preventDefault();
    email &&
      email.indexOf("@") > -1 &&
      onValidated({
        EMAIL: email,
      });
  };

  const clearFields = () => {
    setEmail("");
  };
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

  return (
    <Col  lg={12}>
      <div className="newsletter-bx wow slideInUp  flex">
        <Row>
          <Col lg={12} md={6} xl={12}>
            <h3>If you are interested, you can see my resume</h3>
          </Col>
          <Col md={6} xl={12}>
            <div responsive={responsive} className="new-email-bx justify-center flex items-center mt-3 ">
              {/* <a href={MyResumePT} download>
                <button className="transition ease-in-out delay-150 bg-violet-700 hover:-translate-y-1 hover:scale-110 hover:bg-violet-900 duration-300 mr-3" type="button">Download Resume PT-BR</button>
              </a> */}
              <a href={MyResumeEN} download>
                <button className="transition ease-in-out delay-150 bg-violet-700 hover:-translate-y-1 hover:scale-110 hover:bg-violet-900 duration-300" type="button">Download Resume EN-US</button>
              </a>
            </div>
          </Col>
        </Row>
      </div>
    </Col>
  );
};
