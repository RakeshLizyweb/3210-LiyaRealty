import '../css/style-1.css';
import '../css/style-2.css';
import '../css/style.css';

import utopia from "../images/images-1/utopia.jpg";
import chennaipath from "../images/images-1/chennai.jpg";
import radiance from"../images/images-1/radiancesuprema.jpg";
import blue from"../images/images-1/bluewalllahari.jpg";
import gayatri from"../images/images-1/gayatri.jpg";
import shakti from"../images/images-1/shakti.jpg";
import RadiaRecidencia from"../images/images-1/Radia-recidencia.jpg";


import Cta from '../sections/Cta';

function Chennai() {

const properties = [

        {
            image: radiance,
            badge: "Luxury Apartments",
            title: "Radiance Suprema – 2, 3 & 4 BHK Luxury Apartments",
            location: "MADHAVARAM, CHENNAI",
            details:{
                type:"Apartments",
                area:"992 - 1422 Sqft",
                bedrooms:"2, 3 and 4",
                extra:"High-Rise Towers"
            },
            overview:`Starting from ₹95 Lakhs onwards. Radiance Suprema offers spacious luxury apartments in Madhavaram with excellent connectivity to Anna Nagar and Kolathur.`,
            amenities:[
                "Grand Clubhouse",
                "Swimming Pool",
                "Fully Equipped Gym",
                "Multipurpose Hall",
                "Indoor Games Room",
                "Children’s Play Area",
                "Landscaped Gardens",
                "Jogging Track",
                "CCTV Surveillance",
                "Power Backup",
                "Rainwater Harvesting",
                "24/7 Security"
            ]
        },

        {
            image: RadiaRecidencia,
            badge: "Premium Plots",
            title: "Radiance Residencia – Premium Residential Plots",
            location: "THAIYUR, OMR",
            details:{
                type:"Plots",
                area:"982 - 2956 SqFt",
                bedrooms:"₹55 Lakhs - ₹83 Lakhs",
                extra:"Thaiyur, OMR"
            },
            overview:`Radiance Residencia offers premium residential plots located in Thaiyur on OMR with excellent connectivity to IT hubs and educational institutions.`,
            amenities:[
                "Gated Community",
                "Blacktop Roads",
                "Street Lighting",
                "Children’s Play Area",
                "Landscaped Parks",
                "24/7 Security",
                "Drainage System",
                "Water Supply"
            ]
        },

        {
            image: utopia,
            badge: "Premium Apartments",
            title: "Casagrand Utopia – 2 & 3 BHK Premium Apartments",
            location: "MANAPAKKAM, CHENNAI",
            details:{
                type:"Apartments",
                area:"1100 - 1800 Sqft",
                bedrooms:"2 and 3",
                extra:"Stilt + 5 Floors"
            },
            overview:`Casagrand Utopia offers premium apartments near DLF IT Park and Porur with modern architecture and lifestyle amenities.`,
            amenities:[
                "Landscaped Garden",
                "Clubhouse",
                "Swimming Pool",
                "Fully Equipped Gym",
                "Children’s Play Area",
                "Indoor Games Room",
                "Multipurpose Hall",
                "Jogging Track",
                "CCTV Surveillance",
                "Power Backup",
                "Rainwater Harvesting",
                "24/7 Security"
            ]
        },

        {
            image: gayatri,
            badge: "Premium Apartment",
            title: "Gayatri Adithya – 3 BHK Apartment",
            location: "BESANT NAGAR, CHENNAI",
            details:{
                type:"Apartment",
                area:"Starts from 1390 Sqft",
                bedrooms:"3 BHK",
                extra:"₹29 Lakhs - ₹74 Lakhs"
            },
            overview:`Gayatri Adithya offers spacious 3 BHK apartments in Besant Nagar with easy access to beaches, schools and hospitals.`,
            amenities:[
                "Covered Car Parking",
                "Lift Facility",
                "CCTV Surveillance",
                "Power Backup",
                "Rainwater Harvesting",
                "24/7 Security",
                "Intercom Facility",
                "Vaastu Compliant Design"
                ]
        },

        {
            image: shakti,
            badge: "Premium Apartments",
            title: "Sakthi Enclave – 2 & 3 BHK Apartments",
            location: "ALWARPET, CHENNAI",
            details:{
                type:"Apartments",
                area:"1010 Sqft – 2000 Sqft",
                bedrooms:"2 & 3 BHK",
                extra:"Prime Residential Area"
            },
            overview:`Sakthi Enclave offers elegantly designed apartments in Alwarpet with excellent connectivity to schools, hospitals and business hubs.`,
            amenities:[
                "Covered Car Parking",
                "Lift Facility",
                "Power Backup",
                "CCTV Surveillance",
                "24/7 Security",
                "Rainwater Harvesting",
                "Intercom Facility",
                "Landscaped Common Areas"
            ]
        },

        {
            image: blue,
            badge: "Luxury Apartment",
            title: "Blue Wall Lahari – 3 BHK Apartment",
            location: "NUNGAMBAKKAM, CHENNAI",
            details:{
                type:"Apartment",
                area:"2020 Sqft – 2904 Sqft",
                bedrooms:"3 BHK",
                extra:"₹1.36 Cr Onwards"
            },
            overview:`Blue Wall Lahari offers luxury apartments in Nungambakkam with spacious interiors and premium lifestyle amenities.`,
            amenities:[
                "Covered Car Parking",
                "Lift Facility",
                "Power Backup",
                "CCTV Surveillance",
                "24/7 Security",
                "Rainwater Harvesting",
                "Intercom Facility",
                "Premium Lobby & Common Areas"
            ]
        }

        ];

    return(
        <>

        {/* Header Section */}

        <section
        style={{
        position:"relative",
        backgroundImage:`url(${chennaipath})`,
        backgroundSize:"cover",
        backgroundPosition:"center",
        backgroundAttachment:"fixed",
        padding:"120px 20px",
        color:"#fff",
        textAlign:"center"
        }}
        >

            <div
            className="Chennai-path"
            style={{
            position:"absolute",
            top:0,
            left:0,
            width:"100%",
            height:"100%",
            background:"linear-gradient(10deg, rgba(0, 0, 0, 0.23), rgba(0, 0, 0, 0.28))"
            }}
            ></div>
                <div style={{position:"relative",zIndex:2}}>
                <h1 style={{fontSize:"3rem",fontWeight:"800" , color:"white"}}>Chennai</h1>

                <p style={{fontSize:"1.1rem",marginBottom:"20px", color:"white"}}>
                We’re Here to Help You Find Your Dream Property
                </p>
            </div>
        </section>


        <div className="villa-content">
            <h1 className="section-title">Properties in Chennai</h1>
            <p className="section-subtitle">
            Experience thoughtfully designed homes crafted for modern lifestyles.
            </p>
        </div>


        {/* Property Loop */}
        {properties.map((property,index)=>(
        <section className="villa-section" key={index}>

            <div className="villa-container">

            <div className="villa-image">
            <img src={property.image} alt={property.title}/>
            <div className="villa-badge">{property.badge}</div>
            </div>

            <div className="villa-content">

            <h2>{property.title}</h2>
            <h4 className="location">{property.location}</h4>

            <a href="tel:+919444386103" className="contact-btn">
            Contact Now
            </a>

            <div className="villa-details">

            <div>
                <strong>Project Type:</strong> {property.details.type}
            </div>

            <div>
                <strong>Property Area:</strong> {property.details.area}
            </div>

            <div>
                <strong>BedRooms:</strong> {property.details.bedrooms}
            </div>

            <div>
                <strong>Details:</strong> {property.details.extra}
            </div>
            </div>

            <div className="overview">

                <h5>Project Overview</h5>
                <p>{property.overview}</p>

            </div>

            <div className="amenities">

            <h5>Amenities</h5>

            <ul>
            {property.amenities.map((amenity,i)=>(
                <li key={i}>
                <i className="fa-solid fa-house"></i> {amenity}
                </li>
                ))}
            </ul>

            </div>
            </div>
            </div>

        </section>
        ))}


        <Cta/>

        </>
        );
}

export default Chennai