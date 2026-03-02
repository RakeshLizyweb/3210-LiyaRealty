import '../css/style-1.css';
import '../css/style-2.css';
import '../css/style.css';

import PathImage from '../images/property-invest-path.jpg';
import AboutImage from '../images/property-invest-about.jpg';

import Cta from "../sections/Cta"

function PropertyInvestmentConsulting(){
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
                backgroundPosition:"bottom",
            }}
            >
            <div className="service-path-overlay"></div>

            <div className="container position-relative text-center text-white">
                <h1 className="service-path-title">
                Property Investment Consulting
                </h1>
                <div className="custom-divider"></div>
                <p className="service-path-subtitle">
                Guiding investors toward high-performing real estate opportunities 
                through strategic analysis, market insights, and risk-managed investment planning.
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
                    <h6 className="service-about-subtitle">About Property Investment Consulting</h6>
                    <h2 className="service-about-title">
                    Strategic Real Estate Investments Backed by Data & Insight
                    </h2>

                    <div className="service-about-divider"></div>

                    <p className="service-about-text">
                    Our property investment consulting services help individuals and 
                    businesses identify profitable real estate opportunities aligned 
                    with their financial goals. We conduct in-depth market research, 
                    feasibility studies, and ROI analysis before recommending any investment.
                    </p>

                    <p className="service-about-text">
                    From portfolio diversification strategies to long-term capital 
                    appreciation planning, we provide clear guidance that minimizes risk 
                    and maximizes returns in a dynamic real estate market.
                    </p>

                    <div className="service-about-features">
                    <div className="feature-item">
                        <i className="fas fa-check-circle"></i>
                        <span>Comprehensive Market Analysis</span>
                    </div>
                    <div className="feature-item">
                        <i className="fas fa-check-circle"></i>
                        <span>ROI & Risk Assessment</span>
                    </div>
                    <div className="feature-item">
                        <i className="fas fa-check-circle"></i>
                        <span>Portfolio Diversification Planning</span>
                    </div>
                    <div className="feature-item">
                        <i className="fas fa-check-circle"></i>
                        <span>Long-Term Wealth Strategy</span>
                    </div>
                    </div>
                </div>

                {/* Right Image */}
                <div className="col-lg-6 text-center order-1 order-lg-2 order-sm-1">
                    <img
                    src={AboutImage}
                    alt="Property Investment Consulting"
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
                <h2 class="service-wcu-heading">Why Choose Our Property Investment Consulting</h2>
                <p class="service-wcu-sub">We help you make data-driven property decisions that maximize returns, reduce risks, and build long-term wealth.</p>

                <div class="service-wcu-cards">

                    <div class="service-wcu-card">
                    <div class="service-wcu-icon">
                        <i class="fa-solid fa-chart-pie"></i>
                    </div>
                    <div class="service-wcu-divider"></div>
                    <h3 class="service-wcu-title">Data-Driven Insights</h3>
                    <p class="service-wcu-text">Our investment strategies are backed by in-depth market research, growth analysis, and ROI projections to help you choose properties with strong appreciation potential.</p>
                    </div>

                    <div class="service-wcu-card">
                    <div class="service-wcu-icon">
                        <i class="fa-solid fa-magnifying-glass-dollar"></i>
                    </div>
                    <div class="service-wcu-divider"></div>
                    <h3 class="service-wcu-title">High-Return Opportunities</h3>
                    <p class="service-wcu-text">We identify emerging locations and high-growth projects, giving you access to investment opportunities that align with your financial goals.</p>
                    </div>

                    <div class="service-wcu-card">
                    <div class="service-wcu-icon">
                        <i class="fa-solid fa-hand-holding-dollar"></i>
                    </div>
                    <div class="service-wcu-divider"></div>
                    <h3 class="service-wcu-title">Personalized Investment Strategy</h3>
                    <p class="service-wcu-text">Every investor is different. We provide tailored guidance based on your budget, risk appetite, and long-term objectives to build a strong and balanced portfolio.</p>
                    </div>

                </div>
            </section>

        </>
    );
}

export default PropertyInvestmentConsulting