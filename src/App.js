import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "@fortawesome/fontawesome-free/css/all.min.css";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import './css/style-1.css';
import './css/style-2.css';
import './css/style.css';

import Header from "./sections/Header";
import Footer from "./sections/Footer";

import Home from "./pages/Home";
import About from "./pages/About";

import Chennai from "./pages/Chennai";
import Coimbatore from "./pages/Coimbatore";

import PropertyDevelopment from './pages/PropertyDevelopment';
import PropertyInvestmentConsulting from './pages/PropertyInvestmentConsulting';
import PropertySales from './pages/PropertySales';
import LegalDocumentationSupport from './pages/LegalDocumentationSupport';

import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <Router>
        <ScrollToTop/>
        <Header/>
        <Routes>
            <Route path="*" element={<Home/>} />
            <Route path="/About" element={<About/>} />
            <Route path="/Properties/Chennai" element={<Chennai/>} />
            <Route path="/Properties/Coimbatore" element={<Coimbatore/>} />
            
            <Route path="/Services/PropertyDevelopment" element={<PropertyDevelopment/>} />
            <Route path="/Services/PropertyInvestmentConsulting" element={<PropertyInvestmentConsulting/>} />
            <Route path="/Services/PropertySales" element={<PropertySales/>} />
            <Route path="/Services/LegalDocumentationSupport" element={<LegalDocumentationSupport/>} />

            <Route path="/Contact" element={<Contact/>} />
        </Routes>

        <Footer/>
        <WhasappFloat/>
      
      </Router>
      
    </>
  );
}

function WhasappFloat(){
  return(
    <>
    
  <div class="wat-float">
    <a class="wat-float-btn" href="https://wa.me/+919444386103?text=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services.%20Please%20share%20the%20details" target="_blank" rel="noopener" aria-label="Chat on WhatsApp">
      <i class="fa-brands fa-whatsapp wat-float-btn-icon"></i>
      <span class="wat-float-online"></span>
    </a>
  </div>
    </>

  );
}

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default App;
