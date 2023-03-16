import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import Model3D from './3dModel'
import { Skills } from "./Skills";

export const Banner = () => {



  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div>
                 {/*  <span className="tagline">Bem Vind@!</span> */}
                  <h1>Blessed</h1>
                  <p> A Blessed é uma equipe focada no design e desenvolvimento de sites e aplicações WEB, entre em contato e faça já o seu orçamento!
                  </p>
                  <button className="Bannerconnect" onClick={() => console.log('connect')}>Entre em contato! <ArrowRightCircle size={25} /></button>
                </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={6}>

            <Model3D />

          </Col>
        </Row>
        <Skills/>
      </Container>
    </section>
  )
}
