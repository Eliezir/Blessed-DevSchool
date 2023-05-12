import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import Hero from '../assets/img/hero-image.png'
import { Skills } from "./Skills";

export const Banner = () => {



  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={6}>
                <div>
                  <h1>Blessed</h1>
                  <p> Olá, nós somos a Blessed, uma escola de programação e tecnologia que tem como objetivo ensinar,capacitar e inserir jovens no mercado de trabalho.
                  </p>
                  <button className="Bannerconnect" onClick={() => console.log('connect')}>Entre em contato! <ArrowRightCircle size={25} /></button>
                </div>
          </Col>
          <Col xs={12} md={6} xl={6}>
          <img class="hero-image" src={Hero}/>
          </Col>
        </Row>
        <Skills/>
      </Container>
    </section>
  )
}
