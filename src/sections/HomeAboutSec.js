import '../css/style-1.css';
import '../css/style-2.css';
import '../css/style.css';

import AboutImage from '../images/Home-About.jpg'

function HomeAboutSec(){
    return(
        <>
             <section className="homeAboutSectionWrapper">
            <div className="homeAboutSectionContainer">

                {/* Image */}
                <div className="homeAboutSectionImage">
                <img src={AboutImage} alt="Liya Realty" />
                </div>

                {/* Content */}
                <div className="homeAboutSectionContent">
                <span className="homeAboutSectionTag">
                    Welcome to Liyarealty
                </span>

                <h2 className="homeAboutSectionHeading">
                    Commitment. Transparency. Excellence.
                </h2>

                <p className="homeAboutSectionDescription">
                    Since our establishment in 2018, Liya Realty has been driven by
                    strong core values — commitment, transparency, customer
                    satisfaction, credibility, and professionalism. These principles
                    have helped us grow steadily and build lasting relationships in the
                    real estate industry.
                </p>

                <p className="homeAboutSectionDescription">
                    We strive to ensure every transaction closes successfully while
                    delivering value-added services such as real estate consulting,
                    home loan assistance, and portfolio management. Our expertise
                    covers both residential and commercial property investments.
                </p>

                <button className="homeAboutSectionBtn">
                    Explore Our Services
                </button>
                </div>

            </div>
            </section>
        </>
    );
}

export default HomeAboutSec;