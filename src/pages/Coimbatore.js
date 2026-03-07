import '../css/style-1.css';
import '../css/style-2.css';
import '../css/style.css';


import coimbatorepath from "../images/images-1/coimbatore.jpg";
import prozone from "../images/images-1/prozone.jpg";
import radiance from "../images/images-1/radiance-splendour.jpg";
import cosmos from "../images/images-1/casagrand-cosmos.jpg";
import city from "../images/images-1/gsquare-city.jpg";
import blossom from"../images/images-1/gsquare-blossom.jpg";
import pride from"../images/images-1/gsquare-pride.jpg";
import ghats from"../images/images-1/gsquare-western-ghats.jpg"
import kosmos from"../images/images-1/kosmo.jpg"
import tvhcrest from "../images/images-1/tvhcrest.jpg";
import tvhSerenity from "../images/images-1/tvhserenity.jpg";

import Cta from '../sections/Cta';

function Coimbatore(){
    return(
        <>
                     {/* Header Section */}
               <section
                 style={{
                   position: "relative",
                   backgroundImage:
                     `url(${coimbatorepath})`,
                    backgroundAttachment:"fixed",
                   backgroundSize: "cover",
                   backgroundPosition: "center",
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
                   >Coimbatore 
                   </h1>
               
                   <p style={{ fontSize: "1.1rem",  color: "#fff",marginBottom: "20px" }}>
                     We’re Here to Help You Find Your Dream Property
                   </p>
               
                 </div>
               </section> 


            <div className="villa-content">
              <h1 className="section-title">
              <h1>Properties in Coimbatore</h1> 
              </h1>

              <p className="section-subtitle">
                Experience thoughtfully designed homes crafted for modern lifestyles.
              </p>
            </div>



            <section className="villa-section">
              <div className="villa-container">

                {/* Left Image */}
                <div className="villa-image">
                  <img src={tvhSerenity} alt="TVH Serenity" />
                  <div className="villa-badge">Premium 2 BHK Flats</div>
                </div>

                {/* Right Content */}
                <div className="villa-content">

                  <h2>TVH Serenity – Premium 2 BHK Flats</h2>
                  <h4 className="location">AVINASHI, COIMBATORE</h4>
                  <a href="tel:+91 94443 86103" className="contact-btn">Contact Now</a>

                  <div className="villa-details">

                    <div><strong>Project Type:</strong> Residential Apartments</div>
                    <div><strong>Flat Size:</strong> 2 BHK – 868 – 1055 Sqft</div>
                    <div><strong>Location:</strong> Avinashi</div>
                    <div><strong>Price:</strong> ₹ 56.5 Lakhs Onwards</div>

                  </div>

                  <div className="overview">
                    <h5>Project Overview</h5>
                    <p>
                      TVH Serenity offers thoughtfully designed 2 BHK apartments in Avinashi, Coimbatore.
                      The project is crafted to provide comfortable and modern living spaces for families.
                      With spacious layouts ranging from 868 to 1055 Sqft, residents can enjoy a perfect
                      balance of lifestyle and convenience. Located in a rapidly developing area, the
                      property offers easy connectivity to key locations, educational institutions,
                      healthcare centers and commercial hubs.
                    </p>
                  </div>

                  <div className="amenities">
                    <h5>Amenities</h5>
                    <ul>
                      <li><i class="fa-solid fa-house"/> Gated Community</li>
                      <li><i class="fa-solid fa-house"/> 24/7 Security</li>
                      <li><i class="fa-solid fa-house"/> Covered Car Parking</li>
                      <li><i class="fa-solid fa-house"/> Power Backup</li>
                      <li><i class="fa-solid fa-house"/> Lift Facility</li>
                      <li><i class="fa-solid fa-house"/> Children’s Play Area</li>
                      <li><i class="fa-solid fa-house"/> Landscaped Garden</li>
                      <li><i class="fa-solid fa-house"/> CCTV Surveillance</li>
                    </ul>
                  </div>

                </div>
              </div>
            </section>




            <section className="villa-section">
              <div className="villa-container">

                {/* Left Image */}
                <div className="villa-image">
                  <img src={tvhcrest} alt="TVH Crest" />
                  <div className="villa-badge">1 & 2 BHK Apartments</div>
                </div>

                {/* Right Content */}
                <div className="villa-content">

                  <h2>TVH Crest – Premium 1 & 2 BHK Apartments</h2>
                  <h4 className="location">AVINASHI, COIMBATORE</h4>
                  <a href="tel:+91 94443 86103" className="contact-btn">Contact Now</a>

                  <div className="villa-details">

                    <div><strong>Project Type:</strong> Residential Apartments</div>
                    <div><strong>Flat Size:</strong> 1 BHK – 784 SqFt | 2 BHK – 1038 – 1154 SqFt</div>
                    <div><strong>Location:</strong> Avinashi</div>
                    <div><strong>Price:</strong> 1 BHK – ₹52.53 Lakhs | 2 BHK – ₹69.53 Lakhs</div>

                  </div>

                  <div className="overview">
                    <h5>Project Overview</h5>
                    <p>
                      TVH Crest is a modern residential project located in Avinashi, Coimbatore,
                      offering well-designed 1 and 2 BHK apartments. The project features
                      spacious homes with efficient layouts that maximize comfort and functionality.
                      With sizes ranging from 784 SqFt to 1154 SqFt, it provides ideal living
                      spaces for individuals and families. The project enjoys excellent
                      connectivity to major roads, workplaces, schools and lifestyle destinations.
                    </p>
                  </div>

                  <div className="amenities">
                    <h5>Amenities</h5>
                    <ul>
                      <li><i class="fa-solid fa-house"/> Gated Community</li>
                      <li><i class="fa-solid fa-house"/> 24/7 Security</li>
                      <li><i class="fa-solid fa-house"/> Covered Car Parking</li>
                      <li><i class="fa-solid fa-house"/> Lift Facility</li>
                      <li><i class="fa-solid fa-house"/> Power Backup</li>
                      <li><i class="fa-solid fa-house"/> Children’s Play Area</li>
                      <li><i class="fa-solid fa-house"/> Landscaped Garden</li>
                      <li><i class="fa-solid fa-house"/> CCTV Surveillance</li>
                    </ul>
                  </div>

                </div>
              </div>
            </section>


               
        <section className="villa-section">
          <div className="villa-container">

            {/* Left Image */}
            <div className="villa-image">
              <img src={ghats} alt="G Square Western Ghats" />
              <div className="villa-badge">Residential Plots</div>
            </div>

            {/* Right Content */}
            <div className="villa-content">

              <h2>G Square Western Ghats – Premium Residential Plots</h2>
              <h4 className="location">PALANTHURAI ROAD, COIMBATORE</h4>
              <a href="tel:+91 94443 86103" className="contact-btn">Contact Now</a>

              <div className="villa-details">

                <div><strong>Project Type:</strong> Residential Plots</div>
                <div><strong>Plot Size:</strong> 3 - 4 Cents</div>
                <div><strong>Location:</strong> Palanthurai Road</div>
                <div><strong>Approval:</strong> DTCP Approved</div>

              </div>

              <div className="overview">
                <h5>Project Overview</h5>
                <p>
                  G Square Western Ghats offers premium residential plots 
                  located on Palanthurai Road, Coimbatore.
                  Designed for peaceful living amidst nature, the project 
                  provides well-planned plots ranging from 3 to 4 cents.
                  With clear titles and DTCP approval, it is ideal for 
                  building your dream home in a serene and fast-developing area.
                  Excellent connectivity to major schools, colleges, 
                  hospitals and commercial hubs ensures convenience and value appreciation.
                </p>
              </div>

              <div className="amenities">
                <h5>Amenities</h5>
                <ul>
                  <li><i class="fa-solid fa-house"/>Blacktop Internal Roads</li>
                  <li><i class="fa-solid fa-house"/>Street Lighting</li>
                  <li><i class="fa-solid fa-house"/>24/7 Security</li>
                  <li><i class="fa-solid fa-house"/>Gated Community</li>
                  <li><i class="fa-solid fa-house"/>Landscaped Entrance Arch</li>
                  <li><i class="fa-solid fa-house"/>Clear Title Property</li>
                  <li><i class="fa-solid fa-house"/>Water Connection Provision</li>
                  <li><i class="fa-solid fa-house"/>Drainage System</li>
                  <li><i class="fa-solid fa-house"/>Rainwater Harvesting</li>
                  <li><i class="fa-solid fa-house"/>Tree-Lined Avenues</li>
                  <li><i class="fa-solid fa-house"/>Children’s Play Area</li>
                  <li><i class="fa-solid fa-house"/>Green Open Spaces</li>
                </ul>
              </div>

            </div>
          </div>
        </section>

        <section className="villa-section">
          <div className="villa-container">

            {/* Left Image */}
            <div className="villa-image">
              <img src={blossom} alt="G Square Blossom" />
              <div className="villa-badge">Residential Plots</div>
            </div>

            {/* Right Content */}
            <div className="villa-content">

              <h2>G Square Blossom – Premium Residential Plots</h2>
              <h4 className="location">AVINASHI, COIMBATORE</h4>
              <a href="tel:+91 94443 86103" className="contact-btn">Contact Now</a>

              <div className="villa-details">

                <div><strong>Project Type:</strong> Residential Plots</div>
                <div><strong>Price Range:</strong> ₹19.50 Lakhs Onwards</div>
                <div><strong>Plot Size:</strong> 3 - 4 Cents</div>
                <div><strong>Approval:</strong> DTCP Approved</div>

              </div>

              <div className="overview">
                <h5>Project Overview</h5>
                <p>
                  G Square Blossom offers premium residential plots in Avinashi, Coimbatore,
                  starting from ₹19.50 Lakhs onwards. The project features well-planned
                  3 to 4 cents plots within a secure gated community.
                  Located in a rapidly developing area, it provides excellent connectivity
                  to Avinashi Road, educational institutions, hospitals and commercial hubs.
                  With clear title and DTCP approval, it is an ideal investment opportunity
                  and perfect for building your dream home.
                </p>
              </div>

              <div className="amenities">
                <h5>Amenities</h5>
                <ul>
                  <li><i class="fa-solid fa-house"/>Gated Community</li>
                  <li><i class="fa-solid fa-house"/>Blacktop Internal Roads</li>
                  <li><i class="fa-solid fa-house"/>Street Lights</li>
                  <li><i class="fa-solid fa-house"/>24/7 Security</li>
                  <li><i class="fa-solid fa-house"/>Landscaped Entrance</li>
                  <li><i class="fa-solid fa-house"/>Water Line Provision</li>
                  <li><i class="fa-solid fa-house"/>Drainage System</li>
                  <li><i class="fa-solid fa-house"/>Rainwater Harvesting</li>
                  <li><i class="fa-solid fa-house"/>Children’s Play Area</li>
                  <li><i class="fa-solid fa-house"/>Green Open Spaces</li>
                  <li><i class="fa-solid fa-house"/>Clear Title Property</li>
                  <li><i class="fa-solid fa-house"/>DTCP Approved Layout</li>
                </ul>
              </div>

            </div>
          </div>
        </section>

        <section className="villa-section">
        <div className="villa-container">

            {/* Left Image */}
            <div className="villa-image">
            <img src={pride}alt="G Square Pride TVS Nagar" />
            <div className="villa-badge">Residential Plots</div>
            </div>

            {/* Right Content */}
            <div className="villa-content">

            <h2>G Square Pride TVS Nagar – Premium Residential Plots</h2>
            <h4 className="location">EDAYARPALAYAM, COIMBATORE</h4>
            <a href="tel:+91 94443 86103" className="contact-btn">Contact Now</a>

            <div className="villa-details">

                <div><strong>Project Type:</strong> Residential Plots</div>
                <div><strong>Price Range:</strong> ₹30 Lakhs Onwards</div>
                <div><strong>Plot Size:</strong> 3 - 6 Cents</div>
                <div><strong>Approval:</strong> DTCP Approved</div>

            </div>

            <div className="overview">
                <h5>Project Overview</h5>
                <p>
                G Square Pride TVS Nagar offers premium residential plots in 
                Edayarpalayam, Coimbatore, starting from ₹30 Lakhs onwards.
                The project features well-developed 3 to 6 cents plots within 
                a secure gated community environment.
                Located in a prime and fast-growing residential area,
                it provides excellent connectivity to major schools,
                colleges, hospitals and shopping centers.
                With clear title and DTCP approval, it is ideal for both
                investment and building your dream home.
                </p>
            </div>

            <div className="amenities">
                <h5>Amenities</h5>
                <ul>
                <li><i class="fa-solid fa-house"/>Gated Community</li>
                <li><i class="fa-solid fa-house"/>Blacktop Internal Roads</li>
                <li><i class="fa-solid fa-house"/>Street Lighting</li>
                <li><i class="fa-solid fa-house"/>24/7 Security</li>
                <li><i class="fa-solid fa-house"/>Landscaped Entrance Arch</li>
                <li><i class="fa-solid fa-house"/>Water Line Provision</li>
                <li><i class="fa-solid fa-house"/>Underground Drainage System</li>
                <li><i class="fa-solid fa-house"/>Rainwater Harvesting</li>
                <li><i class="fa-solid fa-house"/>Children’s Play Area</li>
                <li><i class="fa-solid fa-house"/>Green Open Spaces</li>
                <li><i class="fa-solid fa-house"/>Clear Title Property</li>
                <li><i class="fa-solid fa-house"/>DTCP Approved Layout</li>
                </ul>
            </div>

            </div>
        </div>
        </section>


        <section className="villa-section">
        <div className="villa-container">

            {/* Left Image */}
            <div className="villa-image">
            <img src={city} alt="G Square City" />
            <div className="villa-badge">Residential Plots</div>
            </div>

            {/* Right Content */}
            <div className="villa-content">

            <h2>G Square City – Premium Residential Plots</h2>
            <h4 className="location">L&T BYPASS, COIMBATORE</h4>
            <a href="tel:+91 94443 86103" className="contact-btn">Contact Now</a>

            <div className="villa-details">

                <div><strong>Project Type:</strong> Residential Plots</div>
                <div><strong>Price Range:</strong> ₹57 Lakhs Onwards</div>
                <div><strong>Plot Size:</strong> 3 - 4 Cents</div>
                <div><strong>Approval:</strong> DTCP Approved</div>

            </div>

            <div className="overview">
                <h5>Project Overview</h5>
                <p>
                G Square City offers premium residential plots located along 
                L&T Bypass, Coimbatore. Starting from ₹57 Lakhs onwards,
                the project features well-planned 3 to 4 cents plots
                within a secure gated community.
                Strategically positioned in a rapidly developing corridor,
                it provides excellent connectivity to major schools,
                colleges, hospitals and commercial centers.
                With DTCP approval and clear title, it is ideal for 
                building your dream home or making a smart investment.
                </p>
            </div>

            <div className="amenities">
                <h5>Amenities</h5>
                <ul>
                <li><i class="fa-solid fa-house"/>Gated Community</li>
                <li><i class="fa-solid fa-house"/>Blacktop Internal Roads</li>
                <li><i class="fa-solid fa-house"/>Street Lighting</li>
                <li><i class="fa-solid fa-house"/>24/7 Security</li>
                <li><i class="fa-solid fa-house"/>Landscaped Entrance Arch</li>
                <li><i class="fa-solid fa-house"/>Water Line Provision</li>
                <li><i class="fa-solid fa-house"/>Underground Drainage System</li>
                <li><i class="fa-solid fa-house"/>Rainwater Harvesting</li>
                <li><i class="fa-solid fa-house"/>Children’s Play Area</li>
                <li><i class="fa-solid fa-house"/>Green Open Spaces</li>
                <li><i class="fa-solid fa-house"/>Clear Title Property</li>
                <li><i class="fa-solid fa-house"/>DTCP Approved Layout</li>
                </ul>
            </div>

            </div>
        </div>
        </section>
        <section className="villa-section">
        <div className="villa-container">

            {/* Left Image */}
            <div className="villa-image">
            <img src={radiance}alt="Radiance Splendour" />
            <div className="villa-badge">Luxury Villas</div>
            </div>

            {/* Right Content */}
            <div className="villa-content">

            <h2>Radiance Splendour – 3 & 4 BHK Luxury Villas</h2>
            <h4 className="location">VEDAPATTI, COIMBATORE</h4>
            <a href="tel:+91 94443 86103" className="contact-btn">Contact Now</a>

            <div className="villa-details">

                <div><strong>Project Type:</strong> Villa</div>
                <div><strong>Price Range:</strong> ₹36 Lakhs Onwards</div>
                <div><strong>BedRooms:</strong> 3 & 4 BHK</div>
                <div><strong>Property Area:</strong> 2105 SqFt - 3015 SqFt</div>

            </div>

            <div className="overview">
                <h5>Project Overview</h5>
                <p>
                Radiance Splendour offers premium 3 & 4 BHK luxury villas
                in Vedapatti, Coimbatore. Starting from ₹36 Lakhs onwards,
                these spacious villas range between 2105 SqFt and 3015 SqFt.
                Designed with contemporary architecture and superior specifications,
                the project ensures comfortable living in a peaceful environment.
                Located in a fast-growing residential locality with excellent
                connectivity to schools, hospitals and commercial hubs,
                it is ideal for families seeking space and elegance.
                </p>
            </div>

            <div className="amenities">
                <h5>Amenities</h5>
                <ul>
                <li><i class="fa-solid fa-house"/>Clubhouse</li>
                <li><i class="fa-solid fa-house"/>Landscaped Garden</li>
                <li><i class="fa-solid fa-house"/>Children’s Play Area</li>
                <li><i class="fa-solid fa-house"/>Fully Equipped Gym</li>
                <li><i class="fa-solid fa-house"/>Multipurpose Hall</li>
                <li><i class="fa-solid fa-house"/>Indoor Games Room</li>
                <li><i class="fa-solid fa-house"/>24/7 Security</li>
                <li><i class="fa-solid fa-house"/>CCTV Surveillance</li>
                <li><i class="fa-solid fa-house"/>Power Backup</li>
                <li><i class="fa-solid fa-house"/>Rainwater Harvesting</li>
                <li><i class="fa-solid fa-house"/>Covered Car Parking</li>
                <li><i class="fa-solid fa-house"/>Gated Community</li>
                </ul>
            </div>

            </div>
        </div>
        </section>
        <section className="villa-section">
        <div className="villa-container">

            <div className="villa-image">
            <img src={cosmos} alt="Casagrand Cosmos Apartment" />
            <div className="villa-badge">Premium Apartments</div>
            </div>

            <div className="villa-content">

            <h2>Casagrand Cosmos – 2 & 3 BHK Apartments</h2>
            <h4 className="location">VISWANATHAPURAM, COIMBATORE</h4>
            <a href="tel:+91 94443 86103" className="contact-btn">Contact Now</a>

            <div className="villa-details">
                <div><strong>Project Type:</strong> Apartment</div>
                <div><strong>Price Range:</strong> ₹29 Lakhs - ₹89 Lakhs</div>
                <div><strong>BedRooms:</strong> 2 & 3 BHK</div>
                <div><strong>Property Area:</strong> 625 SqFt - 1650 SqFt</div>
            </div>

            <div className="overview">
                <h5>Project Overview</h5>
                <p>
                Casagrand Cosmos offers thoughtfully designed 2 & 3 BHK apartments
                in Viswanathapuram, Coimbatore. With unit sizes ranging from
                625 SqFt to 1650 SqFt and prices between ₹29 Lakhs to ₹89 Lakhs,
                the project ensures affordable luxury living.
                Strategically located with excellent connectivity to major schools,
                hospitals and IT hubs, it provides modern amenities and a comfortable lifestyle.
                </p>
            </div>

            <div className="amenities">
                <h5>Amenities</h5>
                <ul>
                <li><i class="fa-solid fa-house"/>Clubhouse</li>
                <li><i class="fa-solid fa-house"/>Swimming Pool</li>
                <li><i class="fa-solid fa-house"/>Gym</li>
                <li><i class="fa-solid fa-house"/>Children’s Play Area</li>
                <li><i class="fa-solid fa-house"/>Indoor Games</li>
                <li><i class="fa-solid fa-house"/>Landscaped Garden</li>
                <li><i class="fa-solid fa-house"/>Power Backup</li>
                <li><i class="fa-solid fa-house"/>24/7 Security</li>
                </ul>
            </div>

            </div>
        </div>
        </section>

          <section className="villa-section">
        <div className="villa-container">

            <div className="villa-image">
            <img src={kosmos}alt="Casagrand Cosmos Villa" />
            <div className="villa-badge">Luxury Villas</div>
            </div>

            <div className="villa-content">

            <h2>Casagrand Cosmos – 3 & 4 BHK Villas</h2>
            <h4 className="location">VISWANATHAPURAM, COIMBATORE</h4>
            <a href="tel:+91 94443 86103" className="contact-btn">Contact Now</a>

            <div className="villa-details">
                <div><strong>Project Type:</strong> Villa</div>
                <div><strong>Price Range:</strong> ₹33 Lakhs Onwards</div>
                <div><strong>BedRooms:</strong> 3 & 4 BHK</div>
                <div><strong>Property Area:</strong> 2500 SqFt - 3441 SqFt</div>
            </div>

            <div className="overview">
                <h5>Project Overview</h5>
                <p>
                Casagrand Cosmos Villas offer spacious 3 & 4 BHK homes
                in Viswanathapuram, Coimbatore. Starting from ₹33 Lakhs onwards,
                these villas range between 2500 SqFt to 3441 SqFt.
                Designed with contemporary architecture and premium finishes,
                the project provides privacy, comfort and superior lifestyle amenities
                within a secure gated community.
                </p>
            </div>

            <div className="amenities">
                <h5>Amenities</h5>
                <ul>
                <li><i class="fa-solid fa-house"/>Private Garden Space</li>
                <li><i class="fa-solid fa-house"/>Clubhouse</li>
                <li><i class="fa-solid fa-house"/>Gym</li>
                <li><i class="fa-solid fa-house"/>Multipurpose Hall</li>
                <li><i class="fa-solid fa-house"/>Children’s Play Area</li>
                <li><i class="fa-solid fa-house"/>Power Backup</li>
                <li><i class="fa-solid fa-house"/>Gated Community</li>
                <li><i class="fa-solid fa-house"/>24/7 Security</li>
                </ul>
            </div>

            </div>
        </div>
        </section>


        <section className="villa-section">
        <div className="villa-container">

            <div className="villa-image">
            <img src={prozone} alt="Prozone Palms" />
            <div className="villa-badge">Premium Apartments</div>
            </div>

            <div className="villa-content">

            <h2>Prozone Palms – 1, 2 & 3 BHK Apartments</h2>
            <h4 className="location">SARAVANAMPATTI, COIMBATORE</h4>
            <a href="tel:+91 94443 86103" className="contact-btn">Contact Now</a>

            <div className="villa-details">
                <div><strong>Project Type:</strong> Apartment</div>
                <div><strong>Price Range:</strong> ₹1.47 Cr Onwards</div>
                <div><strong>BedRooms:</strong> 1, 2 & 3 BHK</div>
                <div><strong>Property Area:</strong> 721 SqFt - 1753 SqFt</div>
            </div>

            <div className="overview">
                <h5>Project Overview</h5>
                <p>
                Prozone Palms offers modern 1, 2 & 3 BHK apartments
                in Saravanampatti, Coimbatore. With sizes ranging from
                721 SqFt to 1753 SqFt, the project is ideal for families
                seeking urban convenience and lifestyle comfort.
                Located close to IT parks, educational institutions
                and commercial centers, it ensures excellent connectivity
                and strong investment potential.
                </p>
            </div>

            <div className="amenities">
                <h5>Amenities</h5>
                <ul>
                <li><i class="fa-solid fa-house"/>Clubhouse</li>
                <li><i class="fa-solid fa-house"/>Swimming Pool</li>
                <li><i class="fa-solid fa-house"/>Gym</li>
                <li><i class="fa-solid fa-house"/>Landscaped Gardens</li>
                <li><i class="fa-solid fa-house"/>Indoor Games</li>
                <li><i class="fa-solid fa-house"/>Children’s Play Area</li>
                <li><i class="fa-solid fa-house"/>Power Backup</li>
                <li><i class="fa-solid fa-house"/>24/7 Security</li>
                </ul>
            </div>

            </div>
        </div>
        </section>
      


        <Cta/>
        
        </>
    );
}

export default Coimbatore