import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaTwitter, FaInstagram, FaFacebook, FaHome, FaInfoCircle, FaEnvelope } from 'react-icons/fa';

/* css */
import './css/footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row>
                    <Col md={4} className="footer-column">
                        <h5 className="footer-title">Redes Sociales</h5>
                        <ul className="footer-list">
                            <li>
                                <a href="https://ejemplo.com">
                                    <FaTwitter />   Twitter
                                </a>
                            </li>
                            <li>
                                <a href="https://ejemplo.com">
                                    <FaInstagram /> Instagram
                                </a>
                            </li>
                            <li>
                                <a href="https://ejemplo.com">
                                    <FaFacebook /> Facebook
                                </a>
                            </li>
                        </ul>
                    </Col>
                    <Col md={5} className="footer-column">
                        <h5 className="footer-title">Información</h5>
                        <p className="footer-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Col>
                    <Col md={3} className="footer-column">
                        <h5 className="footer-title">Páginas</h5>
                        <ul className="footer-list">
                            <li>
                                <a href="https://ejemplo.com">
                                    <FaHome /> Inicio
                                </a>
                            </li>
                            <li>
                                <a href="https://ejemplo.com">
                                    <FaInfoCircle /> Acerca de
                                </a>
                            </li>
                            <li>
                                <a href="https://ejemplo.com">
                                    <FaEnvelope /> Contacto
                                </a>
                            </li>
                        </ul>
                    </Col>
                    <Col md={12}>
                        <hr></hr>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
