import { Container, Tab, Row, Col, Nav } from "react-bootstrap";
import { ProjectCards } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import TrackVisibility from "react-on-screen";
import projImg1 from "../assets/img/tesla_page.png";
import projImg2 from "../assets/img/spotify_page.png";
import projImg3 from "../assets/img/palpitebox.png";
import projImg4 from "../assets/img/portfolio.png";
import projImg5 from "../assets/img/login_fiadotec.png";
import projImg6 from "../assets/img/coming_soon.jpg";

export const Projects = () => {
  const projects = [
    {
      title: "Tesla Page Clone",
      description: "Design & Development based on Tesla Page with all animations and response.",
      imgUrl: projImg1,
      link: "#home"
    },
    {
      title: "Spotify Clone",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "PalpiteBox",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "My Portfolio",
      description: "Design & Development",
      imgUrl: projImg4,
    },
    {
      title: "Login and Register Page",
      description: "Design & Development",
      imgUrl: projImg5,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg6,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
          <TrackVisibility>
            {({isVisible})=>
            <div className={isVisible ? "animate__animated animate__slideInUp":""}>
            <h2>Projects</h2>
            <p>
              Some projects avaiable on GitHub.
            </p>
            </div>}
            </TrackVisibility>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">Tab 1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Tab 2</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Tab 3</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project, index) => {
                      return <ProjectCards key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="sencod">Lorem ipsum</Tab.Pane>
                <Tab.Pane eventKey="third">Lorem ipsum</Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
