
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import ic from "../assets/icons8-a-50.png"
import Offcanvas from 'react-bootstrap/Offcanvas';

function DarkNav() {
  

  return (
    <>
      {[false].map((expand) => (
        <Navbar key={expand} expand={expand} bg="transparent" data-bs-theme="dark" >
          <Container fluid>
            <Navbar.Brand>  <img
              src={ic}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            /></Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="https://drive.google.com/drive/folders/1kIgaEt0M0_wjUplFg0Xcmhb92GzZggK7?usp=drive_link" target="_blank" rel="noopener noreferrer">Resume</Nav.Link>
                  <Nav.Link href="mailto:arunpandian972000@gmail.com">Contact me</Nav.Link>
                  <Nav.Link href="#">Projects</Nav.Link>
                  <Nav.Link href="https://www.behance.net/arunpandiaebcd" target="_blank" rel="noopener noreferrer">Behance</Nav.Link>
                  
                </Nav>
                
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default DarkNav;
