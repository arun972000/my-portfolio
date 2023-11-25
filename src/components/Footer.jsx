/* eslint-disable react/no-unescaped-entities */


import { Container, Row, Col } from 'react-bootstrap';
import { FaLinkedin, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-1">
      <Container>
        <Row>
          <Col xs={12} className="text-center">
            <a href="www.linkedin.com/in/arunpandian972" target="_blank" rel="noopener noreferrer" className="text-white mr-3">
              <FaLinkedin size={30} className="px-2"/>
            </a>
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="text-white">
              <FaFacebook size={30} className="px-2" />
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

