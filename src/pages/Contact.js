import '../css/style-1.css';
import '../css/style-2.css';
import '../css/style.css';

import contactpath from '../images/Contcact-path.jpg';

function Contact(){
    return(

        <>
            {/* Header Section */}
                <section
                className="contact-page-header"
                style={{
                    backgroundImage: `url(${contactpath})`,
                    backgroundAttachment:'fixed',
                }}
                >
                <div className="contact-page-overlay"></div>

                <div className="contact-page-header-content text-white">
                    <h1 className="contact-page-main-title text-white">Contact Us</h1>
                    <p className="contact-page-subtitle text-white">
                    We’re Here to Help You Find Your Dream Property
                    </p>
                </div>
                </section>


                {/* Contact Info Cards */}
                <section className="contact-page-info-section">
                <div className="contact-page-container container">

                    <div className="contact-page-heading">
                    <h2>Get in Touch With Us</h2>
                    <p>We're here to assist you anytime</p>
                    </div>

                    <div className="contact-page-card-wrapper row gap-5 justify-content-center">
                   
                    <div className="col-12 col-lg-3  contact-page-card">
                        <div className="contact-page-icon">
                        <i className="fa-solid fa-phone"></i>
                        </div>
                        <h3>Phone Number</h3><br/>
                        <a href='tel:+919150414988'>+91 91504 14988</a><br/>
                        <a href='tel:+919080051621'>+91 90800 51621</a>
                        
                    </div>

                    <div className="col-12 col-lg-3 contact-page-card">
                        <div className="contact-page-icon">
                        <i className="fa-solid fa-envelope"></i>
                        </div>
                        <h3 className='pb-3'>Email</h3>
                        <a href='mailto:info@gmail.com'   >info@gmail.com</a>
                    </div>

                    <div className="col-12 col-lg-3 contact-page-card">
                        <div className="contact-page-icon">
                        <i className="fa-solid fa-location-dot"></i>
                        </div>
                        <h3>Address</h3>
                        <p className='pt-3'>
                        183, 184 Subramaniam Road <br />
                        RS Puram, Coimbatore 641002
                        </p>
                    </div>

                     </div>

                </div>
                </section>


                {/* Contact Form + Map */}
                <section className="contact-page-form-section">
                <div className="contact-page-container">
                    <div className="contact-page-row">

                    <div className="contact-page-form-col">
                        <div className="contact-page-form-card">
                        <h3 className="contact-page-form-title">Send Us a Message</h3>

                        <form>
                            <input type="text" className="contact-page-input" placeholder="Your Name" required />
                            <input type="email" className="contact-page-input" placeholder="Your Email" required />
                            <input type="tel" className="contact-page-input" placeholder="Your Phone" />
                            <textarea className="contact-page-textarea" rows="4" placeholder="Your Message" required></textarea>
                            <button type="submit" className="contact-page-button">Submit</button>
                        </form>
                        </div>
                    </div>

                    <div className="contact-page-map-col">
                        <h3 className="contact-page-map-title text-white pb-3 text-center">VISIT US</h3>
                        <div className="contact-page-map-wrapper">
                        <iframe
                            src="https://www.google.com/maps?q=Coimbatore,Tamilnadu&output=embed"
                            title="map"
                            loading="lazy"
                        ></iframe>
                        </div>
                    </div>

                    </div>
                </div>
                </section>


                {/* FAQ Section */}
                <section className="contact-page-faq-section">
                <div className="contact-page-faq-container">

                    <h2 className="contact-page-faq-title">
                    Frequently Asked Questions
                    </h2>

                    <details className="contact-page-faq-item">
                    <summary>What types of properties do you offer?</summary>
                    <div>
                        We offer residential plots, luxury villas, apartments, and commercial properties in prime locations.
                    </div>
                    </details>

                    <details className="contact-page-faq-item">
                    <summary>How can I schedule a site visit?</summary>
                    <div>
                        You can contact us via phone, WhatsApp, or fill out the contact form to schedule a free site visit.
                    </div>
                    </details>

                    <details className="contact-page-faq-item">
                    <summary>Do you assist with home loans?</summary>
                    <div>
                        Yes, we assist our clients with complete home loan guidance and documentation support.
                    </div>
                    </details>

                    <details className="contact-page-faq-item">
                    <summary>Do you assist with home loans?</summary>
                    <div>
                        Yes, we assist our clients with complete home loan guidance and documentation support.
                    </div>
                    </details>

                </div>
                </section>


        </>
    );
}

export default Contact