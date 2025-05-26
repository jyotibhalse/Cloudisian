import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Header/header';
import Home from './Pages/Home/home';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItConsulting from './Pages/ItConsulting/ItConsulting';
import Rnd from './Pages/Rnd/Rnd';
import Training from './Pages/Training/Training';
import Recruitments from './Pages/Recruitments/Recruitments';
import UsaEmbedded from './Pages/UsaEmbedded/UsaEmbedded';
import Careers from './Pages/Careers/Careers';
import Coaching from './Pages/Coaching/coaching';
import Events from './Pages/Events/Events';
import Testimonials from './Pages/Testimonials/Testimonials';
import EsrNgo from './Pages/CsrNgo/CsrNgo';
import Contact from './Pages/contact/contact';
import About from './Pages/AboutUs/about';
import Footer from './Components/Footer/footer';
import './App.css';
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/contact' element={<Contact/>}/>
          <Route path="/it-consulting" element={<ItConsulting />} />
          <Route path="/rnd" element={<Rnd />} />
          <Route path="/training" element={<Training />} />
          <Route path="/recruitments" element={<Recruitments />} />
          <Route path="/usa-embedded" element={<UsaEmbedded />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/coaching" element={<Coaching />} />
          <Route path="/events" element={<Events />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/ngo" element={<EsrNgo />} />
          <Route path='/about' element={<About/>}/>
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
