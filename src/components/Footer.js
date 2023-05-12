import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logoHorizontal.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6} className="footer-logo">
            <img className="logo" src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
            <a href="https://wa.me/5582988886227" target="_blank" rel="noreferrer"><img src={navIcon2} alt="whatsapp icon" /></a>
                <a rel="noreferrer" target="_blank" href="https://www.instagram.com/websitesblessed/"><img src={navIcon3} alt="instagram icon" /></a>
                <a href="mailto:websitesblessed@gmail.com" rel="noreferrer" target="_blank"><img src={navIcon1} alt="gmail icon" /></a>
            </div>
            <p>Copyright 2023. Blessed All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
