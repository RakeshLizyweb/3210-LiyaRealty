import '../css/style-1.css';
import '../css/style-2.css';
import '../css/style.css';

import PathImage from '../images/service-document-path.jpg';
import AboutImage from '../images/service-document-about.jpg';

import Cta from "../sections/Cta"

function LegalDocumentationSupport(){
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
                Legal & Documentation Support
                </h1>
                <div className="custom-divider"></div>
                <p className="service-path-subtitle">
                Ensuring secure and compliant real estate transactions through 
                thorough legal verification, accurate documentation, and professional guidance at every step.
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
                    <h6 className="service-about-subtitle">About Legal & Documentation Support</h6>
                    <h2 className="service-about-title">
                    Secure Transactions Built on Strong Legal Foundations
                    </h2>

                    <div className="service-about-divider"></div>

                    <p className="service-about-text">
                    Our legal and documentation support services are designed to 
                    safeguard your real estate investments. We conduct detailed 
                    title verification, document scrutiny, and compliance checks 
                    to eliminate risks before any transaction is finalized.
                    </p>

                    <p className="service-about-text">
                    From agreement drafting and registration assistance to 
                    regulatory approvals and due diligence, we ensure every 
                    process is transparent, accurate, and legally sound.
                    </p>

                    <div className="service-about-features">
                    <div className="feature-item">
                        <i className="fas fa-check-circle"></i>
                        <span>Title & Ownership Verification</span>
                    </div>
                    <div className="feature-item">
                        <i className="fas fa-check-circle"></i>
                        <span>Agreement Drafting & Review</span>
                    </div>
                    <div className="feature-item">
                        <i className="fas fa-check-circle"></i>
                        <span>Regulatory Compliance Checks</span>
                    </div>
                    <div className="feature-item">
                        <i className="fas fa-check-circle"></i>
                        <span>Registration & Documentation Assistance</span>
                    </div>
                    </div>
                </div>

                {/* Right Image */}
                <div className="col-lg-6 text-center order-1 order-lg-2 order-sm-1">
                    <img
                    src={AboutImage}
                    alt="Legal & Documentation Support"
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
                <h2 class="service-wcu-heading">Why Choose Our Legal & Documentation Support</h2>
                <p class="service-wcu-sub">We ensure every transaction is legally sound, transparent, and fully compliant — giving you complete peace of mind.</p>

                <div class="service-wcu-cards">

                    <div class="service-wcu-card">
                    <div class="service-wcu-icon">
                        <i class="fa-solid fa-scale-balanced"></i>
                    </div>
                    <div class="service-wcu-divider"></div>
                    <h3 class="service-wcu-title">Legal Accuracy</h3>
                    <p class="service-wcu-text">Our team carefully verifies property titles, ownership history, and legal clearances to eliminate risks and protect your investment from future disputes.</p>
                    </div>

                    <div class="service-wcu-card">
                    <div class="service-wcu-icon">
                        <i class="fa-solid fa-file-circle-check"></i>
                    </div>
                    <div class="service-wcu-divider"></div>
                    <h3 class="service-wcu-title">Complete Documentation</h3>
                    <p class="service-wcu-text">From agreement drafting to registration paperwork, we manage every document with precision, ensuring compliance with all legal and regulatory requirements.</p>
                    </div>

                    <div class="service-wcu-card">
                    <div class="service-wcu-icon">
                        <i class="fa-solid fa-user-shield"></i>
                    </div>
                    <div class="service-wcu-divider"></div>
                    <h3 class="service-wcu-title">Secure & Transparent Process</h3>
                    <p class="service-wcu-text">We maintain clear communication at every stage, guiding you through procedures while safeguarding your interests throughout the transaction.</p>
                    </div>

                </div>
            </section>

        </>
    );
}






export default LegalDocumentationSupport