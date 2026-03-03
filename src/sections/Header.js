import '../css/style-1.css';
import '../css/style-2.css';
import '../css/style.css';


import logo from '../images/logo.jpeg'
import {Link} from 'react-router-dom';

function Header(){
    
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
                            <a  className='Header-contact-link' href='mailto:info@example.com'><i className="fa fa-envelope me-2"></i>info@example.com</a>
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
                <nav className="navbar navbar-expand-lg main-navbar">
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
                        <Link to="/" className="nav-link">Home</Link>
                        <Link to="/about" className="nav-link">About</Link>

                        {/* Hover Dropdown */}
                        <div className="nav-item dropdown custom-dropdown">
                            <a  className="nav-link dropdown-toggle" 
                                href="#" 
                                role="button" 
                                data-bs-toggle="dropdown"
                                aria-expanded="true">Properties</a>
                            <div className="dropdown-menu">
                            <Link to="/Properties/Chennai" className="dropdown-item">Chennai</Link>
                            <Link to="/Properties/Coimbatore" className="dropdown-item">Coimbatore</Link>
                            </div>
                        </div>

                        <div className="nav-item dropdown custom-dropdown">
                            <a  className="nav-link dropdown-toggle" 
                                href="#" 
                                role="button" 
                                data-bs-toggle="dropdown"
                                aria-expanded="true">Services</a>
                            <div className="dropdown-menu">
                            <Link to="/Services/PropertyDevelopment" className="dropdown-item">Property Development</Link>
                            <Link to="/Services/PropertySales" className="dropdown-item">Property Sales</Link>
                            <Link to="/Services/PropertyInvestmentConsulting" className="dropdown-item">Property Investment Consulting</Link>
                            <Link to="/Services/LegalDocumentationSupport" className="dropdown-item">Legal & Documentation Support</Link>
                            </div>
                        </div>

                        <Link to="/Contact" className="nav-link">Contact</Link>
                        </div>

                        <a href="tel:+91 94443 86103" className="btn join-btn">Join Us</a>
                    </div>
                    </div>
                </nav>
                {/* Navbar End */}
        </>
    );
}

export default Header