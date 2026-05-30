// Composant Header - Barre de navigation présente sur toutes les pages
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';

function Header() {
    return (
        // sticky="top" : la navbar reste en haut lors du scroll
        <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
            <Container fluid="lg">
                {/* Logo textuel - redirige vers l'accueil */}
                <Navbar.Brand as={NavLink} to="/" className="fw-semibold">
                    JOHN DOE
                </Navbar.Brand>

                {/* Bouton hamburger - visible sur mobile et tablette */}
                <Navbar.Toggle aria-controls="main-nav"/>

                {/* Liens de navigation - masqués sur mobile, visibles sur desktop */}
                <Navbar.Collapse id="main-nav">
                    <Nav className="ms-auto">

                        {/* NavLink ajoute automatiquement la classe "active" sur le lien courant */}
                        <Nav.Link as={NavLink} to="/" end className="text-uppercase mx-1">
                            Home
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="/services" end className="text-uppercase mx-1">
                            Services
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="/portfolio" end className="text-uppercase mx-1">
                            Portfolio
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="/contact" end className="text-uppercase mx-1">
                            Contact
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="/mentions-legales" end className="text-uppercase mx-1">
                            Mentions légales
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;