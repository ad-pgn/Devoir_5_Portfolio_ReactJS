import { Container, Row, Col, Card } from 'react-bootstrap';
import banner from '../assets/images/banner.jpg'

const services = [
    {
        id: 1,
        icon: 'bi bi-pencil',
        titre: 'UX Design',
        description: "L'UX Design est une discipline qui consiste à concevoir des produits (sites web, applications mobiles, logiciels, objets connectés, etc.) en plaçant l'utilisateur au centre des préoccupations. L'objectif est de rendre l'expérience utilisateur la plus fluide et agréable possible."
    },
    {
        id: 2,
        icon: 'bi bi-code-slash',
        titre: 'Développement web',
        description: "Le développement de sites web consiste à créer des sites internet en utilisant des langages de programmation (HTML, CSS, JavaScript, PHP, etc.) et des frameworks (Bootstrap, React, Angular, etc.)."
    },
    {
        id: 3,
        icon: 'bi bi-search',
        titre: 'Référencement',
        description: "Le référencement naturel (SEO) est une technique qui consiste à optimiser un site web pour le faire remonter dans les résultats des moteurs de recherche (Google, Bing, Yahoo, etc.). L'objectif est d'attirer un maximum de visiteurs qualifiés sur le site."
    }
];

function Services() {
    return (
        <>
            {/* Bannière */}
            <section className="page-banner" style={{backgroundImage: `url(${banner})`}}></section>

            {/* Contenu */}
            <section className="py-5">
                <Container>
                    <h1 className="text-center mb-2">Mon offre de services</h1>
                    <p className="text-center text-muted mb-2">Voici les prestations sur lesquelles je peux intervenir</p>
                    <hr className="border-primary border-2 opacity-100 w-25 mx-auto mb-5"/>

                    <Row className="g-4">
                        {services.map(service => (
                            <Col md={4} key={service.id}>
                                <Card className="h-100 text-center p-4 service-card border">
                                    <Card.Body>
                                        <i className={`${service.icon} fs-1 text-primary mb-3 d-block`}></i>
                                        <Card.Title as="h2" className="fs-5 mb-3">{service.titre}</Card.Title>
                                        <Card.Text>{service.description}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>
        
        </>

    );
}

export default Services;