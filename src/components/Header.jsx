import { NavLink } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';

function Header() {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
            <Container fluid="lg">
                <Navbar.Brand as={NavLink} to="/" className="fw-semibold">
                    JOHN DOE
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="main-nav"/>
                <Navbar.Collapse id="main-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={NavLink} to="/" end className="text-uppercase mx-1">
                            Home
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="/services" end className="text-uppercase mx-1">
                            Services
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="/Portfolio" end className="text-uppercase mx-1">
                            Portfolio
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="/contact" end className="text-uppercase mx-1">
                            Contact
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="/mentions-legales" end className="text-uppercase mx-1">
                            Mention légales
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;