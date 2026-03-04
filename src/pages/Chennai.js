import '../css/style-1.css';
import '../css/style-2.css';
import '../css/style.css';

import gallery2 from "../images/images-1/gallery/gallery2.jpg";
import chennaipath from "../images/images-1/chennai.jpg";
import radiance from"../images/images-1/radiancesuprema.jpg";
import blue from"../images/images-1/bluewalllahari.jpg";
import gayatri from"../images/images-1/gayatri.jpg"
import shakti from"../images/images-1/shakti.jpg"


import Cta from '../sections/Cta';


function Chennai(){
    return(
        <>
             {/* Header Section */}
       <section
         style={{
           position: "relative",
           backgroundImage:
             `url(${chennaipath})`,
           backgroundSize: "cover",
           backgroundPosition: "center",
           backgroundAttachment:"fixed",
           padding: "120px 20px",
           color: "#fff",
           textAlign: "center"
         }}
       >
         {/* Gradient Overlay */}
         <div className='Chennai-path'
           style={{
             position: "absolute",
             top: 0,
             left: 0,
             width: "100%",
             height: "100%",
             background:
               "linear-gradient(10deg, rgba(0, 0, 0, 0.31), rgba(0, 0, 0, 0.38))",
               backgroundAttachment:"fixed",
           }}
         ></div>
       
         {/* Content */}
         <div style={{ position: "relative", zIndex: 2 }}>
           <h1
             style={{
               fontSize: "3rem",
               color: "#fff",
               fontWeight: "800",
               marginBottom: "10px"
             }}
           > Chennai 
           </h1>
       
           <p style={{ fontSize: "1.1rem",  color: "#fff",marginBottom: "20px" }}>
             We’re Here to Help You Find Your Dream Property
           </p>
       
         </div>
       </section> 
            <div className="villa-content">
            <h1 className="section-title">
            <h1>Properties in Chennai</h1> 
            </h1>

            <p className="section-subtitle">
                Experience thoughtfully designed homes crafted for modern lifestyles.
            </p>
            </div>
            <section className="villa-section">
            <div className="villa-container">

                {/* Left Image */}
                <div className="villa-image">
                <img src={gallery2} alt="Casagrand Utopia View 2" />
                <div className="villa-badge">Premium Apartments</div>
                </div>

                {/* Right Content */}
                <div className="villa-content">

                <h2>Casagrand Utopia – 2 & 3 BHK Premium Apartments</h2>
                <h4 className="location">MANAPAKKAM, CHENNAI</h4>
                <a href="tel:+91 94443 86103" className="contact-btn">Contact Now</a>

            <div className="villa-details">

                    <div><strong>Project Type:</strong> Apartments</div>
                    <div><strong>Property Area:</strong> 1100 - 1800 Sqft</div>
                    <div><strong>BedRooms:</strong> 2 and 3</div>
                    <div><strong>Floors:</strong> Stilt + 5 Floors</div>

                </div>

                <div className="overview">
                    <h5>Project Overview</h5>
                    <p>
                    Starting from ₹85 Lakhs onwards. Casagrand Utopia offers thoughtfully designed 
                    2 & 3 BHK premium apartments in the heart of Manapakkam, Chennai.
                    Strategically located near DLF IT Park and Porur, this project ensures 
                    seamless connectivity to major IT hubs, schools, hospitals and shopping centers.
                    Designed with modern architecture, superior ventilation and zero space wastage concept.
                    The project offers lifestyle amenities crafted for comfortable urban living.
                    Vaastu compliant homes with high-end specifications and contemporary finishes.
                    </p>
                </div>

                <div className="amenities">
                    <h5><b>Amenities</b></h5>
                    <ul>
                    <li><i class="fa-solid fa-house"></i>Landscaped Garden</li>
                    <li><i class="fa-solid fa-house"></i>Clubhouse</li>
                    <li><i class="fa-solid fa-house"></i>Swimming Pool</li>
                    <li><i class="fa-solid fa-house"></i>Fully Equipped Gym</li>
                    <li><i class="fa-solid fa-house"></i>Children’s Play Area</li>
                    <li><i class="fa-solid fa-house"></i>Indoor Games Room</li>
                    <li><i class="fa-solid fa-house"></i>Multipurpose Hall</li>
                    <li><i class="fa-solid fa-house"></i>Jogging Track</li>
                    <li><i class="fa-solid fa-house"></i>CCTV Surveillance</li>
                    <li><i class="fa-solid fa-house"></i>Power Backup</li>
                    <li><i class="fa-solid fa-house"></i>Rainwater Harvesting</li>
                    <li><i class="fa-solid fa-house"></i>24/7 Security</li>
                    </ul>
                </div>

                </div>
            </div>
            </section>
            <section className="villa-section">
            <div className="villa-container">

                {/* Left Image */}
                <div className="villa-image">
                <img src={radiance}alt="Radiance Suprema" />
                <div className="villa-badge">Luxury Apartments</div>
                </div>

                {/* Right Content */}
                <div className="villa-content">

                <h2>Radiance Suprema – 2, 3 & 4 BHK Luxury Apartments</h2>
                <h4 className="location">MADHAVARAM, CHENNAI</h4>
                <a href="tel:+91 94443 86103" className="contact-btn">Contact Now</a>

                <div className="villa-details">

                    <div><strong>Project Type:</strong> Apartments</div>
                    <div><strong>Property Area:</strong> 1300 - 2500 Sqft</div>
                    <div><strong>BedRooms:</strong> 2, 3 and 4</div>
                    <div><strong>Floors:</strong> High-Rise Towers</div>

                </div>

                <div className="overview">
                    <h5>Project Overview</h5>
                    <p>
                    Starting from ₹95 Lakhs onwards. Radiance Suprema is a premium residential 
                    development offering spacious 2, 3 & 4 BHK luxury apartments in Madhavaram, Chennai.
                    Designed with contemporary architecture and superior specifications,
                    the project offers a refined urban lifestyle.
                    Strategically located with excellent connectivity to Anna Nagar, 
                    Kolathur and key commercial hubs.
                    Homes are Vaastu compliant and designed for maximum ventilation 
                    with thoughtfully planned living spaces.
                    The project features expansive landscaped areas and modern lifestyle amenities.
                    </p>
                </div>

                <div className="amenities">
                    <h5>Amenities</h5>
                    <ul>
                    <li><i class="fa-solid fa-house"></i>Grand Clubhouse</li>
                    <li><i class="fa-solid fa-house"></i>Swimming Pool</li>
                    <li><i class="fa-solid fa-house"></i>Fully Equipped Gym</li>
                    <li><i class="fa-solid fa-house"></i>Multipurpose Hall</li>
                    <li><i class="fa-solid fa-house"></i>Indoor Games Room</li>
                    <li><i class="fa-solid fa-house"></i>Children’s Play Area</li>
                    <li><i class="fa-solid fa-house"></i>Landscaped Gardens</li>
                    <li><i class="fa-solid fa-house"></i>Jogging Track</li>
                    <li><i class="fa-solid fa-house"></i>CCTV Surveillance</li>
                    <li><i class="fa-solid fa-house"></i>Power Backup</li>
                    <li><i class="fa-solid fa-house"></i>Rainwater Harvesting</li>
                    <li><i class="fa-solid fa-house"></i>24/7 Security</li>
                    </ul>
                </div>

                </div>
            </div>
            </section>
            <section className="villa-section">
            <div className="villa-container">

                {/* Left Image */}
                <div className="villa-image">
                <img src={gayatri} alt="Gayatri Adithya" />
                <div className="villa-badge">Premium Apartment</div>
                </div>

                {/* Right Content */}
                <div className="villa-content">

                <h2>Gayatri Adithya – 3 BHK Apartment</h2>
                <h4 className="location">BESANT NAGAR, CHENNAI</h4>
                <a href="tel:+91 94443 86103" className="contact-btn">Contact Now</a>

                <div className="villa-details">

                    <div><strong>Project Type:</strong> Apartment</div>
                    <div><strong>Price Range:</strong> ₹29 Lakhs - ₹74 Lakhs</div>
                    <div><strong>BedRooms:</strong> 3 BHK</div>
                    <div><strong>Property Area:</strong> Starts from 1390 Sqft</div>

                </div>

                <div className="overview">
                    <h5>Project Overview</h5>
                    <p>
                    Gayatri Adithya offers thoughtfully designed 3 BHK apartments 
                    located in the prime residential locality of Besant Nagar, Chennai.
                    With prices starting from ₹29 Lakhs up to ₹74 Lakhs,
                    this project combines comfort, connectivity and modern lifestyle living.
                    Spacious interiors starting from 1390 Sqft ensure ample ventilation
                    and efficient space utilization. Close proximity to beaches, schools,
                    hospitals and commercial hubs makes it an ideal choice for families.
                    </p>
                </div>

                <div className="amenities">
                    <h5>Amenities</h5>
                    <ul>
                    <li><i class="fa-solid fa-house"></i>Covered Car Parking</li>
                    <li><i class="fa-solid fa-house"></i>Lift Facility</li>
                    <li><i class="fa-solid fa-house"></i>CCTV Surveillance</li>
                    <li><i class="fa-solid fa-house"></i>Power Backup</li>
                    <li><i class="fa-solid fa-house"></i>Rainwater Harvesting</li>
                    <li><i class="fa-solid fa-house"></i>24/7 Security</li>
                    <li><i class="fa-solid fa-house"></i>Intercom Facility</li>
                    <li><i class="fa-solid fa-house"></i>Vaastu Compliant Design</li>
                    </ul>
                </div>

                </div>
            </div>
            </section><section className="villa-section">
            <div className="villa-container">

                {/* Left Image */}
                <div className="villa-image">
                <img src={shakti} alt="Sakthi Enclave" />
                <div className="villa-badge">Premium Apartments</div>
                </div>

                {/* Right Content */}
                <div className="villa-content">

                <h2>Sakthi Enclave – 2 & 3 BHK Apartments</h2>
                <h4 className="location">ALWARPET, CHENNAI</h4>
                <a href="tel:+91 94443 86103" className="contact-btn">Contact Now</a>

                <div className="villa-details">

                    <div><strong>Project Type:</strong> Apartments</div>
                    <div><strong>Property Area:</strong> 1010 Sqft – 2000 Sqft</div>
                    <div><strong>BedRooms:</strong> 2 & 3 BHK</div>
                    <div><strong>Location:</strong> Prime Residential Area</div>

                </div>

                <div className="overview">
                    <h5>Project Overview</h5>
                    <p>
                    Sakthi Enclave offers elegantly designed 2 & 3 BHK apartments 
                    in the premium locality of Alwarpet, Chennai.
                    With unit sizes ranging from 1010 Sqft to 2000 Sqft,
                    the project ensures spacious living with excellent ventilation 
                    and modern architectural design.
                    Located in one of Chennai’s most sought-after neighborhoods,
                    residents enjoy close proximity to top schools, hospitals,
                    shopping destinations and business hubs.
                    Ideal for families seeking comfort, connectivity and a refined lifestyle.
                    </p>
                </div>

                <div className="amenities">
                    <h5>Amenities</h5>
                    <ul>
                    <li><i class="fa-solid fa-house"></i>Covered Car Parking</li>
                    <li><i class="fa-solid fa-house"></i>Lift Facility</li>
                    <li><i class="fa-solid fa-house"></i>Power Backup</li>
                    <li><i class="fa-solid fa-house"></i>CCTV Surveillance</li>
                    <li><i class="fa-solid fa-house"></i>24/7 Security</li>
                    <li><i class="fa-solid fa-house"></i>Rainwater Harvesting</li>
                    <li><i class="fa-solid fa-house"></i>Intercom Facility</li>
                    <li><i class="fa-solid fa-house"></i>Landscaped Common Areas</li>
                    </ul>
                </div>

                </div>
            </div>
            </section>

            <section className="villa-section">
            <div className="villa-container">

                {/* Left Image */}
                <div className="villa-image">
                <img src={blue} alt="Blue Wall Lahari" />
                <div className="villa-badge">Luxury Apartment</div>
                </div>

                {/* Right Content */}
                <div className="villa-content">

                <h2>Blue Wall Lahari – 3 BHK Apartment</h2>
                <h4 className="location">NUNGAMBAKKAM, CHENNAI</h4>
                <a href="tel:+91 94443 86103" className="contact-btn">Contact Now</a>
                                            
                <div className="villa-details">

                    <div><strong>Project Type:</strong> Apartment</div>
                    <div><strong>Price Range:</strong> ₹1.36 Cr Onwards</div>
                    <div><strong>BedRooms:</strong> 3 BHK</div>
                    <div><strong>Property Area:</strong> 2020 Sqft – 2904 Sqft</div>

                </div>

                <div className="overview">
                    <h5>Project Overview</h5>
                    <p>
                    Blue Wall Lahari offers premium 3 BHK luxury apartments
                    in the upscale locality of Nungambakkam, Chennai.
                    With unit sizes ranging from 2020 Sqft to 2904 Sqft,
                    the project provides expansive living spaces designed
                    for elegance and comfort.
                    Starting from ₹1.36 Cr onwards, these residences feature
                    contemporary architecture, superior specifications and
                    thoughtfully planned interiors.
                    Located in the heart of the city with excellent connectivity
                    to schools, hospitals, commercial hubs and entertainment zones.
                    </p>
                </div>

                <div className="amenities">
                    <h5>Amenities</h5>
                    <ul>
                    <li><i class="fa-solid fa-house"></i>Covered Car Parking</li>
                    <li><i class="fa-solid fa-house"></i>Lift Facility</li>
                    <li><i class="fa-solid fa-house"></i>Power Backup</li>
                    <li><i class="fa-solid fa-house"></i>CCTV Surveillance</li>
                    <li><i class="fa-solid fa-house"></i>24/7 Security</li>
                    <li><i class="fa-solid fa-house"></i>Rainwater Harvesting</li>
                    <li><i class="fa-solid fa-house"></i>Intercom Facility</li>
                    <li><i class="fa-solid fa-house"></i>Premium Lobby & Common Areas</li>
                    </ul>
                </div>

                </div>
            </div>
            </section>
        
             
             <Cta/>
        </>
    );
}

export default Chennai