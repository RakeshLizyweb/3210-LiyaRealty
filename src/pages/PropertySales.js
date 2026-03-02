import '../css/style-1.css';
import '../css/style-2.css';
import '../css/style.css';

import PathImage from '../images/property-sales-path.jpg';
import AboutImage from '../images/property-sales-about.jpg';

import Cta from "../sections/Cta"

function PropertySales(){
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
                Property Sales
                </h1>
                <div className="custom-divider"></div>
                <p className="service-path-subtitle">
                Connecting buyers with premium residential and commercial properties 
                through market expertise, strategic marketing, and seamless transaction management.
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
                    <h6 className="service-about-subtitle">About Property Sales</h6>
                    <h2 className="service-about-title">
                    Delivering Results Through Strategic Property Sales
                    </h2>

                    <div className="service-about-divider"></div>

                    <p className="service-about-text">
                    Our property sales services are designed to help owners maximize value 
                    and buyers secure the right investment. From property evaluation and 
                    pricing strategy to targeted marketing and negotiations, we manage 
                    the complete sales process with precision.
                    </p>

                    <p className="service-about-text">
                    With deep market knowledge and strong buyer networks, we ensure 
                    faster closures, transparent communication, and legally secure 
                    transactions that protect your interests at every stage.
                    </p>

                    <div className="service-about-features">
                    <div className="feature-item">
                        <i className="fas fa-check-circle"></i>
                        <span>Accurate Property Valuation</span>
                    </div>
                    <div className="feature-item">
                        <i className="fas fa-check-circle"></i>
                        <span>Targeted Marketing Strategies</span>
                    </div>
                    <div className="feature-item">
                        <i className="fas fa-check-circle"></i>
                        <span>Expert Negotiation Support</span>
                    </div>
                    <div className="feature-item">
                        <i className="fas fa-check-circle"></i>
                        <span>Secure & Transparent Transactions</span>
                    </div>
                    </div>
                </div>

                {/* Right Image */}
                <div className="col-lg-6 text-center order-1 order-lg-2 order-sm-1">
                    <img
                    src={AboutImage}
                    alt="Property Sales"
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
                <h2 class="service-wcu-heading">Why Choose Our Property Sales</h2>
                <p class="service-wcu-sub">We connect the right buyers with the right properties through strategy, transparency, and market expertise.</p>

                <div class="service-wcu-cards">

                    <div class="service-wcu-card">
                    <div class="service-wcu-icon">
                        <i class="fa-solid fa-chart-line"></i>
                    </div>
                    <div class="service-wcu-divider"></div>
                    <h3 class="service-wcu-title">Market Expertise</h3>
                    <p class="service-wcu-text">With in-depth knowledge of local market trends and pricing strategies, we ensure your property is positioned to attract serious buyers and maximize value.</p>
                    </div>

                    <div class="service-wcu-card">
                    <div class="service-wcu-icon">
                        <i class="fa-solid fa-bullhorn"></i>
                    </div>
                    <div class="service-wcu-divider"></div>
                    <h3 class="service-wcu-title">Fast & Strategic Closures</h3>
                    <p class="service-wcu-text">We use targeted marketing, strong buyer networks, and smart negotiation strategies to close deals efficiently without compromising on your returns.</p>
                    </div>

                    <div class="service-wcu-card">
                    <div class="service-wcu-icon">
                        <i class="fa-solid fa-file-signature"></i>
                    </div>
                    <div class="service-wcu-divider"></div>
                    <h3 class="service-wcu-title">Transparent Process</h3>
                    <p class="service-wcu-text">From listing to final registration, we maintain complete transparency, clear communication, and professional guidance to ensure a smooth and stress-free sale.</p>
                    </div>

                </div>
            </section>

        </>
    );
}


export default PropertySales