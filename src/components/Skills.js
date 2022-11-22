import Carousel from "react-multi-carousel";
import { Container, Row, Col } from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import 'animate.css'
import TrackVisibility from "react-on-screen";
import colorSharp from "../assets/img/color-sharp.png";
export const Skills = () => {
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
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
          <TrackVisibility>
            {({isVisible})=>
            <div className={isVisible ? "animate__animated animate__fadeIn animate__faster":""}>
            <div className="skill-bx">
              <h2>Skills</h2>
              <p>Some skills I use in my day 🔥</p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                <div className="item">
                    <img src={meter1} alt="Image Skills"></img>
                    <h5>PHP</h5>
                </div>
                <div className="item">
                    <img src={meter2} alt="Image Skills"></img>
                    <h5>React.js</h5>
                </div>
                <div className="item">
                    <img src={meter3} alt="Image Skills"></img>
                    <h5>Node.js</h5>
                </div>
                <div className="item">
                    <img src={meter1} alt="Image Skills"></img>
                    <h5>Web Development</h5>
                </div>
                <div className="item">
                    <img src={meter1} alt="Image Skills"></img>
                    <h5>MySql</h5>
                </div>
              </Carousel>
            </div>
            </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      {/* <img className="background-image-left" src={colorSharp}></img> */}
    </section>
  );
};
