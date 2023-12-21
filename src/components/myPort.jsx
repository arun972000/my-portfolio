/* eslint-disable react/no-unescaped-entities */

import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from 'react-bootstrap';
import "./content.css"
import { useState } from 'react';
import ProjectLinksModal from './Project';

const Main = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <Container>
            <h3 style={{ color: "white" }}>PAGES /{`>`}</h3>
            <hr className="title-hr" />
            <Row className="justify-content-center mt-5">
                <Col xs={12} md={6} lg={3} className="mb-4">
                    <a href="https://drive.google.com/drive/folders/1kIgaEt0M0_wjUplFg0Xcmhb92GzZggK7?usp=drive_link" target="_blank" rel="noopener noreferrer" >
                        <Card >
                            <Card.Body>
                                <Card.Title>Resume & Certification</Card.Title>
                                <Card.Text className="text-muted">Let's explore my professional journey.</Card.Text>
                            </Card.Body>
                        </Card>
                    </a>

                </Col>

                <Col xs={12} md={6} lg={3} className="mb-4">
                    <a href="mailto:arunpandian972000@gmail.com">
                        <Card>
                            <Card.Body>
                                <Card.Title>Contact Me</Card.Title>
                                <Card.Text className="text-muted">Let's connect and discuss exciting opportunities.</Card.Text>
                            </Card.Body>
                        </Card>
                    </a>
                </Col>

                <Col xs={12} md={6} lg={3} className="mb-4">
                    <Card  style={{ cursor: 'pointer' }} onClick={handleShow}>
                        <Card.Body>
                            <Card.Title>Projects</Card.Title>
                            <Card.Text className="text-muted">Discover my latest coding projects.</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <ProjectLinksModal show={show} onHide={handleClose} />
                <Col xs={12} md={6} lg={3} className="mb-4">
                    <a href="https://www.behance.net/arunpandiaebcd" target="_blank" rel="noopener noreferrer">
                        <Card>
                            <Card.Body>
                                <Card.Title>Behance Link</Card.Title>
                                <Card.Text className="text-muted">View my creative work on Behance.</Card.Text>
                            </Card.Body>
                        </Card>
                    </a>
                </Col>
            </Row>
        </Container>
    );
};

export default Main;
