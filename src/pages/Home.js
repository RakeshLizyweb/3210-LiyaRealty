import '../css/style-1.css';
import '../css/style-2.css';
import '../css/style.css';

import HomeSlider from '../sections/HomeSlider';
import HomeAboutSec from '../sections/HomeAboutSec';
import HomeCountUpSec from '../sections/HomeCountUpSec';
import HomeValues from '../sections/HomeValues';
import HomeServiceSec from '../sections/HomeServiceSec';
import Cta from '../sections/Cta';
import HomeTestimonial from '../sections/HomeTestimonial';

function Home(){
    return(
        <>
            <HomeSlider/>
            <HomeAboutSec/>
            <HomeCountUpSec/>
            <HomeValues/>
            <HomeServiceSec/>
            <Cta/>
            <HomeTestimonial/>
        </>
    );
}

export default Home