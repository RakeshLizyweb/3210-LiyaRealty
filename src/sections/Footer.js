import '../css/style-1.css';
import '../css/style-2.css';
import '../css/style.css';

import {Link} from 'react-router-dom';
import logo from '../images/logo.jpeg';

function Footer(){
    return(
        <>
           <div className="container-fluid footer-main text-white py-3 px-sm-3 px-md-5">
            <div className="row pt-5">

                {/* Column 1 */}
                <div className="col-lg-4 col-md-6 mb-5  footer-inner-sec">
                <a
                    href="/"
                    className="navbar-brand font-weight-bold text-white p-0"
                    style={{ fontSize: "40px", lineHeight: "40px" }}
                >
                    <img src={logo} className='footer-com-logo' alt='footlogo'></img>
                </a>

                <p className='text-black pt-3' >
                    Liya Realty, established in 2018, is built on commitment, transparency, and excellence. We help clients find the right residential and commercial properties with trusted guidance and value-added services.
                </p>

                <div className="d-flex justify-content-start mt-4">
                    <a
                    className="btn btn-outline-black social-icons-footer rounded-circle text-center mr-2 px-0"
                    style={{ width: "38px", height: "38px", marginLeft:"10px"  }}
                    href=""
                    >
                    <i className="fab fa-twitter"></i>
                    </a>

                    <a
                    className="btn btn-outline-black social-icons-footer rounded-circle text-center mr-2 px-0"
                    style={{ width: "38px", height: "38px", marginLeft:"10px"  }}
                    href=""
                    >
                    <i className="fab fa-facebook-f"></i>
                    </a>

                    <a
                    className="btn btn-outline-black social-icons-footer rounded-circle text-center mr-2 px-0"
                    style={{ width: "38px", height: "38px" , marginLeft:"10px" }}
                    href=""
                    >
                    <i className="fab fa-linkedin-in"></i>
                    </a>

                    <a
                    className="btn btn-outline-black social-icons-footer rounded-circle text-center mr-2 px-0"
                    style={{ width: "38px", height: "38px", marginLeft:"10px"  }}
                    href=""
                    >
                    <i className="fab fa-instagram"></i>
                    </a>
                </div>
                </div>


                <div className="col-lg-4 col-md-6 mb-5 footer-inner-sec">
                <h3 className="text-black mb-4">Quick Links</h3>

                <div className="d-flex flex-column justify-content-start">
                    <Link className="footer-menu-item mb-2" to="/">
                    <i className="fa fa-angle-right mr-2"></i>Home
                    </Link>
                    <Link className="footer-menu-item mb-2" to="/About">
                    <i className="fa fa-angle-right mr-2"></i>About
                    </Link>
                    <Link className="footer-menu-item mb-2" to="Properties">
                    <i className="fa fa-angle-right mr-2"></i>Properties
                    </Link>
                    <Link className="footer-menu-item mb-2" to="/Services/PropertyDevelopment">
                    <i className="fa fa-angle-right mr-2"></i>Services
                    </Link>
                    <Link className="footer-menu-item mb-2" to="Contact">
                    <i className="fa fa-angle-right mr-2"></i>Contact
                    </Link>
                    
                </div>
                </div>

                {/* Column 3 */}
                <div className="col-lg-4 col-md-6 mb-5 footer-inner-sec">
                <h3 className="text-black mb-4">Get In Touch</h3>

                <div className="d-flex">
                    <h4 className="fa fa-map-marker-alt foot-git-icon"></h4>
                    <div className="pl-3">
                    <h5 className="text-black">Address</h5>
                    <p>Coimbatore</p>
                    </div>
                </div>

                <div className="d-flex">
                    <h4 className="fa fa-envelope foot-git-icon"></h4>
                    <div className="pl-3">
                    <h5 className="text-black">Email</h5>
                    <a href='mailto:sales@liyagroups.in'>sales@liyagroups.in</a>
                    </div>
                </div>

                <div className="d-flex pt-2">
                    <h4 className=" fa fa-phone-alt foot-git-icon"></h4>
                    <div className="pl-3">
                    <h5 className="text-black">Phone</h5>
                    <a href='tel:+919444386103 '>+91 94443 86103</a>
                    </div>
                </div>

                <div className="d-flex pt-2">
                    <h4 className=" fa fa-phone-alt foot-git-icon"></h4>
                    <div className="pl-3">
                    <h5 className="text-black">Phone</h5>
                    <a href='tel:+919444364504 '>+91 94443 64504</a>
                    </div>
                </div>
                </div>

                
        
            </div>

            {/* Bottom Bar */}
            <div
                className="container-fluid pt-2"
                style={{ borderTop: "1px solid rgba(23, 162, 184, 0.2)" }}
            >
                <p className="m-0 text-center text-black">
                &copy;
                <Link className="text-black font-weight-bold" to="/">
                    {" "}Liyarealty
                </Link>
                . All Rights Reserved. Designed by{" "}
                <a
                    className="text-black font-weight-bold"
                    href="www.lizyweb.com"
                >
                    Lizyweb
                </a>
                
                </p>
            </div>
            </div>
        </>
    );
}

export default Footer