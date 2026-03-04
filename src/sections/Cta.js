import '../css/style-1.css';
import '../css/style-2.css';
import '../css/style.css';

import {Link} from 'react-router-dom'

function Cta(){
    return(
        <>
        <section
            className="cta-section d-flex align-items-center"
            >
            <div className="container text-center text-white">
                <h2 className="cta-title mb-4">
                Let’s Turn Your Dream Home Into Reality
                </h2>

                <p className="cta-subtitle mb-5">
                Explore premium properties in prime locations with unmatched comfort and modern design.
                </p>

                <div className="d-flex justify-content-center gap-4 flex-wrap">
                <Link to="/Properties/Chennai" className="btn btn-cta-primary">
                    Explore Projects
                </Link>

                <a href="tel:+919444386103" className="btn btn-cta-outline">
                    Get Free Consultation
                </a>
                </div>
            </div>
            </section>
            
        </>
    );
}

export default Cta
