import '../css/style-1.css';
import '../css/style-2.css';
import '../css/style.css';

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {Link} from 'react-router-dom';

import SlideImage1 from '../images/h-slide-1.jpg'
import SlideImage2 from '../images/h-slide-2.jpg'
import SlideImage3 from '../images/h-slide-3.jpg'

function HomeSlider(){
 
    return(
        <> 
             <Swiper
                modules={[Autoplay, Pagination, Navigation]}
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                navigation={false}
                loop={true}
                effect="fade"
                className="premiumHeroSwiper"
                >
                {/* Slide 1 */}
                <SwiperSlide>
                    <div
                    className="premiumHeroSlide"
                    style={{ backgroundImage: `url(${SlideImage1})` }}
                    >
                    <div className="premiumHeroOverlay">
                        <div className="premiumHeroContent leftAlign">
                        <div className="premiumHeroText">
                            <span className="premiumHeroTag">Luxury Living</span>
                            <h1>Find Your Dream Home</h1>
                            <p>
                            Discover premium properties in prime locations designed for
                            comfort, elegance, and long-term value.
                            </p>
                            <Link to="/Properties/Chennai"  className="premiumHeroBtn">
                            Explore Properties
                            </Link>
                        </div>
                        </div>
                    </div>
                    </div>
                </SwiperSlide>

                {/* Slide 2 */}
                <SwiperSlide>
                    <div
                    className="premiumHeroSlide"
                    style={{ backgroundImage: `url(${SlideImage2})` }}
                    >
                    <div className="premiumHeroOverlay">
                        <div className="premiumHeroContent rightAlign">
                        <div className="premiumHeroText">
                            <span className="premiumHeroTag">Modern Spaces</span>
                            <h1>Experience Elegant Lifestyle</h1>
                            <p>
                            Beautifully crafted homes with modern architecture and
                            world-class amenities for a refined lifestyle.
                            </p>
                            <Link to="About" className="premiumHeroBtn">
                            About Us
                            </Link>
                        </div>
                        </div>
                    </div>
                    </div>
                </SwiperSlide>

                {/* Slide 3 */}
                <SwiperSlide>
                    <div
                    className="premiumHeroSlide"
                    style={{ backgroundImage: `url(${SlideImage3})` }}
                    >
                    <div className="premiumHeroOverlay">
                        <div className="premiumHeroContent leftAlign">
                        <div className="premiumHeroText">
                            <span className="premiumHeroTag">Smart Investment</span>
                            <h1>Secure Your Future Today</h1>
                            <p>
                            Invest in properties with high appreciation value and build
                            wealth through smart real estate decisions.
                            </p>
                            <Link to="/Contact" className="premiumHeroBtn">
                            Contact Us
                            </Link>
                        </div>
                        </div>
                    </div>
                    </div>
                </SwiperSlide>
                </Swiper>
        </>
    );
}

export default HomeSlider;