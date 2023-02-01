import { Col, Container, Row } from "react-bootstrap"

export const AboutMe = () => {
    return (
        <section className="skill" id="skills">
            <Container className="">
                <Col>
                    <Row>
                        <div className="grid grid-cols-2 flex ">
                            <div >
                                <h2 className="">About Me</h2>
                            </div>
                            <div className="justify-center w-12">
                                <p>Desenvolvedor Full Stack apaixonado por aprender e crescer continuamente. Com habilidades sólidas em tecnologias modernas, incluindo React, HTML5, CSS3, MySQL, PHP, Javascript, NodeJS, TailwindCSS, ExpressJS, Jest, JQuery e Vue.js, busco desafios e oportunidades para aplicar meus conhecimentos e construir soluções inovadoras. Acredito em trabalhar em equipe e em constantemente buscar novas formas de melhorar minhas habilidades e contribuir para o sucesso de meus projetos.</p>
                                
                            </div>
                        </div>
                    </Row>
                </Col>
            </Container>
        </section >
    )
}