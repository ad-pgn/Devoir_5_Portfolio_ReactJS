import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<div>Acceuil</div>}/>
        <Route path='/services' element={<div>Services</div>}/>
        <Route path='/portfolio' element={<div>Portfolio</div>}/>
        <Route path='/contact' element={<div>Contact</div>}/>
        <Route path='/mentions-legales' element={<div>Mentions légales</div>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;