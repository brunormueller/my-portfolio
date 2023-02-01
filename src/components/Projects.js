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
import projImg7 from "../assets/img/habits-project.png";

export const Projects = () => {
  const projects = [
    {
      title: "Tesla Page Clone",
      description: "Design & Development based on Tesla Page with all animations and response.",
      imgUrl: projImg1,
      link: "https://github.com/brunormueller/Home-Tesla"
    },
    {
      title: "Spotify Clone",
      description: "Design & Development",
      imgUrl: projImg2,
      link: "https://github.com/brunormueller/Spotify-Clone"
    },
    {
      title: "PalpiteBox",
      description: "Application developed to evaluate restaurants.Used React and Typescript",
      imgUrl: projImg3,
      link: "https://github.com/brunormueller/PalpiteBox"
    },
    {
      title: "My Portfolio",
      description: "Portfolio created with React, ReactHooks, Express, TailwindCSS and Typescript",
      imgUrl: projImg4,
      link: "https://github.com/brunormueller/my-portfolio"
    },
    {
      title: "Login and Register Page",
      description: "Design & Development",
      imgUrl: projImg5,
      link: "https://github.com/brunormueller/FiadoTec"
    },
    {
      title: "Habits",
      description: "An application made to create habits to be able to fulfill them daily. Done during a course. Developed for web and mobile",
      imgUrl: projImg7,
      link: "#"
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
                <Tab.Pane className="text-center" id="tab-style" eventKey="second">Coming Soon</Tab.Pane>
                <Tab.Pane className="text-center" id="tab-style" eventKey="third">Coming Soon</Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
