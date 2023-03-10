import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/ArtesCinema/ejmSite.png";
import projImg2 from "../assets/img/ArtesCinema/CinemaSite.png";
import projImg3 from "../assets/img/ArtesCinema/PratagySite.png";
import colorSharp2 from "../assets/img/color-sharp2.png";

import Modelagem1 from "../assets/img/ArtesCaio/modelagem01.png"
import Modelagem2 from "../assets/img/ArtesCaio/modelagem02.png"
import Modelagem3 from "../assets/img/ArtesCaio/modelagem03.png"
import Modelagem4 from "../assets/img/ArtesCaio/modelagem04.png"
import Modelagem5 from "../assets/img/ArtesCaio/modelagem05.jpeg"
import Modelagem6 from "../assets/img/ArtesCaio/modelagem06.png"


import Logo1 from "../assets/img/ArtesKelvson/Logo01.jfif"
import Logo2 from "../assets/img/ArtesKelvson/Logo02.jpg"
import Logo3 from "../assets/img/ArtesKelvson/Logo03.jpg"
import Logo4 from "../assets/img/ArtesKelvson/Logo04.jpg"
import Logo5 from "../assets/img/ArtesKelvson/Logo05.jfif"
import Logo6 from "../assets/img/ArtesKelvson/Logo06.jfif"

import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    }
  ];

  const Modelagem = [
    {
      title: "Japanese Street",
      description: "Modelagem de 3D paisagem",
      imgUrl: Modelagem1,
    },
    {
      title: "Sala de estar",
      description: "Modelagem 3D de uma sala de estar",
      imgUrl: Modelagem2,
    },
    {
      title: "Cozinha",
      description: "Modelagem 3D de uma cozinha",
      imgUrl: Modelagem3,
    },
    {
      title: "CocaCola",
      description: "Modelagem 3D de uma grade de latas de CocaCola",
      imgUrl: Modelagem4,
    },
    {
      title: "PokeBola",
      description: "Modelagem 3D de uma pokebola do anime Pokemon",
      imgUrl: Modelagem5,
    },
    {
      title: "Entrada na floresta",
      description: "Modelagem 3D de paisagem",
      imgUrl: Modelagem6,
    },
  ];
  
  
  const Logotipos = [
    {
      title: "Brilho no olhar",
      description: "Logo Brilho no olhar",
      imgUrl: Logo1,
    },
    {
      title: "Kekle",
      description: "Logo Kekle",
      imgUrl: Logo2,
    },
    {
      title: "Cartão para loja",
      description: "Cartão de negócios para lojas",
      imgUrl: Logo3,
    },
    {
      title: "Depósito do Galego",
      description: "Logo para deposito de bebidas",
      imgUrl: Logo4,
    },
    {
      title: "Cristina Cabelos",
      description: "Logo para salão de beleza",
      imgUrl: Logo5,
    },
    {
      title: "RK rabisque",
      description: "Logo para desenhista ",
      imgUrl: Logo6,
    },
  ];



  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Portfolio</h2>
                <p>Conheça mais sobre alguns dos nossos outros projetos!</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">WebSites</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">3D</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Logotipo</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                        {
                          Modelagem.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <Row>
                        {
                          Logotipos.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
