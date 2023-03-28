import Home from './pages/Home';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  
import './App.css';
import Footer from './components/Footer';
import ServiceDetail from './components/ServiceDetail';
import Whatsapp from './components/whatsapp/Whatsapp';
import AboutPage from './pages/About';
import Error from './pages/Error';

function App() {
  return (
    <div className="App">
      <Router>
        <Whatsapp />
        <Navbar />
        <Routes>
          <Route path="/"  element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:category" element={<ServiceDetail />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
