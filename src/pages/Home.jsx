import { useState } from 'react';
import {Container, Row, Col, Button, ProgressBar} from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import heroBg from '../assets/images/hero-bg.jpg';
import johnDoeAbout from '../assets/images/john-doe-about.jpg';
import GithubModal from '../components/GithubModal';

function Home() {
    const [showModal, setShowModal] = useState(false);

    return (
      <>
        <Helmet>
            <title>John Doe - Développeur web full stack</title>
            <meta name="description" content="John Doe, développeur web full stack basé à Lyon. Découvrez mon portfolio, mes services et contactez-moi pour vos projets web." />
        </Helmet>
        
        {/* Section Hero */}
        <section className="hero d-flex align-items-center justify-content-center text-white text-center" style={{backgroundImage: `url(${heroBg})`}}>
            <div>
                <h1>Bonjour, je suis John Doe</h1>
                <h2>Développeur web full stack</h2>
                <Button variant="danger" className="mt-3" onClick={() => setShowModal(true)}>
                    En savoir plus
                </Button>
            </div>
        </section>

        {/* Section À propos + Compétences */}
        <section className="py-5">
            <Container>
                <Row className="bg-white rounded shadow p-4">

                    {/* À propos */}
                    <Col md={6} className="mb-4 mb-md-0">
                        <h2>À propos</h2>
                        <hr className="border-primary border-2 opacity-100 w-25" />
                        <img src={johnDoeAbout} alt="John Doe" className="img-fluid rounded mb-3" />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, necessitatibus consectetur tempore perferendis nostrum, ex delectus reiciendis impedit aut iure enim placeat? Natus, neque at?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, necessitatibus consectetur tempore perferendis nostrum, ex delectus reiciendis impedit aut iure enim placeat? Natus, neque at?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, necessitatibus consectetur tempore perferendis nostrum, ex delectus reiciendis impedit aut iure enim placeat? Natus, neque at?</p>
                    </Col>

                    {/* Compétences */}
                    <Col md={6}>
                        <h2>Mes compétences</h2>
                        <hr className="border-primary border-2 opacity-100 w-25" />
                        <p className="mb-1">HTML5 90%</p>
                        <ProgressBar variant="danger" now={90} className="mb-3" />
                        <p className="mb-1">CSS3 80%</p>
                        <ProgressBar variant="info" now={80} className="mb-3" />
                        <p className="mb-1">JAVASCRIPT 70%</p>
                        <ProgressBar variant="warning" now={70} className="mb-3" />
                        <p className="mb-1">PHP 60%</p>
                        <ProgressBar variant="success" now={60} className="mb-3" />
                        <p className="mb-1">REACT 50%</p>
                        <ProgressBar variant="primary" now={50} className="mb-3" />
                    </Col>

                </Row>
            </Container>
        </section>

        {/* Modale GitHub */}
        <GithubModal show={showModal} onHide={() => setShowModal(false)} />
      </>
    );
}

export default Home;