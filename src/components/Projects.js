import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";

import projImg1 from "../assets/img/ArtesCinema/ejmSite.png";
import projImg2 from "../assets/img/ArtesCinema/CinemaSite.png";
import projImg3 from "../assets/img/ArtesCinema/PratagySite.png";

import Modelagem1 from "../assets/img/ArtesCaio/modelagem02.png"
import Modelagem2 from "../assets/img/ArtesCaio/modelagem01.png"
import Modelagem3 from "../assets/img/ArtesCaio/modelagem03.png"
import Modelagem4 from "../assets/img/ArtesCaio/modelagem04.png"
import Modelagem5 from "../assets/img/ArtesCaio/modelagem05.png"
import Modelagem6 from "../assets/img/ArtesCaio/modelagem06.png"


import Logo1 from "../assets/img/ArtesKelvson/Logo01.jfif"
import Logo2 from "../assets/img/ArtesKelvson/Logo02.jpg"
import Logo3 from "../assets/img/ArtesKelvson/Logo03.jpg"
import Logo4 from "../assets/img/ArtesKelvson/Logo04.jpg"
import Logo5 from "../assets/img/ArtesKelvson/Logo05.jfif"
import Logo6 from "../assets/img/ArtesKelvson/Logo06.jfif"

import ImgWeb from "../assets/img/ArtesCursos/ImgWEB.png"
import ImgRN from "../assets/img/ArtesCursos/ImgRN.png"
import ImgJS from "../assets/img/ArtesCursos/ImgJS.png"

import 'animate.css';


export const Projects = () => {

  const projects = [
    {
      title: "EJM publicidades",
      description: "Site desenvolvido para uma empresa de publicidades",
      imgUrl: projImg1,
    },
    {
      title: "Cinema Blessed",
      description: "Aplicação WEB sobre cinema",
      imgUrl: projImg2,
    },
    {
      title: "Pratagy",
      description: "Aplicação web desenvolvida para o controle interno do RH",
      imgUrl: projImg3,
    }
  ];

  const Modelagem = [
    {
      title: "Sala de estar",
      description: "Modelagem 3D de uma sala de estar",
      imgUrl: Modelagem1,
    },
    {
     
      title: "Japanese Street",
      description: "Modelagem de 3D paisagem",
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
      title: "Japanese Sign",
      description: "Letreiro neon",
      imgUrl: Modelagem5,
    },
    {
      title: "Entrada na floresta",
      description: "Modelagem 3D de paisagem",
      imgUrl: Modelagem6,
    },
  ];
  
  
  const Cursos = [
    {
      title: "Introdução à Programação",
      description: "Curso de introdução a programação com Java Script", 
      imgUrl: ImgJS,
    },
    {
      title: "Introdução ao desenvolvimento Web",
      description: "Curso de introdução ao desenvolvimento Web",
      imgUrl: ImgWeb,
    },
    {
      title: "Introdução ao React Native",
      description: "Curso de introdução ao desenvolvimento mobile com React Native",
      imgUrl: ImgRN,
    },
  ];



  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
      
        
                <h2>Serviços</h2>
                <p>Conheça mais sobre alguns dos nossos serviços ofertados!</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                  <Nav.Item>
                      <Nav.Link eventKey="first">Cursos</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">WebSites</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">3D</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp">
                    <Tab.Pane eventKey="second">
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
                    <Tab.Pane eventKey="third">
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
                    <Tab.Pane eventKey="first">
                    <Row>
                        {
                          Cursos.map((project, index) => {
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
          
  
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
