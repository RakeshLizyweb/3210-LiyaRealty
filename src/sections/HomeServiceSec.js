import '../css/style-1.css';
import '../css/style-2.css';
import '../css/style.css';

import { useState } from "react";
import { useNavigate } from "react-router-dom";

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

import InfiniumLotusMeadows from "../images/images-1/InfiniumLotusMeadows.webp";
import InfiniumCentral16 from "../images/images-1/InfiniumCentral16.webp";
import InfiniumCrimsonCrest from "../images/images-1/InfiniumCrimsonCrest.jpg";
import InfiniumSky9 from "../images/images-1/InfiniumSky9.jpg";

import GoldenGrove from "../images/images-1/GoldenGrove.avif";

import Turin from "../images/images-1/Turin.jpeg";
import Patio from "../images/images-1/Patio.jpg";

import DACThulir from "../images/images-1/DACThulir.jpg";

// chennai
import utopia from "../images/images-1/utopia.jpg";
import radiancesupreme from "../images/images-1/radiancesuprema.jpg";
import blue from"../images/images-1/bluewalllahari.jpg";
import gayatri from"../images/images-1/gayatri.jpg";
import shakti from"../images/images-1/shakti.jpg";
import RadiaRecidencia from "../images/images-1/Radia-recidencia.jpg";

function HomeServiceSec(){

    const properties = [
    {
        image: DACThulir,
        city:"Coimbatore",
        title: "DAC Thulir",
        location: "GN Mills, Coimbatore",
        size: `976 to 1460 sq.ft`,
        price: "₹ 65 Lakhs Onwards",
        type: "2 & 3 BHK Apartments"
    },
    {
        image: Patio,
        city:"Coimbatore",
        title: "Patio",
        location: "Coimbatore",
        size: `544 – 876 sq.ft`,
        price: "Price On Request",
        type: "1 & 2 BHK Apartments"
    },
    {
        image: Turin,
        city:"Coimbatore",
        title: "Turin",
        location: "Coimbatore",
        size: `—`,
        price: "Price On Request",
        type: "2 & 3 BHK Apartments"
    },
    {
        image: GoldenGrove,
        city:"Coimbatore",
        title: "Pressana Infra - Golden Grove",
        location: "Nanjundapuram, Coimbatore",
        size: `14.45 Acres`,
        price: "Price On Request",
        type: "DTCP Approved Villa Plots"
    },
    {
        image: InfiniumSky9,
        city:"Coimbatore",
        title: "Infinium Sky9",
        location: "Goldwins, Coimbatore",
        size: `2.16 Acres`,
        price: "₹76 Lacs Onwards",
        type: "2 & 3 BHK Apartments"
    },
    {
        image: InfiniumCrimsonCrest,
        city:"Coimbatore",
        title: "Infinium Crimson Crest",
        location: "Tidel Park Area, Coimbatore",
        size: `1.50 Acres`,
        price: "₹85 Lacs Onwards",
        type: "2 & 3 BHK Apartments"
    },
    {
        image: InfiniumCentral16,
        city:"Coimbatore",
        title: "Infinium Central 16",
        location: "Singanallur, Coimbatore",
        size: `1.42 Acres`,
        price: "₹4.50 Crs Onwards",
        type: "4 BHK Villas"
    },
    {
        image: InfiniumLotusMeadows,
        city:"Coimbatore",
        title: "Infinium Lotus Meadows",
        location: "Saravanampatti, Coimbatore",
        size: `4.21 Acres`,
        price: "₹80 L Onwards",
        type: "2, 3 & 4 BHK Villas & Apartments"
    },
    {
        image: RadianceImperia,
        city:"Coimbatore",
        title: "Radiance Imperia",
        location: "Veerakeralam, Coimbatore",
        size: `8.17 Acres`,
        price: "₹2.27 Cr Onwards",
        type: "3, 3.5, 4 & 5 BHK Villas"
    },
    {
        image: RadianceRiverwoods,
        city:"Coimbatore",
        title: "Radiance Riverwoods",
        location: "Perur Main Road, Coimbatore",
        size: `3 Acres`,
        price: "₹54 L to ₹1.21 Cr",
        type: "1, 2 & 3 BHK Apartments"
    },

    {
        image: CasagrandAlpine,
        city:"Coimbatore",
        title: "Casagrand Alpine",
        location: "Keeranatham, Coimbatore",
        size: `1.4 Acres`,
        price: "₹71L - ₹98 L",
        type: "2 & 3 BHK Apartments"
    },

    {
        image: CasagrandColosseum,
        city:"Coimbatore",
        title: "Casagrand Colosseum",
        location: "Avarampalayam, Coimbatore",
        size: `2.6 Acres`,
        price: "₹6.66Cr to 6.86Cr",
        type: "4 BHK Villas"
    },
    {
        image: CasagrandOrchardsPhase1,
        city:"Coimbatore",
        title: "Casagrand Orchards Phase I",
        location: "Kannampalayam, Coimbatore",
        size: `9.52 Acres`,
        price: "₹71 L to ₹99 L",
        type: "2 & 3 BHK Apartments"
    },
    {
        image: CasagrandCelest,
        city:"Coimbatore",
        title: "Casagrand Celest",
        location: "Sulur, Coimbatore",
        size: `2.66 Acres`,
        price: "₹ 56L to ₹ 70L",
        type: "2 & 3 BHK Apartments"
    },
    {
        image: CasagrandOrchardsVillaPH2,
        city:"Coimbatore",
        title: "Casagrand Orchards Villa – PH II",
        location: "Kannampalayam, Coimbatore",
        size: `9.52 Acres`,
        price: "₹ 1.60 Cr to ₹ 2.25 Cr",
        type: "3 & 4 BHK Villas"
    },
    {
        image: CasagrandKeystone,
        city:"Coimbatore",
        title: "Casagrand Keystone",
        location: "Rakkiyapalayam, Tiruppur, Coimbatore",
        size: `2.2 Acres`,
        price: "₹ 68L - ₹ 99L",
        type: "2 & 3 BHK Apartments"
    },
    {
        image: CasagrandAscentia,
        city:"Coimbatore",
        title: "Casagrand Ascentia",
        location: "Saravanampatti, Coimbatore",
        size: `4 Acres`,
        price: "₹ 65 L Onwards",
        type: "2 & 3 BHK Apartments"
        },
    {
        image: CasagrandSpacio,
        city:"Coimbatore",
        title: "Casagrand Spacio",
        location: "Chettipalayam, Tirupur, Coimbatore",
        size: `2 Acres`,
        price: "₹ 2.49Cr Onwards",
        type: "4 BHK Villa"
    },
    {
        image: tvhSerenity,
        city:"Coimbatore",
        title: "TVH Serenity",
        location: "Avinashi, Coimbatore",
        size: `2 BHK – 868 – 1055 Sqft`,
        price: "₹ 56.5 Lakhs Onwards",
        type: "Premium 2 BHK Flats"
    },
    {
        image: tvhcrest,
        city:"Coimbatore",
        title: "Tvh Crest",
        location: "Avinashi, Coimbatore",
        size: `1 BHK – 784 SqFt \n 2 BHK – 1038 – 1154 SqFt`,
        price: "1 BHK – ₹52.53 Lakhs onwards \n 2 BHK – ₹69.53 Lakhs onwards ",
        type: "1 & 2 BHK"
    },
    {
        image: ghats,
        city:"Coimbatore",
        title: "G Square Western Ghats",
        location: "Palanthurai Road, Coimbatore",
        size: "3 - 4 Cents",
        price: "₹ -- Lakhs Onwards",
        type: "Residential Plots"
    },
    {
        image: blossom,
        city:"Coimbatore",
        title: "G Square Blossom",
        location: "Avinashi, Coimbatore",
        size: "3 - 4 Cents",
        price: "₹ 19.50 Lakhs Onwards",
        type: "Residential Plots"
    },
    {
        image: pride,
        city:"Coimbatore",
        title: "G Square Pride TVS Nagar",
        location: "Edayarpalayam, Coimbatore",
        size: "3 - 6 Cents",
        price: "₹ 30 Lakhs Onwards",
        type: "Residential Plots"
    },
    {
        image: city,
        city:"Coimbatore",
        title: "G Square City",
        location: "L&T Bypass, Coimbatore",
        size: "3 - 4 Cents",
        price: "₹ 57 Lakhs Onwards",
        type: "Residential Plots"
    },
    {
        image: radiancesplender,
        city:"Coimbatore",
        title: "Radiance Spendour",
        location: "Vedapatti, Coimbatore",
        size: "2105 SqFt - 3015 SqFt",
        price: "₹ 36 Lakhs Onwards",
        type: "3 & 4 BHK Villa"
    },
    {
        image: radiancesupreme,
        city:"Chennai",
        title: "Radiance Suprema",
        location: "Madhavaram, Chennai",
        size: "992 - 1422 SqFt",
        price: "₹ 98 Lakhs - 1.35 Cr",
        type: "2,3 & 4 BHK Apartments"
    },
    {
        image: RadiaRecidencia,
        city:"Chennai",
        title: "Radiance Residencia",
        location: "Thaiyur, OMR",
        size: "982 - 2956 SqFt",
        price: "₹ 55 Lakhs - 83 Lakhs",
        type: "Plots"
    },
    {
        image: cosmos,
        city:"Coimbatore",
        title: "Casagrand Cosmos",
        location: "Viswanathapuram, Coimbatore",
        size: "625 SqFt - 1650 SqFt",
        price: "₹ 29 Lakhs - 89 Lakhs",
        type: "2 & 3 BHK Apartment"
    },
    {
        image: cosmos2,
        city:"Coimbatore",
        title: "Casagrand Cosmos",
        location: "Viswanathapuram, Coimbatore",
        size: "2500 SqFt - 3441 SqFt",
        price: "Start from ₹ 33 Lakhs",
        type: "3 & 4 BHK Villa"
    },
    {
        image: prozone,
        city:"Coimbatore",
        title: "Prozone Palms",
        location: "Saravanampatti, Coimbatore",
        size: "721 SqFt - 1753 SqFt",
        price: "Start from ₹ 1.47 Cr",
        type: "1,2 & 3 BHK Apartment"
    },
    {
        image: gayatri,
        city:"Chennai",
        title: "Gayatri Adithya",
        location: "Besant Nagar, Chennai",
        size: "Starts from 1390 SqFt",
        price: "₹ 29 Lakhs - 74 Lakhs",
        type: "3 BHK Apartment"
    },
    {
        image: shakti,
        city:"Chennai",
        title: "Sakthi Enclave",
        location: "Alwarpet, Chennai",
        size: "1010 SqFt - 2000 SqFt",
        price: "₹ 2.26cr onwards",
        type: "2 & 3 BHK Apartments"
    },
    {
        image: blue,
        city:"Chennai",
        title: "Blue Wall Lahari",
        location: "Nungambakkam, Chennai",
        size: "2020 SqFt - 2904 SqFt",
        price: "₹ 1.36cr onwards",
        type: "3 BHK Apartment"
    },
    {
        image: utopia,
        city:"Chennai",
        title: "Casagrand Utopia",
        location: "Manapakkam, Chennai",
        size: "991 SqFt - 4,144 SqFt",
        price: "₹ 3.05 Cr onwards",
        type: "2,3 & 4 BHK Apartment"
    }
    ];

    const [visibleCount, setVisibleCount] = useState(9);
    const navigate = useNavigate();

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
                            <div className="homeServiceCard"
                                onClick={() =>
                                    navigate(`/Properties/${property.city}#${property.title.replace(/\s+/g, "-").toLowerCase()}`)
                                }
                                style={{ cursor: "pointer" }}
                            >

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