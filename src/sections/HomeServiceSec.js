import '../css/style-1.css';
import '../css/style-2.css';
import '../css/style.css';

import Project1 from '../images/project1.jpg'


function HomeServiceSec(){
 
    return(
        <> 
            <section className="homeServiceSection py-5">
                <div className="container">

                    <div className="row text-center mb-5">
                    <div className="col-12">
                        <h2 className="homeServiceTitle">Our New Projects</h2>
                        <p className="homeServiceSubtitle">
                        Discover premium residential opportunities in prime locations.
                        </p>
                    </div>
                    </div>

                    <div className="row">

                    {/* 1 */}
                    <div className="col-lg-4 col-md-6 mb-4">
                        <div className="homeServiceCard">
                        <div className="homeServiceImage">
                            <img src={Project1} alt="G Square Western Ghats" />
                            <div className="homeServiceOverlay">
                            <span>Residential Plots</span>
                            </div>
                        </div>
                        <div className="homeServiceContent">
                            <h5>G Square Western Ghats</h5>
                            <p className="homeServiceLocation">Palanthurai Road, Coimbatore</p>
                            <p className="homeServiceSize">3 - 4 Cents</p>
                            <p className="homeServicePrice">₹ 19.50 Lakhs Onwards</p>
                            <a href="tel:+919876543210" className="homeServiceBtn">Contact Now</a>
                        </div>
                        </div>
                    </div>

                    {/* 2 */}
                    <div className="col-lg-4 col-md-6 mb-4">
                        <div className="homeServiceCard">
                        <div className="homeServiceImage">
                            <img src={Project1} alt="G Square Blossom" />
                            <div className="homeServiceOverlay">
                            <span>Residential Plots</span>
                            </div>
                        </div>
                        <div className="homeServiceContent">
                            <h5>G Square Blossom</h5>
                            <p className="homeServiceLocation">Avinashi, Coimbatore</p>
                            <p className="homeServiceSize">3 - 4 Cents</p>
                            <p className="homeServicePrice">₹ 30 Lakhs Onwards</p>
                            <a href="tel:+919876543210" className="homeServiceBtn">Contact Now</a>
                        </div>
                        </div>
                    </div>

                    {/* 3 */}
                    <div className="col-lg-4 col-md-6 mb-4">
                        <div className="homeServiceCard">
                        <div className="homeServiceImage">
                            <img src={Project1} alt="G Square Pride TVS Nagar" />
                            <div className="homeServiceOverlay">
                            <span>Residential Plots</span>
                            </div>
                        </div>
                        <div className="homeServiceContent">
                            <h5>G Square Pride TVS Nagar</h5>
                            <p className="homeServiceLocation">Edayarpalayam, Coimbatore</p>
                            <p className="homeServiceSize">3 - 6 Cents</p>
                            <p className="homeServicePrice">₹ 57 Lakhs Onwards</p>
                            <a href="tel:+919876543210" className="homeServiceBtn">Contact Now</a>
                        </div>
                        </div>
                    </div>

                    {/* 4 */}
                    <div className="col-lg-4 col-md-6 mb-4">
                        <div className="homeServiceCard">
                        <div className="homeServiceImage">
                            <img src={Project1} alt="G Square City" />
                            <div className="homeServiceOverlay">
                            <span>Residential Plots</span>
                            </div>
                        </div>
                        <div className="homeServiceContent">
                            <h5>G Square City</h5>
                            <p className="homeServiceLocation">L&T Bypass, Coimbatore</p>
                            <p className="homeServiceSize">3 - 4 Cents</p>
                            <p className="homeServicePrice">₹ 36 Lakhs Onwards</p>
                            <a href="tel:+919876543210" className="homeServiceBtn">Contact Now</a>
                        </div>
                        </div>
                    </div>

                    {/* 5 */}
                    <div className="col-lg-4 col-md-6 mb-4">
                        <div className="homeServiceCard">
                        <div className="homeServiceImage">
                            <img src={Project1} alt="Radiance Spendour" />
                            <div className="homeServiceOverlay">
                            <span>3 & 4 BHK Villa</span>
                            </div>
                        </div>
                        <div className="homeServiceContent">
                            <h5>Radiance Spendour</h5>
                            <p className="homeServiceLocation">Vedapatti, Coimbatore</p>
                            <p className="homeServiceSize">2105 SqFt - 3015 SqFt</p>
                            <p className="homeServicePrice">₹ 98 Lakhs - 1.35 Cr</p>
                            <a href="tel:+919876543210" className="homeServiceBtn">Contact Now</a>
                        </div>
                        </div>
                    </div>

                    {/* 6 */}
                    <div className="col-lg-4 col-md-6 mb-4">
                        <div className="homeServiceCard">
                        <div className="homeServiceImage">
                            <img src={Project1} alt="Radiance Suprema" />
                            <div className="homeServiceOverlay">
                            <span>2,3 & 4 BHK Apartments</span>
                            </div>
                        </div>
                        <div className="homeServiceContent">
                            <h5>Radiance Suprema</h5>
                            <p className="homeServiceLocation">Madhavaram, Chennai</p>
                            <p className="homeServiceSize">992 - 1422 SqFt</p>
                            <p className="homeServicePrice">₹ 55 Lakhs - 83 Lakhs</p>
                            <a href="tel:+919876543210" className="homeServiceBtn">Contact Now</a>
                        </div>
                        </div>
                    </div>

                    {/* 7 */}
                    <div className="col-lg-4 col-md-6 mb-4">
                        <div className="homeServiceCard">
                        <div className="homeServiceImage">
                            <img src={Project1} alt="Radiance Residencia" />
                            <div className="homeServiceOverlay">
                            <span>Plots</span>
                            </div>
                        </div>
                        <div className="homeServiceContent">
                            <h5>Radiance Residencia</h5>
                            <p className="homeServiceLocation">Thaiyur, OMR</p>
                            <p className="homeServiceSize">982 - 2956 SqFt</p>
                            <p className="homeServicePrice">₹ 29 Lakhs - 89 Lakhs</p>
                            <a href="tel:+919876543210" className="homeServiceBtn">Contact Now</a>
                        </div>
                        </div>
                    </div>

                    {/* 8 */}
                    <div className="col-lg-4 col-md-6 mb-4">
                        <div className="homeServiceCard">
                        <div className="homeServiceImage">
                            <img src={Project1} alt="Casagrand Cosmos Apartment" />
                            <div className="homeServiceOverlay">
                            <span>2 & 3 BHK Apartment</span>
                            </div>
                        </div>
                        <div className="homeServiceContent">
                            <h5>Casagrand Cosmos</h5>
                            <p className="homeServiceLocation">Viswanathapuram, Coimbatore</p>
                            <p className="homeServiceSize">625 SqFt - 1650 SqFt</p>
                            <p className="homeServicePrice">Start from ₹ 33 Lakhs</p>
                            <a href="tel:+919876543210" className="homeServiceBtn">Contact Now</a>
                        </div>
                        </div>
                    </div>

                    {/* 9 */}
                    <div className="col-lg-4 col-md-6 mb-4">
                        <div className="homeServiceCard">
                        <div className="homeServiceImage">
                            <img src={Project1} alt="Casagrand Cosmos Villa" />
                            <div className="homeServiceOverlay">
                            <span>3 & 4 BHK Villa</span>
                            </div>
                        </div>
                        <div className="homeServiceContent">
                            <h5>Casagrand Cosmos</h5>
                            <p className="homeServiceLocation">Viswanathapuram, Coimbatore</p>
                            <p className="homeServiceSize">2500 SqFt - 3441 SqFt</p>
                            <p className="homeServicePrice">Start from ₹ 1.47 Cr</p>
                            <a href="tel:+919876543210" className="homeServiceBtn">Contact Now</a>
                        </div>
                        </div>
                    </div>

                    {/* 10 */}
                    {/* <div className="col-lg-4 col-md-6 mb-4">
                        <div className="homeServiceCard">
                        <div className="homeServiceImage">
                            <img src={Project1} alt="Prozone Palms" />
                            <div className="homeServiceOverlay">
                            <span>1,2 & 3 BHK Apartment</span>
                            </div>
                        </div>
                        <div className="homeServiceContent">
                            <h5>Prozone Palms</h5>
                            <p className="homeServiceLocation">Saravanampatti, Coimbatore</p>
                            <p className="homeServiceSize">721 SqFt - 1753 SqFt</p>
                            <p className="homeServicePrice">₹ 29 Lakhs - 74 Lakhs</p>
                            <a href="tel:+919876543210" className="homeServiceBtn">Contact Now</a>
                        </div>
                        </div>
                    </div> */}

                    {/* 11 */}
                    {/* <div className="col-lg-4 col-md-6 mb-4">
                        <div className="homeServiceCard">
                        <div className="homeServiceImage">
                            <img src={Project1} alt="Gayatri Adithya" />
                            <div className="homeServiceOverlay">
                            <span>3 BHK Apartment</span>
                            </div>
                        </div>
                        <div className="homeServiceContent">
                            <h5>Gayatri Adithya</h5>
                            <p className="homeServiceLocation">Besant Nagar, Chennai</p>
                            <p className="homeServiceSize">Starts from 1390 SqFt</p>
                            <p className="homeServicePrice">₹ 2.26 Cr Onwards</p>
                            <a href="tel:+919876543210" className="homeServiceBtn">Contact Now</a>
                        </div>
                        </div>
                    </div> */}

                    {/* 12 */}
                    {/* <div className="col-lg-4 col-md-6 mb-4">
                        <div className="homeServiceCard">
                        <div className="homeServiceImage">
                            <img src={Project1} alt="Sakthi Enclave" />
                            <div className="homeServiceOverlay">
                            <span>2 & 3 BHK Apartments</span>
                            </div>
                        </div>
                        <div className="homeServiceContent">
                            <h5>Sakthi Enclave</h5>
                            <p className="homeServiceLocation">Alwarpet, Chennai</p>
                            <p className="homeServiceSize">1010 SqFt - 2000 SqFt</p>
                            <p className="homeServicePrice">₹ 1.36 Cr Onwards</p>
                            <a href="tel:+919876543210" className="homeServiceBtn">Contact Now</a>
                        </div>
                        </div>
                    </div> */}

                    {/* 13 */}
                    {/* <div className="col-lg-4 col-md-6 mb-4">
                        <div className="homeServiceCard">
                        <div className="homeServiceImage">
                            <img src={Project1} alt="Blue Wall Lahari" />
                            <div className="homeServiceOverlay">
                            <span>3 BHK Apartment</span>
                            </div>
                        </div>
                        <div className="homeServiceContent">
                            <h5>Blue Wall Lahari</h5>
                            <p className="homeServiceLocation">Nungambakkam, Chennai</p>
                            <p className="homeServiceSize">2020 SqFt - 2904 SqFt</p>
                            <p className="homeServicePrice">₹ 3.05 Cr Onwards</p>
                            <a href="tel:+919876543210" className="homeServiceBtn">Contact Now</a>
                        </div>
                        </div>
                    </div> */}

                    {/* 14 */}
                    {/* <div className="col-lg-4 col-md-6 mb-4">
                        <div className="homeServiceCard">
                        <div className="homeServiceImage">
                            <img src={Project1} alt="Casagrand Utopia" />
                            <div className="homeServiceOverlay">
                            <span>2,3 & 4 BHK Apartment</span>
                            </div>
                        </div>
                        <div className="homeServiceContent">
                            <h5>Casagrand Utopia</h5>
                            <p className="homeServiceLocation">Manapakkam, Chennai</p>
                            <p className="homeServiceSize">991 SqFt - 4,144 SqFt</p>
                            <p className="homeServicePrice">Price On Request</p>
                            <a href="tel:+919876543210" className="homeServiceBtn">Contact Now</a>
                        </div>
                        </div>
                    </div> */}

                    </div>
                </div>
                </section>
        </>
    );
}

export default HomeServiceSec;