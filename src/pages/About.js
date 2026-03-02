import '../css/style-1.css';
import '../css/style-2.css';
import '../css/style.css';

import Cta from '../sections/Cta';

import AboutSec1 from '../images/About-page-AboutSec-1.jpg';
import AboutSec2 from '../images/About-page-AboutSec-2.jpg';

import AboutWcu from '../sections/AboutWcu';

function About(){
    return(
        <>
            <AboutPath/>
            <AboutSection/>
            <AboutMissionAndVision/>
            <AboutWcu/>
            <Cta/>
        </>
    );
}

function AboutPath(){
    return(
        <>
             <section className="aboutPathWrapperX9">
            <div className="container text-left text-white">
                <h1 className="aboutPathHeadingX9">About Us</h1>
                <p className="aboutPathSubheadingX9">
                Learn more about our vision, mission, and commitment to excellence.
                </p>
            </div>
            </section>
        </>
    );
}

function AboutSection(){
    return(
        <>
          <section className="aboutpage-section">
            <div className="container">
                <div className="row align-items-center ">

                {/* Left Images */}
                <div className="col-lg-6 position-relative">
                    <div className="aboutpage-image-wrapper">
                    
                    <img
                        src={AboutSec1}
                        alt="About Main"
                        className="img-fluid aboutpage-img-main"
                    />

                    <img
                        src={AboutSec2}
                        alt="About Secondary"
                        className="img-fluid aboutpage-img-secondary"
                    />

                    </div>
                </div>

                {/* Right Content */}
                <div className="col-lg-6 mt-4 mt-lg-0">
                    <div className="aboutpage-content">
                    <h6 className="aboutpage-subtitle">ABOUT Liyarealty</h6>
                    <h2 className="aboutpage-title">
                    Turning Land into Landmarks Across Prime Locations
                    </h2>
                    <p className="aboutpage-text">
                    Liyarealty is a trusted real estate company specializing in premium
                    residential and commercial properties. We focus on strategic locations,
                    modern architecture, and long-term investment value.
                    </p>
                    <p className="aboutpage-text">
                    From planning to project completion, our team ensures transparency,
                    legal clarity, and customer-first service in every development we deliver.
                    </p>

                    <div className="aboutpage-icon-wrapper">
      
                         <div className="aboutpage-icon-box">
                            <i className="fas fa-map-marked-alt aboutpage-icon"></i>
                            <span>Location</span>
                        </div>

                        <div className="aboutpage-icon-box">
                            <i className="fas fa-file-contract aboutpage-icon"></i>
                            <span>Transparency</span>
                        </div>

                        <div className="aboutpage-icon-box">
                            <i className="fas fa-home aboutpage-icon"></i>
                            <span>Lifestyle</span>
                        </div>

                        <div className="aboutpage-icon-box">
                            <i className="fas fa-chart-line aboutpage-icon"></i>
                            <span>Growth</span>
                        </div>

                        <div className="aboutpage-icon-box">
                            <i className="fas fa-shield-alt aboutpage-icon"></i>
                            <span>Security</span>
                        </div>

                        <div className="aboutpage-icon-box">
                            <i className="fas fa-award aboutpage-icon"></i>
                            <span>Excellence</span>
                        </div>


                    </div>

                    </div>
                </div>

                </div>
            </div>
            </section>
        </>
    );
}


function AboutMissionAndVision(){
    return(
    <>
        
        <section className="about-page-mandv-section">

        <div className="about-page-mandv-divider">
            <div className="about-page-mandv-divider-line"></div>
            <div className="about-page-mandv-divider-dot"></div>
            <div className="about-page-mandv-divider-line"></div>
        </div>

        <div className="about-page-mandv-cards">

            <div className="about-page-mandv-card">
                <div className="about-page-mandv-card-tag">Our Vision</div>
                <h2 className="about-page-mandv-card-title">Shaping Landmarks That Define Tomorrow</h2>
                <p className="about-page-mandv-card-text">
                    We envision a future where thoughtfully designed spaces elevate lifestyles and create lasting
                    value. Our goal is to transform prime locations into thriving communities through innovative
                    development, sustainable practices, and uncompromising quality standards.
                </p>
            </div>

            <div className="about-page-mandv-card">
                <div className="about-page-mandv-card-tag">Our Mission</div>
                <h2 className="about-page-mandv-card-title">Building Trust Through Excellence & Integrity</h2>
                <p className="about-page-mandv-card-text">
                    Our mission is to deliver premium residential and commercial properties that combine modern
                    design, strategic locations, and clear legal assurance. We are committed to transparency,
                    customer satisfaction, and creating investment opportunities that grow in value over time.
                </p>
            </div>

        </div>

       <div className="about-page-mandv-values">
            <span className="about-page-mandv-values-label">Core Values</span>
            <div className="about-page-mandv-values-divider"></div>
            <div className="about-page-mandv-values-list">
                <span className="about-page-mandv-value-pill">Trust</span>
                <span className="about-page-mandv-value-pill">Quality</span>
                <span className="about-page-mandv-value-pill">Commitment</span>
                <span className="about-page-mandv-value-pill">Location</span>
                <span className="about-page-mandv-value-pill">Sustainability</span>
                <span className="about-page-mandv-value-pill">Value</span>
            </div>
        </div>

        </section>

            
            </>
    );
}



export default About