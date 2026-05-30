// Composant Footer - Pied de page présent sur toutes les pages
import {NavLink} from 'react-router-dom';
import {Container, Row, Col} from 'react-bootstrap';

function Footer() {
    return (
        <footer className="bg-dark text-white py-5 mt-auto">
            <Container>
                <Row>
                    {/* Colonne 1 - Coordonnées et réseaux sociaux */}
                    <Col md={4} className="mb-4 mb-md-0">
                        <h5 className="fw-semibold mb-3">John Doe</h5>
                        {/* Balise sémantique pour les coordonnées */}
                        <address className="mb-3">
                            <span className="d-block mb-1">40 rue Laure Diebold</span>
                            <span className="d-block mb-1">69009 Lyon, France</span>
                            <span className="d-block mb-1">10 20 30 40 50</span>
                            <span className="d-block mb-1">john.doe@gmail.com</span>
                        </address>

                        {/* Icônes réseaux sociaux - s'ouvrent dans un nouvel onglet */}
                        <div className="d-flex gap-3">
                            <a href="https://github.com/johndoe" target="_blank" rel="noopener noreferrer nofollow" className="footer-social-icon">
                                <i className="bi bi-github fs-5"></i>
                            </a>
                            <a href="https://twitter.com/johndoe" target="_blank" rel="noopener noreferrer nofollow" className="footer-social-icon">
                                <i className="bi bi-twitter fs-5"></i>
                            </a>
                            <a href="https://linkedin.com/in/johndoe" target="_blank" rel="noopener noreferrer nofollow" className="footer-social-icon">
                                <i className="bi bi-linkedin fs-5"></i>
                            </a>
                        </div>
                    </Col>

                    {/* Colonne 2 - Liens vers les pages du site */}
                    <Col md={4} className="mb-4 mb-md-0">
                        <h5 className="fw-semibold mb-3">Liens utiles</h5>
                        <ul className="list-unstyled">
                            <li><NavLink to="/" className="footer-link">Accueil</NavLink></li>
                            <li><NavLink to="/services" className="footer-link">Services</NavLink></li>
                            <li><NavLink to="/portfolio" className="footer-link">Portfolio</NavLink></li>
                            <li><NavLink to="/contact" className="footer-link">Contact</NavLink></li>
                            <li><NavLink to="/mentions-legales" className="footer-link">Mentions légales</NavLink></li>
                        </ul>
                    </Col>

                    {/* Colonne 3 - Dernières réalisations */}
                    {/* Les liens pointent vers /portfolio en attendant les pages individuelles */}
                    <Col md={4}>
                        <h5 className="fw-semibold mb-3">Mes dernières réalisations</h5>
                        <ul className="list-unstyled">
                            <li><NavLink to="/portfolio" className="footer-link">Fresh Food</NavLink></li>
                            <li><NavLink to="/portfolio" className="footer-link">Restaurant Akira</NavLink></li>
                            <li><NavLink to="/portfolio" className="footer-link">Espace bien-être</NavLink></li>
                            <li><NavLink to="/portfolio" className="footer-link">SEO</NavLink></li>
                            <li><NavLink to="/portfolio" className="footer-link">Création d'une API</NavLink></li>
                            <li><NavLink to="/portfolio" className="footer-link">Maquette d'un site</NavLink></li>
                        </ul>
                    </Col>     
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;