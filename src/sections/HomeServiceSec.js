import '../css/style-1.css';
import '../css/style-2.css';
import '../css/style.css';

import { useState } from "react";

// Coimbatore
import prozone from "../images/images-1/prozone.jpg";
import radiancesplender from "../images/images-1/radiance-splendour.jpg";
import cosmos from "../images/images-1/casagrand-cosmos.jpg";
import city from "../images/images-1/gsquare-city.jpg";
import blossom from "../images/images-1/gsquare-blossom.jpg";
import pride from "../images/images-1/gsquare-pride.jpg";
import ghats from "../images/images-1/gsquare-western-ghats.jpg"
import cosmos2 from "../images/images-1/kosmo.jpg"
import tvhcrest from "../images/images-1/tvhcrest.jpg";
import tvhSerenity from "../images/images-1/tvhserenity.jpg";

import CasagrandAlpine from "../images/images-1/CasagrandAlpine.jpg";
import CasagrandColosseum from "../images/images-1/CasagrandColosseum.png";
import CasagrandOrchardsPhase1 from "../images/images-1/CasagrandOrchardsPhase1.jpg";
import CasagrandCelest from "../images/images-1/CasagrandCelest.jpg";
import CasagrandOrchardsVillaPH2 from "../images/images-1/CasagrandOrchardsVillaPH2.png";
import CasagrandKeystone from "../images/images-1/CasagrandKeystone.jpg";
import CasagrandAscentia from "../images/images-1/CasagrandAscentia.webp";
import CasagrandSpacio from "../images/images-1/Casagrand-Spacio.jpg";

import RadianceRiverwoods from "../images/images-1/RadianceRiverwoods.jpg";
import RadianceImperia from "../images/images-1/RadianceImperia.png";


// chennai
import utopia from "../images/images-1/utopia.jpg";
import radiancesupreme from "../images/images-1/radiancesuprema.jpg";
import blue from"../images/images-1/bluewalllahari.jpg";
import gayatri from"../images/images-1/gayatri.jpg";
import shakti from"../images/images-1/shakti.jpg";
import RadiaRecidencia from "../images/images-1/Radia-recidencia.jpg";


function HomeServiceSec(){

    const [visibleCount, setVisibleCount] = useState(9);

    const properties = [
    {
        image: RadianceImperia,
        title: "Radiance Imperia",
        location: "Veerakeralam, Coimbatore",
        size: `8.17 Acres`,
        price: "₹2.27 Cr Onwards",
        type: "3, 3.5, 4 & 5 BHK Villas"
    },
    {
        image: RadianceRiverwoods,
        title: "Radiance Riverwoods",
        location: "Perur Main Road, Coimbatore",
        size: `3 Acres`,
        price: "₹54 L to ₹1.21 Cr",
        type: "1, 2 & 3 BHK Apartments"
    },

    {
        image: CasagrandAlpine,
        title: "Casagrand Alpine",
        location: "Keeranatham, Coimbatore",
        size: `1.4 Acres`,
        price: "₹71L - ₹98 L",
        type: "2 & 3 BHK Apartments"
    },

    {
        image: CasagrandColosseum,
        title: "Casagrand Colosseum",
        location: "Avarampalayam, Coimbatore",
        size: `2.6 Acres`,
        price: "₹6.66Cr to 6.86Cr",
        type: "4 BHK Villas"
    },
    {
        image: CasagrandOrchardsPhase1,
        title: "Casagrand Orchards Phase I",
        location: "Kannampalayam, Coimbatore",
        size: `9.52 Acres`,
        price: "₹71 L to ₹99 L",
        type: "2 & 3 BHK Apartments"
    },
    {
        image: CasagrandCelest,
        title: "Casagrand Celest",
        location: "Sulur, Coimbatore",
        size: `2.66 Acres`,
        price: "₹ 56L to ₹ 70L",
        type: "2 & 3 BHK Apartments"
    },
    {
        image: CasagrandOrchardsVillaPH2,
        title: "Casagrand Orchards Villa – PH II",
        location: "Kannampalayam, Coimbatore",
        size: `9.52 Acres`,
        price: "₹ 1.60 Cr to ₹ 2.25 Cr",
        type: "3 & 4 BHK Villas"
    },
    {
        image: CasagrandKeystone,
        title: "Casagrand Keystone",
        location: "Rakkiyapalayam, Tiruppur, Coimbatore",
        size: `2.2 Acres`,
        price: "₹ 68L - ₹ 99L",
        type: "2 & 3 BHK Apartments"
    },
    {
        image: CasagrandAscentia,
        title: "Casagrand Ascentia",
        location: "Saravanampatti, Coimbatore",
        size: `4 Acres`,
        price: "₹ 65 L Onwards",
        type: "2 & 3 BHK Apartments"
        },
    {
        image: CasagrandSpacio,
        title: "Casagrand Spacio",
        location: "Chettipalayam, Tirupur, Coimbatore",
        size: `2 Acres`,
        price: "₹ 2.49Cr Onwards",
        type: "4 BHK Villa"
    },
    {
        image: tvhSerenity,
        title: "TVH Serenity",
        location: "Avinashi, Coimbatore",
        size: `2 BHK – 868 – 1055 Sqft`,
        price: "₹ 56.5 Lakhs Onwards",
        type: "Premium 2 BHK Flats"
    },
    {
        image: tvhcrest,
        title: "Tvh Crest",
        location: "Avinashi, Coimbatore",
        size: `1 BHK – 784 SqFt \n 2 BHK – 1038 – 1154 SqFt`,
        price: "1 BHK – ₹52.53 Lakhs onwards \n 2 BHK – ₹69.53 Lakhs onwards ",
        type: "1 & 2 BHK"
    },
    {
        image: ghats,
        title: "G Square Western Ghats",
        location: "Palanthurai Road, Coimbatore",
        size: "3 - 4 Cents",
        price: "₹ -- Lakhs Onwards",
        type: "Residential Plots"
    },
    {
        image: blossom,
        title: "G Square Blossom",
        location: "Avinashi, Coimbatore",
        size: "3 - 4 Cents",
        price: "₹ 19.50 Lakhs Onwards",
        type: "Residential Plots"
    },
    {
        image: pride,
        title: "G Square Pride TVS Nagar",
        location: "Edayarpalayam, Coimbatore",
        size: "3 - 6 Cents",
        price: "₹ 30 Lakhs Onwards",
        type: "Residential Plots"
    },
    {
        image: city,
        title: "G Square City",
        location: "L&T Bypass, Coimbatore",
        size: "3 - 4 Cents",
        price: "₹ 57 Lakhs Onwards",
        type: "Residential Plots"
    },
    {
        image: radiancesplender,
        title: "Radiance Spendour",
        location: "Vedapatti, Coimbatore",
        size: "2105 SqFt - 3015 SqFt",
        price: "₹ 36 Lakhs Onwards",
        type: "3 & 4 BHK Villa"
    },
    {
        image: radiancesupreme,
        title: "Radiance Suprema",
        location: "Madhavaram, Chennai",
        size: "992 - 1422 SqFt",
        price: "₹ 98 Lakhs - 1.35 Cr",
        type: "2,3 & 4 BHK Apartments"
    },
    {
        image: RadiaRecidencia,
        title: "Radiance Residencia",
        location: "Thaiyur, OMR",
        size: "982 - 2956 SqFt",
        price: "₹ 55 Lakhs - 83 Lakhs",
        type: "Plots"
    },
    {
        image: cosmos,
        title: "Casagrand Cosmos",
        location: "Viswanathapuram, Coimbatore",
        size: "625 SqFt - 1650 SqFt",
        price: "₹ 29 Lakhs - 89 Lakhs",
        type: "2 & 3 BHK Apartment"
    },
    {
        image: cosmos2,
        title: "Casagrand Cosmos",
        location: "Viswanathapuram, Coimbatore",
        size: "2500 SqFt - 3441 SqFt",
        price: "Start from ₹ 33 Lakhs",
        type: "3 & 4 BHK Villa"
    },
    {
        image: prozone,
        title: "Prozone Palms",
        location: "Saravanampatti, Coimbatore",
        size: "721 SqFt - 1753 SqFt",
        price: "Start from ₹ 1.47 Cr",
        type: "1,2 & 3 BHK Apartment"
    },
    {
        image: gayatri,
        title: "Gayatri Adithya",
        location: "Besant Nagar, Chennai",
        size: "Starts from 1390 SqFt",
        price: "₹ 29 Lakhs - 74 Lakhs",
        type: "3 BHK Apartment"
    },
    {
        image: shakti,
        title: "Sakthi Enclave",
        location: "Alwarpet, Chennai",
        size: "1010 SqFt - 2000 SqFt",
        price: "₹ 2.26cr onwards",
        type: "2 & 3 BHK Apartments"
    },
    {
        image: blue,
        title: "Blue Wall Lahari",
        location: "Nungambakkam, Chennai",
        size: "2020 SqFt - 2904 SqFt",
        price: "₹ 1.36cr onwards",
        type: "3 BHK Apartment"
    },
    {
        image: utopia,
        title: "Casagrand Utopia",
        location: "Manapakkam, Chennai",
        size: "991 SqFt - 4,144 SqFt",
        price: "₹ 3.05 Cr onwards",
        type: "2,3 & 4 BHK Apartment"
    }
    ];

    const loadMoreProjects = () => {
        setVisibleCount(prev => prev + 9);
    };

    return(
        <> 
            <section className="homeServiceSection py-5">
                <div className="container">

                    <div className="row text-center mb-5">
                    <div className="col-12">
                        <h2 className="homeServiceTitle">Our Projects</h2>
                        <p className="homeServiceSubtitle">
                        Discover premium residential opportunities in prime locations.
                        </p>
                    </div>
                    </div>

                    <div className="row">
                        {properties.slice(0, visibleCount).map((property, index) => (
                            <div className="col-lg-4 col-md-6 mb-4" key={index}>
                            <div className="homeServiceCard">

                                <div className="homeServiceImage">
                                <img src={property.image} alt={property.title} />
                                <div className="homeServiceOverlay">
                                    <span>{property.type}</span>
                                </div>
                                </div>

                                <div className="homeServiceContent">
                                <h5>{property.title}</h5>
                                <p className="homeServiceLocation">{property.location}</p>
                                <p className="homeServiceSize">{property.size}</p>
                                <p className="homeServicePrice">{property.price}</p>
                                </div>

                            </div>
                            </div>
                        ))}
                    </div>

                    {visibleCount < properties.length && (
                        <div className="text-center mt-4">
                            <button className="btn btn-primary Load-more-btn" onClick={loadMoreProjects}>
                                Load More
                            </button>
                        </div>
                    )}

                </div>
            </section>
        </>
    );
}


export default HomeServiceSec;