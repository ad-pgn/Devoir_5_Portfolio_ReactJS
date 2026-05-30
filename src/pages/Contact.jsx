// Page Contact - Formulaire de contact et coordonnées
import { Container, Row, Col } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import banner from '../assets/images/banner.jpg';

function Contact() {
    return (
        <>
            {/* Balises SEO */}
            <Helmet>
                <title>Contact - John Doe</title>
                <meta name="description" content="Contactez John Doe pour vos projets web. Formulaire de contact, téléphone et adresse disponibles." />
            </Helmet>

            {/* Bannière */}
            <section className="page-banner" style={{backgroundImage: `url(${banner})`}}></section>

            {/* Contenu */}
            <section className="py-5">
                <Container>
                    <h1 className="text-center mb-2">Contact</h1>
                    <p className="text-center text-muted mb-2">Pour me contacter en vue d'un entretien ou d'une future collaboration, merci de remplir le formulaire de contact.</p>
                    <hr className="border-primary border-2 opacity-100 w-25 mx-auto mb-5" />

                    <Row className="bg-white rounded shadow p-4">

                        {/* Colonne gauche - Formulaire */}
                        <Col md={6} className="mb-4 mb-md-0">
                            <h2 className="mb-3">Formulaire de contact</h2>
                            <hr className="border-primary border-2 opacity-100 w-100 mb-4" />
                            
                            {/* Tous les champs sont obligatoires (required) */}
                            <form>
                                <div className="mb-3">
                                    <input type="text" className="form-control" placeholder="Votre nom" required />
                                </div>
                                <div className="mb-3">
                                    <input type="email" className="form-control" placeholder="Votre adresse email" required />
                                </div>
                                <div className="mb-3">
                                    <input type="tel" className="form-control" placeholder="Votre numéro de téléphone" required />
                                </div>
                                <div className="mb-3">
                                    <input type="text" className="form-control" placeholder="Sujet" required />
                                </div>
                                <div className="mb-3">
                                    <textarea className="form-control" placeholder="Votre message" rows={17} required></textarea>
                                </div>
                                <div className="text-center">
                                    <button type="submit" className="btn btn-primary">Envoyer</button>
                                </div>   
                            </form>
                        </Col>

                        {/* Colonne droite - Coordonnées et Google Map */}
                        <Col md={6}>
                            <h2 className="mb-3">Mes coordonnées</h2>
                            <hr className="border-primary border-2 opacity-100 w-100 mb-4" />
                            
                            {/* Balise sémantique pour les coordonnées */}
                            <address>
                                <p><strong>John Doe</strong></p>
                                <p><i className="bi bi-building me-2"></i>40 rue Laure Diebold</p>
                                <p><i className="bi bi-geo-alt me-2"></i>69009 Lyon, France</p>
                                <p><i className="bi bi-telephone me-2"></i>10 20 30 40 50</p>
                                <p><i className="bi bi-envelope me-2"></i>john.doe@gmail.com</p>
                            </address>

                            {/* Google Map */}
                            <iframe 
                            title="Localisation John Doe"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2782.5!2d4.8!3d45.77!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eb4f0a0a0a0a%3A0x0!2s40+Rue+Laure+Diebold%2C+69009+Lyon!5e0!3m2!1sfr!2sfr!4v1"
                            width="100%"
                            height="500"
                            style={{border: 0}}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade">
                            </iframe>
                        </Col>

                    </Row>
                </Container>
            </section>
        </>
    );
}

export default Contact;