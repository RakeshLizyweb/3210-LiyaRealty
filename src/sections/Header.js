import '../css/style-1.css';
import '../css/style-2.css';
import '../css/style.css';

import { useEffect,useState } from "react";
import logo from '../images/logo.jpeg'
import {Link} from 'react-router-dom';


function Header(){

    const [menuOpen, setMenuOpen] = useState(false)
    const [propertiesOpen, setPropertiesOpen] = useState(false)
    const [servicesOpen, setServicesOpen] = useState(false)

    const toggleMenu = () => setMenuOpen(!menuOpen)
    const toggleProperties = () => setPropertiesOpen(!propertiesOpen)
    const toggleServices = () => setServicesOpen(!servicesOpen)

    const closeMenu = () => {
    setMenuOpen(false)
    setPropertiesOpen(false)
    setServicesOpen(false)
}
    
    return(
            <>
            {/* Topbar Start */}
                <div className="topbar">
                    <div className="container-fluid">
                    <div className="row py-2 px-lg-5">
                        <div className="col-lg-6 text-center text-lg-start mb-2 mb-lg-0">
                        <div className="topbar-left">
                            <small className='top-contact-info'>
                            <a className='Header-contact-link' href='tel:+91 94443 86103 '><i className="fa fa-phone-alt me-2"></i>+91 94443 86103 </a>
                            </small>
                            <span className="divider">|</span>
                            <small className='top-contact-info'>
                            <a className='Header-contact-link' href='tel:+91 94443 64504'><i className="fa fa-phone-alt me-2"></i>+91 94443 64504</a>
                            </small>
                            <span className="divider">|</span>
                            <small className='top-contact-info'>
                            <a  className='Header-contact-link' href='mailto:sales@liyagroups.in'><i className="fa fa-envelope me-2"></i>sales@liyagroups.in</a>
                            </small>
                        </div>
                        </div>

                        <div className="col-lg-6 text-center text-lg-end">
                        <div className="topbar-social">
                            <a href="#"><i className="fab fa-facebook-f"></i></a>
                            <a href="#"><i className="fab fa-twitter"></i></a>
                            <a href="#"><i className="fab fa-linkedin-in"></i></a>
                            <a href="#"><i className="fab fa-instagram"></i></a>
                            <a href="#"><i className="fab fa-youtube"></i></a>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                {/* Topbar End */}

                {/* Navbar Start */}
                <nav className="navbar navbar-expand-lg main-navbar desktop-menu">
                    <div className="container-fluid px-lg-5">
                    <a href="/" className="navbar-brand logo">
                        <img src={logo} className='navbar-com-logo'></img>
                    </a>

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarCollapse"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div
                        className="collapse navbar-collapse justify-content-between"
                        id="navbarCollapse"
                    >
                        <div className="navbar-nav mx-auto">
                        <Link to="/" className="nav-link" onClick={closeMenu}>Home</Link>
                        <Link to="/about" className="nav-link" onClick={closeMenu}>About</Link>

                        {/* Hover Dropdown */}
                        <div className="nav-item dropdown custom-dropdown">
                            <a  className="nav-link dropdown-toggle" 
                                href="#" 
                                role="button" 
                                data-bs-toggle="dropdown"
                                aria-expanded="true">Properties</a>
                            <div className="dropdown-menu">
                            <Link to="/Properties/Chennai" className="dropdown-item" onClick={closeMenu}>Chennai</Link>
                            <Link to="/Properties/Coimbatore" className="dropdown-item" onClick={closeMenu}>Coimbatore</Link>
                            </div>
                        </div>

                        <div className="nav-item dropdown custom-dropdown">
                            <a  className="nav-link dropdown-toggle" 
                                href="#" 
                                role="button" 
                                data-bs-toggle="dropdown"
                                aria-expanded="true">Services</a>
                            <div className="dropdown-menu">
                            <Link to="/Services/PropertyDevelopment" className="dropdown-item" onClick={closeMenu}>Property Development</Link>
                            <Link to="/Services/PropertySales" className="dropdown-item" onClick={closeMenu}>Property Sales</Link>
                            <Link to="/Services/PropertyInvestmentConsulting" className="dropdown-item" onClick={closeMenu}>Property Investment Consulting</Link>
                            <Link to="/Services/LegalDocumentationSupport" className="dropdown-item" onClick={closeMenu}>Legal & Documentation Support</Link>
                            </div>
                        </div>

                        <Link to="/Contact" className="nav-link" onClick={closeMenu}>Contact</Link>
                        </div>

                        <a href="tel:+91 94443 86103" className="btn join-btn">Join Us</a>
                    </div>
                    </div>
                </nav>
                {/* Navbar End */}



                {/* ===== MOBILE MENU ===== */}
                <div className="mobile-menu">

                <div className="mobile-header">
                    <img src={logo} className="mobile-logo" />
                    <button className="menu-toggle" onClick={toggleMenu}>
                    ☰
                    </button>
                </div>

                <div className={`mobile-nav ${menuOpen ? "open" : ""}`}>

                    <Link to="/" className="mobile-link" onClick={closeMenu}>Home</Link>
                    <Link to="/about" className="mobile-link" onClick={closeMenu}>About</Link>

                    {/* Properties */}
                    <div className="mobile-dropdown">
                    <button onClick={toggleProperties} className="mobile-dropdown-btn">
                        Properties
                    </button>

                    {propertiesOpen && (
                        <div className="mobile-dropdown-menu">
                        <Link to="/Properties/Chennai" onClick={closeMenu}>Chennai</Link>
                        <Link to="/Properties/Coimbatore" onClick={closeMenu}>Coimbatore</Link>
                        </div>
                    )}
                    </div>

                    {/* Services */}
                    <div className="mobile-dropdown">
                    <button onClick={toggleServices} className="mobile-dropdown-btn">
                        Services
                    </button>

                    {servicesOpen && (
                        <div className="mobile-dropdown-menu">
                        <Link to="/Services/PropertyDevelopment" onClick={closeMenu}>Property Development</Link>
                        <Link to="/Services/PropertySales" onClick={closeMenu}>Property Sales</Link>
                        <Link to="/Services/PropertyInvestmentConsulting" onClick={closeMenu}>Property Investment Consulting</Link>
                        <Link to="/Services/LegalDocumentationSupport" onClick={closeMenu}>Legal & Documentation Support</Link>
                        </div>
                    )}
                    </div>

                    <Link to="/Contact" className="mobile-link" onClick={closeMenu}>Contact</Link>

                    <a href="tel:+919444386103" className="mobile-join-btn">
                    Join Us
                    </a>

                </div>
                </div>
        </>
    );
}

export default Header