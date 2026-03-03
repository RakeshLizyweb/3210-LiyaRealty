import '../css/style-1.css';
import '../css/style-2.css';
import '../css/style.css';

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";


const testimonials = [
  {
    name: "Rohit Sharma",
    role: "Property Buyer",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    review:
      "The entire process was smooth and professional. I found my dream home within weeks. Highly recommended!",
  },
  {
    name: "Priya Nair",
    role: "Investor",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    review:
      "Excellent service and premium projects. Their team guided me at every step. Truly trustworthy company.",
  },
  {
    name: "Arjun Mehta",
    role: "Home Owner",
    image: "https://randomuser.me/api/portraits/men/65.jpg",
    review:
      "Transparent pricing and amazing locations. The customer support was outstanding throughout the journey.",
  },
  {
    name: "Arjun Mehta",
    role: "Home Owner",
    image: "https://randomuser.me/api/portraits/men/65.jpg",
    review:
      "Transparent pricing and amazing locations. The customer support was outstanding throughout the journey.",
  },
];


function HomeTestimonial(){
    return(
        <>
        <section className="testimonials-section py-5">
            <div className="container text-center">
                <h2 className="test-section-title mb-3">What Our Clients Say</h2>
                <p className="test-section-subtitle mb-5">
                Trusted by hundreds of happy homeowners and investors.
                </p>

                <Swiper
                    modules={[Autoplay, Pagination]}
                    spaceBetween={30}
                    slidesPerView={1}
                    loop={true} 
                    speed={1000} 
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{ clickable: true }}
                    breakpoints={{
                        768: { slidesPerView: 2 },
                        992: { slidesPerView: 3 },
                    }}
                >
                {testimonials.map((item, index) => (
                    <SwiperSlide key={index}>
                    <div className="testimonial-card">

                        <div className="avatar-circle">
                        {item.name
                            .split(" ")
                            .map(word => word[0])
                            .slice(0, 2)
                            .join("")
                            .toUpperCase()}
                        </div>
                        
                        <p className="review-text">“{item.review}”</p>

                        <div className="stars mb-2">
                        ⭐⭐⭐⭐⭐
                        </div>

                        <h5 className="client-name">{item.name}</h5>
                        <span className="client-role">{item.role}</span>
                    </div>
                    </SwiperSlide>
                ))}
                </Swiper>
            </div>
        </section>
            
        </>
    );
}

export default HomeTestimonial
