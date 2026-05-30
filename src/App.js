import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Composants réutilisables
import Header from './components/Header';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import LegalNotice from './pages/LegalNotice';

function App() {
  return (
    // BrowserRouter : active la navigation par URL
    <BrowserRouter>
      {/* Structure flex pour coller le footer en bas de page */}
      <div className="d-flex flex-column min-vh-100">
        <Header/>
          {/* flex-grow-1 : le contenu occupe tout l'espace disponible */}
          <main className="flex-grow-1">
            <Routes>
              <Route path='/' element={<Home />}/>
              <Route path='/services' element={<Services/>}/>
              <Route path='/portfolio' element={<Portfolio/>}/>
              <Route path='/contact' element={<Contact/>}/>
              <Route path='/mentions-legales' element={<LegalNotice/>}/>
            </Routes>
          </main>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;