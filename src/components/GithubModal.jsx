import { useState, useEffect } from 'react';
import { Modal, Button, Row, Col } from 'react-bootstrap';

function GithubModal({ show, onHide }) {
    const [githubData, setGithubData] = useState(null);

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
                {githubData ? (
                    <Row className="align-items-center">
                        <Col xs={5}>
                            <img 
                            src={githubData.avatar_url} 
                            alt="Avatar GitHub" 
                            className="img-fluid rounded"
                            />
                        </Col>
                        <Col xs={7}>
                            <p className="border-bottom pb-2">
                                <i className="bi bi-person me-2"></i>
                                <a href={githubData.html_url} target="_blank" rel="noopener noreferrer nofollow" className="text-white">
                                    {githubData.name || githubData.login}
                                </a>
                            </p>
                            <p className="border-bottom pb-2">
                                <i className="bi bi-geo-alt me-2"></i>{githubData.location || 'Non renseigné'}
                            </p>
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