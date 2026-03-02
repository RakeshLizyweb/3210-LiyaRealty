import '../css/style-1.css';
import '../css/style-2.css';
import '../css/style.css';


import React, { useEffect, useState } from "react";



function Counter({ target, duration }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = target / (duration / 16);

    const counter = setInterval(() => {
      start += increment;
      if (start >= target) {
        clearInterval(counter);
        setCount(target);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(counter);
  }, [target, duration]);

  return <span>{count.toLocaleString()}</span>;
}





function HomeCountUpSec(){
    return(
        <>
             <section className="homeStatsSectionWrapper">
                <div className="homeStatsSectionContainer">

                    <div className="homeStatsSectionCard">
                    <h2><Counter target={274} duration={2000} />+</h2>
                    <p>Clients</p>
                    </div>

                    <div className="homeStatsSectionCard">
                    <h2><Counter target={421} duration={2000} />+</h2>
                    <p>Projects</p>
                    </div>

                    <div className="homeStatsSectionCard">
                    <h2>
                        <Counter target={248364} duration={2500} />+
                    </h2>
                    <p>Sqft Sold Area</p>
                    </div>

                    <div className="homeStatsSectionCard">
                    <h2><Counter target={3} duration={1500} />+</h2>
                    <p>Cities</p>
                    </div>

                </div>
                </section>
           
        </>
    );
}

export default HomeCountUpSec;