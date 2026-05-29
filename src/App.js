import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';

function App() {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column min-vh-100">
        <Header/>
          <main className="flex-grow-1">
            <Routes>
              <Route path='/' element={<Home />}/>
              <Route path='/services' element={<Services/>}/>
              <Route path='/portfolio' element={<Portfolio/>}/>
              <Route path='/contact' element={<div>Contact</div>}/>
              <Route path='/mentions-legales' element={<div>Mentions légales</div>}/>
            </Routes>
          </main>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;