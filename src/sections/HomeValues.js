import '../css/style.css';
import '../css/style-1.css';
import '../css/style-2.css';


function HomeValues(){
    return(
        <>
        <section className="home-value-main">
        
        <div class="homevalues-label">Our Values</div>

        <div class="homevalues-grid">

            <div class="homevalues-card">
            <div class="homevalues-icon">✦</div>
            <div class="homevalues-num">01 — Integrity</div>
            <h3 class="homevalues-title">Uncompromising Honesty</h3>
            <p class="homevalues-desc">We say what we mean and mean what we say. Trust is our most valuable currency, and we guard it with every word we speak and every promise we make.</p>
            </div>

            <div class="homevalues-card">
            <div class="homevalues-icon">◎</div>
            <div class="homevalues-num">02 — Excellence</div>
            <h3 class="homevalues-title">Relentless Standards</h3>
            <p class="homevalues-desc">Mediocrity has no place here. We hold ourselves to the highest bar — not because we must, but because anything less would be a disservice to the people who count on us.</p>
            </div>

            <div class="homevalues-card">
            <div class="homevalues-icon">⟡</div>
            <div class="homevalues-num">03 — Empathy</div>
            <h3 class="homevalues-title">People Before Process</h3>
            <p class="homevalues-desc">Behind every challenge is a human story. We listen before we lead, and we design our work around real lives, real needs, and real experiences.</p>
            </div>

        </div>

        </section>
        </>

    );
}

export default HomeValues