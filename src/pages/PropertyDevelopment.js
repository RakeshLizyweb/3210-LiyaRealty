import '../css/style-1.css';
import '../css/style-2.css';
import '../css/style.css';

import PathImage from '../images/property-dev-path.jpg';
import AboutImage from '../images/property-dev-about.jpg';

import Cta from "../sections/Cta"

function PropertyDevelopment(){
    return(
        <>
            <Path/>
            <ServiceAbout/>
            <ServiceWcu/>
            <Cta/>
        </>
    );
}

function Path(){
    return(
        <>
        <section
            className="service-path-section d-flex align-items-center"
            style={{
                background: `url(${PathImage})`,
            }}
            >
            <div className="service-path-overlay"></div>

            <div className="container position-relative text-center text-white">
                <h1 className="service-path-title">
                Property Development
                </h1>
                <div className="custom-divider"></div>
                <p className="service-path-subtitle">
                Transforming prime land into iconic residential and commercial spaces 
                through innovative design, strategic planning, and superior construction excellence.
                </p>
            </div>
            </section>
        </>
    );
}

function ServiceAbout(){
    return(
    <>
       <section className="service-about-section">
            <div className="container">
                <div className="row align-items-center">

                {/* Left Content */}
                <div className="col-lg-6 order-2 order-lg-1 order-sm-2">
                    <h6 className="service-about-subtitle">About Property Development</h6>
                    <h2 className="service-about-title">
                    Transforming Land into Landmark Developments
                    </h2>

                    <div className="service-about-divider"></div>

                    <p className="service-about-text">
                    Our property development services focus on creating high-value
                    residential and commercial spaces through strategic planning,
                    innovative design, and precise execution. We manage every stage —
                    from land acquisition and feasibility studies to construction and
                    final delivery.
                    </p>

                    <p className="service-about-text">
                    With a deep understanding of market trends and regulatory
                    requirements, we ensure every project is legally compliant,
                    financially viable, and built to deliver long-term appreciation.
                    </p>

                    <div className="service-about-features">
                    <div className="feature-item">
                        <i className="fas fa-check-circle"></i>
                        <span>End-to-End Project Management</span>
                    </div>
                    <div className="feature-item">
                        <i className="fas fa-check-circle"></i>
                        <span>Strategic Land Utilization</span>
                    </div>
                    <div className="feature-item">
                        <i className="fas fa-check-circle"></i>
                        <span>Quality Construction Standards</span>
                    </div>
                    <div className="feature-item">
                        <i className="fas fa-check-circle"></i>
                        <span>Regulatory & Legal Compliance</span>
                    </div>
                    </div>
                </div>

                {/* Right Image */}
                <div className="col-lg-6 text-center order-1 order-lg-2 order-sm-1">
                    <img
                    src={AboutImage}
                    alt="Property Development"
                    className="img-fluid service-about-img"
                    />
                </div>

                </div>
            </div>
            </section>
        
    </>
    );
}


function ServiceWcu(){
    return(
        <>
            <section class="service-wcu-section">

            <div class="service-wcu-label">Our Difference</div>
            <h2 class="service-wcu-heading">Why Choose Our Property Development</h2>
            <p class="service-wcu-sub">We combine expertise, precision, and genuine care to deliver results that matter — every time.</p>

            <div class="service-wcu-cards">

                <div class="service-wcu-card">
                <div class="service-wcu-icon">
                    <i class="fa-solid fa-shield-halved"></i>
                </div>
                <div class="service-wcu-divider"></div>
                <h3 class="service-wcu-title">Trusted Expertise</h3>
                <p class="service-wcu-text">Over a decade of hands-on experience across industries. Our team brings deep knowledge and proven methodologies to every project we take on.</p>
                </div>

                <div class="service-wcu-card">
                <div class="service-wcu-icon">
                    <i class="fa-regular fa-clock"></i>
                </div>
                <div class="service-wcu-divider"></div>
                <h3 class="service-wcu-title">On-Time Delivery</h3>
                <p class="service-wcu-text">We respect your time as much as our own. Every commitment comes with a clear timeline and a track record of delivering without compromise.</p>
                </div>

                <div class="service-wcu-card">
                <div class="service-wcu-icon">
                    <i class="fa-solid fa-handshake"></i>
                </div>
                <div class="service-wcu-divider"></div>
                <h3 class="service-wcu-title">Client-First Service</h3>
                <p class="service-wcu-text">Your success is our purpose. We build lasting partnerships through transparent communication, tailored solutions, and dedicated support at every step.</p>
                </div>

            </div>
            </section>

        </>
    );
}

export default PropertyDevelopment