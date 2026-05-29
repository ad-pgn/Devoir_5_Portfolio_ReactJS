import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import banner from '../assets/images/banner.jpg';
import coderImg from '../assets/images/portfolio/coder.jpg';
import espaceBienEtreImg from '../assets/images/portfolio/espace-bien-etre.jpg';
import freshFoodImg from '../assets/images/portfolio/fresh-food.jpg';
import restaurantJaponaisImg from '../assets/images/portfolio/restaurant-japonais.jpg';
import screensImg from '../assets/images/portfolio/screens.jpg';
import seoImg from '../assets/images/portfolio/seo.jpg';

const projets = [
    {
        id: 1,
        image: freshFoodImg,
        titre: 'Fresh Food',
        description: 'Site de vente de produits frais en ligne',
        technologie: 'Site réalisé avec PHP et MySQL',
        lien: '#'
    },
    {
        id: 2,
        image: restaurantJaponaisImg,
        titre: 'Restaurant Akira',
        description: 'Site de vente de produits frais en ligne',
        technologie: 'Site réalisé avec WordPress',
        lien: '#'
    },
    {
        id: 3,
        image: espaceBienEtreImg,
        titre: 'Espace bien-être',
        description: 'Site de vente de produits frais en ligne',
        technologie: 'Site réalisé avec LARAVEL',
        lien: '#'
    },
    {
        id: 4,
        image: seoImg,
        titre: 'SEO',
        description: 'Amélioration du référencement d\'un site e-commerce',
        technologie: 'Utilisation des outils SEO',
        lien: '#'
    },
    {
        id: 5,
        image: coderImg,
        titre: 'Création d\'une API',
        description: 'Création d\'une API RESTFULL publique',
        technologie: 'PHP - SYMFONY',
        lien: '#'
    },
    {
        id: 6,
        image: screensImg,
        titre: 'Maquette d\'un site web',
        description: 'Création du prototype d\'un site',
        technologie: 'Réalisé avec FIGMA',
        lien: '#'
    },
];

function Portfolio() {
    return (
        <>
            {/* Bannière */}
            <section className="page-banner" style={{backgroundImage: `url(${banner})`}}></section>

            {/* Contenu */}
            <section className="py-5">
                <Container>
                    <h1 className="text-center mb-2">Portfolio</h1>
                    <p className="text-center text-muted mb-2">Voici quelques-une de mes réalisations.</p>
                    <hr className="border-primary border-2 opacity-100 w-25 mx-auto mb-5" />

                    <Row className="g-4">
                        {projets.map(projet => (
                            <Col md={4} key={projet.id}>
                                <Card className="h-100 portfolio-card">
                                    <Card.Img variant="top" src={projet.image} alt={projet.titre} style={{height: '200px', objectFit: 'cover'}} />
                                    <Card.Body className="text-center">
                                        <Card.Title as="h2" className="fs-5">{projet.titre}</Card.Title>
                                        <Card.Text>{projet.description}</Card.Text>
                                        <Button href={projet.lien} className="portfolio-btn" variant="primary">Voir le site</Button>
                                    </Card.Body>
                                    <Card.Footer className="text-center text-muted">
                                        {projet.technologie}
                                    </Card.Footer>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>
        </>
    );
}

export default Portfolio;