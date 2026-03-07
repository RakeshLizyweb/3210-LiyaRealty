import '../css/style-1.css';
import '../css/style-2.css';
import '../css/style.css';

import Project1 from '../images/project1.jpg'


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

// chennai
import utopia from "../images/images-1/utopia.jpg";
import radiancesupreme from "../images/images-1/radiancesuprema.jpg";
import blue from"../images/images-1/bluewalllahari.jpg";
import gayatri from"../images/images-1/gayatri.jpg";
import shakti from"../images/images-1/shakti.jpg";
import RadiaRecidencia from"../images/images-1/Radia-recidencia.jpg";

function HomeServiceSec(){


        const properties = [
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
                        {properties.map((property, index) => (
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


                </div>
            </section>
        </>
    );
}

export default HomeServiceSec;