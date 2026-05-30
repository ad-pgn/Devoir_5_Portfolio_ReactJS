// Composant GithubModal - Modale affichant les informations du profil GitHub
import { useState, useEffect } from 'react';
import { Modal, Button, Row, Col } from 'react-bootstrap';

// Props :
// - show : booléen contrôlant l'affichage de la modale
// - onHide : fonction de fermeture de la modale
function GithubModal({ show, onHide }) {
    // État stockant les données récupérées depuis l'API GitHub
    const [githubData, setGithubData] = useState(null);

    // useEffect avec tableau de dépendances vide : exécuté une seule fois au chargement
    useEffect(() => {
        fetch('https://api.github.com/users/ad-pgn')
        .then(res => res.json())
        .then(data => setGithubData(data));
    }, []);

    return (
        <Modal show={show} onHide={onHide} centered>
            <Modal.Header closeButton>
                <Modal.Title>Mon profil GitHub</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {/* Affichage conditionnel : "Chargement..." tant que les données ne sont pas disponibles */}
                {githubData ? (
                    <Row className="align-items-center">
                        {/* Avatar GitHub */}
                        <Col xs={5}>
                            <img 
                            src={githubData.avatar_url} 
                            alt="Avatar GitHub" 
                            className="img-fluid rounded"
                            />
                        </Col>

                        {/* Informations du profil */}
                        <Col xs={7}>
                            {/* Nom ou login si le nom n'est pas renseigné */}
                            <p className="border-bottom pb-2">
                                <i className="bi bi-person me-2"></i>
                                <a href={githubData.html_url} target="_blank" rel="noopener noreferrer nofollow" className="text-white">
                                    {githubData.name || githubData.login}
                                </a>
                            </p>
                            {/* Localisation - "Non renseigné" si vide */}
                            <p className="border-bottom pb-2">
                                <i className="bi bi-geo-alt me-2"></i>{githubData.location || 'Non renseigné'}
                            </p>
                            {/* Bio - "Non renseigné" si vide */}
                            <p className="border-bottom pb-2">
                                <i className="bi bi-journal-text me-2"></i>{githubData.bio || 'Non renseigné'}
                            </p>
                            <p className="border-bottom pb-2">
                                <i className="bi bi-collection me-2"></i>Repositories : {githubData.public_repos}
                            </p>
                            <p className="border-bottom pb-2">
                                <i className="bi bi-people me-2"></i>Followers : {githubData.followers}
                            </p>
                            <p className="border-bottom pb-2">
                                <i className="bi bi-people me-2"></i>Following : {githubData.following}
                            </p>
                        </Col>
                    </Row>

                ) : (
                    <p>Chargement...</p>
                )}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>Fermer</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default GithubModal;