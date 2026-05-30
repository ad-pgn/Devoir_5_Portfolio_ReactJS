import { Container, Accordion } from 'react-bootstrap';
import { Helmet } from 'react-helmet';

function LegalNotice() {
    return (
        <>
            <Helmet>
                <title>Mentions légales - John Doe</title>
                <meta name="robots" content="noindex, nofollow" />
            </Helmet>

            {/* Contenu */}
            <section className="py-5">
                <Container>
                    <h1 className="text-center mb-2">Mentions légales</h1>
                    <hr className="border-primary border-2 opacity-100 w-25 mx-auto mb-5" />

                    <Accordion>

                        {/* Éditeur */}
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Éditeur du site</Accordion.Header>
                            <Accordion.Body>
                                <h2 className="fs-5">John Doe</h2>
                                <address>
                                    <p><i className="bi bi-building me-2"></i>40 rue Laure Diebold</p>
                                    <p><i className="bi bi-geo-alt me-2"></i>69009 Lyon, France</p>
                                    <p><i className="bi bi-telephone me-2"></i>10 20 30 40 50</p>
                                    <p><i className="bi bi-envelope me-2"></i>john.doe@gmail.com</p>
                                </address>
                            </Accordion.Body>
                        </Accordion.Item>

                        {/* Hébergeur */}
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Hébergeur</Accordion.Header>
                            <Accordion.Body>
                                <h2>alwaysdata</h2>
                                <p><i className="bi bi-building me-2"></i>91 Rue du Faubourg Saint-Honoré, 75008 Paris</p>
                                <p>
                                    <i className="bi bi-globe me-2"></i>
                                    <a href="https://www.alwaysdata.com" target="_blank" rel="noopener noreferrer nofollow">www.alwaysdata.com</a>
                                </p>
                            </Accordion.Body>
                        </Accordion.Item>

                        {/* Crédits */}
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>Crédits</Accordion.Header>
                            <Accordion.Body>
                                <h2>Crédits</h2>
                                <p>Ce site a été réalisé par John Doe, étudiant au <a href="https://www.cef.fr" target="_blank" rel="noopener noreferrer nofollow">Centre Européen de formation</a>.</p>
                                <p><em>Les images utilisées sur ce site sont libres de droits et ont été obtenues sur le site <a href="https://pixabay.com" target="_blank" rel="noopener noreferrer nofollow">Pixabay</a></em></p>
                                <p><em>La favicon de ce site a été fournie par <a href="https://www.flaticon.com/fr/icones-gratuites/john-doe" target="_blank" rel="noopener noreferrer nofollow">John doe Icons créés par Freepik - Flaticon</a></em></p>
                            </Accordion.Body>
                            </Accordion.Item>

                    </Accordion>
                </Container>
            </section>
        </>
    );
}

export default LegalNotice;