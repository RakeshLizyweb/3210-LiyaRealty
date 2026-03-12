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
const properties = [
      {
        image: tvhSerenity,
        badge: "Premium 2 BHK Flats",
        title: "TVH Serenity – Premium 2 BHK Flats",
        location: "AVINASHI, COIMBATORE",
        details: {
          type: "Residential Apartments",
          size: "2 BHK – 868 – 1055 Sqft",
          place: "Avinashi",
          price: "₹ 56.5 Lakhs Onwards"
        },
        overview:
          "TVH Serenity offers thoughtfully designed 2 BHK apartments in Avinashi, Coimbatore with spacious layouts and modern living spaces.",
        amenities: [
          "Gated Community",
          "24/7 Security",
          "Covered Car Parking",
          "Power Backup",
          "Lift Facility",
          "Children’s Play Area",
          "Landscaped Garden",
          "CCTV Surveillance"
        ]
      },

      {
        image: tvhcrest,
        badge: "1 & 2 BHK Apartments",
        title: "TVH Crest – Premium 1 & 2 BHK Apartments",
        location: "AVINASHI, COIMBATORE",
        details: {
          type: "Residential Apartments",
          size: "1 BHK – 784 SqFt | 2 BHK – 1038 – 1154 SqFt",
          place: "Avinashi",
          price: "1 BHK – ₹52.53 Lakhs | 2 BHK – ₹69.53 Lakhs"
        },
        overview:
          "TVH Crest offers modern 1 and 2 BHK apartments designed for comfortable urban living in Avinashi, Coimbatore.",
        amenities: [
          "Gated Community",
          "24/7 Security",
          "Covered Car Parking",
          "Lift Facility",
          "Power Backup",
          "Children’s Play Area",
          "Landscaped Garden",
          "CCTV Surveillance"
        ]
      },

      {
        image: ghats,
        badge: "Residential Plots",
        title: "G Square Western Ghats – Premium Residential Plots",
        location: "PALANTHURAI ROAD, COIMBATORE",
        details: {
          type: "Residential Plots",
          size: "3 - 4 Cents",
          place: "Palanthurai Road",
          price: "DTCP Approved"
        },
        overview:
          "G Square Western Ghats offers premium residential plots in a peaceful environment with excellent connectivity.",
        amenities: [
          "Blacktop Internal Roads",
          "Street Lighting",
          "24/7 Security",
          "Gated Community",
          "Rainwater Harvesting",
          "Children’s Play Area"
        ]
      },

      {
        image: blossom,
        badge: "Residential Plots",
        title: "G Square Blossom – Premium Residential Plots",
        location: "AVINASHI, COIMBATORE",
        details: {
          type: "Residential Plots",
          size: "3 - 4 Cents",
          place: "Avinashi",
          price: "₹19.50 Lakhs Onwards"
        },
        overview:
          "G Square Blossom offers well-planned residential plots in Avinashi with DTCP approval and excellent connectivity.",
        amenities: [
          "Gated Community",
          "Street Lights",
          "Blacktop Roads",
          "Water Line Provision",
          "Rainwater Harvesting",
          "Children’s Play Area"
        ]
      },

      {
        image: pride,
        badge: "Residential Plots",
        title: "G Square Pride TVS Nagar – Premium Residential Plots",
        location: "EDAYARPALAYAM, COIMBATORE",
        details: {
          type: "Residential Plots",
          size: "3 - 6 Cents",
          place: "Edayarpalayam",
          price: "₹30 Lakhs Onwards"
        },
        overview:
          "G Square Pride offers DTCP approved residential plots in a fast growing locality of Coimbatore.",
        amenities: [
          "Gated Community",
          "Blacktop Roads",
          "Street Lighting",
          "24/7 Security",
          "Children’s Play Area",
          "Rainwater Harvesting"
        ]
      },

      {
        image: city,
        badge: "Residential Plots",
        title: "G Square City – Premium Residential Plots",
        location: "L&T BYPASS, COIMBATORE",
        details: {
          type: "Residential Plots",
          size: "3 - 4 Cents",
          place: "L&T Bypass",
          price: "₹57 Lakhs Onwards"
        },
        overview:
          "G Square City offers strategically located residential plots along L&T Bypass with excellent future value.",
        amenities: [
          "Gated Community",
          "Street Lighting",
          "Blacktop Roads",
          "Drainage System",
          "Children’s Play Area",
          "Green Open Spaces"
        ]
      },

      {
        image: radiance,
        badge: "Luxury Villas",
        title: "Radiance Splendour – 3 & 4 BHK Luxury Villas",
        location: "VEDAPATTI, COIMBATORE",
        details: {
          type: "Villa",
          size: "3 & 4 BHK",
          place: "Vedapatti",
          price: "₹36 Lakhs Onwards"
        },
        overview:
          "Radiance Splendour offers spacious luxury villas designed with modern architecture in Vedapatti.",
        amenities: [
          "Clubhouse",
          "Gym",
          "Children’s Play Area",
          "Multipurpose Hall",
          "24/7 Security",
          "Power Backup"
        ]
      },

      {
        image: cosmos,
        badge: "Premium Apartments",
        title: "Casagrand Cosmos – 2 & 3 BHK Apartments",
        location: "VISWANATHAPURAM, COIMBATORE",
        details: {
          type: "Apartment",
          size: "625 SqFt - 1650 SqFt",
          place: "Viswanathapuram",
          price: "₹29 Lakhs - ₹89 Lakhs"
        },
        overview:
          "Casagrand Cosmos offers modern apartments with premium amenities and excellent connectivity.",
        amenities: [
          "Clubhouse",
          "Swimming Pool",
          "Gym",
          "Children’s Play Area",
          "Indoor Games",
          "24/7 Security"
        ]
      },

      {
        image: kosmos,
        badge: "Luxury Villas",
        title: "Casagrand Cosmos – 3 & 4 BHK Villas",
        location: "VISWANATHAPURAM, COIMBATORE",
        details: {
          type: "Villa",
          size: "2500 SqFt - 3441 SqFt",
          place: "Viswanathapuram",
          price: "₹33 Lakhs Onwards"
        },
        overview:
          "Casagrand Cosmos Villas provide spacious premium villas with modern lifestyle amenities.",
        amenities: [
          "Private Garden",
          "Clubhouse",
          "Gym",
          "Multipurpose Hall",
          "Children’s Play Area",
          "24/7 Security"
        ]
      },

      {
        image: prozone,
        badge: "Premium Apartments",
        title: "Prozone Palms – 1, 2 & 3 BHK Apartments",
        location: "SARAVANAMPATTI, COIMBATORE",
        details: {
          type: "Apartment",
          size: "721 SqFt - 1753 SqFt",
          place: "Saravanampatti",
          price: "₹1.47 Cr Onwards"
        },
        overview:
          "Prozone Palms offers premium apartments located near major IT hubs in Saravanampatti.",
        amenities: [
          "Clubhouse",
          "Swimming Pool",
          "Gym",
          "Landscaped Garden",
          "Children’s Play Area",
          "24/7 Security"
        ]
      }

      ];




    return (
    <>

    {/* Header */}

    <section
    style={{
    position: "relative",
    backgroundImage: `url(${coimbatorepath})`,
    backgroundAttachment: "fixed",
    backgroundSize: "cover",
    backgroundPosition: "center",
    padding: "120px 20px",
    color: "#fff",
    textAlign: "center"
    }}
    >

      <div
      style={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      background: "linear-gradient(10deg, rgba(0, 0, 0, 0.13), rgba(0, 0, 0, 0.13))"
      }}
      ></div>

        <div style={{ position: "relative", zIndex: 2 }}>
        <h1 style={{ fontSize: "3rem", fontWeight: "800", color:"white"}}>Coimbatore</h1>

        <p className='text-white'>We’re Here to Help You Find Your Dream Property</p>

      </div>

    </section>

    <div className="villa-content">
        <h1 className="section-title">Properties in Coimbatore</h1>

        <p className="section-subtitle">
        Experience thoughtfully designed homes crafted for modern lifestyles.
        </p>
    </div>

    {/* PROPERTY LOOP */}

    {properties.map((property, index) => (

    <section className="villa-section" key={index}>

        <div className="villa-container">

        <div className="villa-image">

        <img src={property.image} alt={property.title} />

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
        <strong>Flat Size:</strong> {property.details.size}
        </div>

        <div>
        <strong>Location:</strong> {property.details.place}
        </div>

        <div>
        <strong>Price:</strong> {property.details.price}
        </div>

        </div>

        <div className="overview">

        <h5>Project Overview</h5>

        <p>{property.overview}</p>

        </div>

        <div className="amenities">

        <h5>Amenities</h5>

        <ul>

        {property.amenities.map((amenity, i) => (

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

    <Cta />

    </>

    );
}

export default Coimbatore