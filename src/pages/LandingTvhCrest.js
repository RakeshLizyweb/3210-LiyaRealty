import React, { useEffect, useRef } from 'react';

import TvhCrest from '../images/tvhcrest-1.jpg';


const LandingTvhCrest = () => {
  const heroRef = useRef(null);
  const cardTiltRefs = useRef([]);
  const magneticBtnRefs = useRef([]);


  // Scroll-triggered reveal animations
  useEffect(() => {
    const revealEls = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
    );
    revealEls.forEach((el) => io.observe(el));

    return () => {
      revealEls.forEach((el) => io.unobserve(el));
    };
  }, []);

 




  // Ripple and sparkle effects on buttons
  useEffect(() => {
    const buttons = document.querySelectorAll('.btn-primary, .btn-ghost');
    buttons.forEach((btn) => {
      btn.style.position = btn.style.position || 'relative';
      btn.style.overflow = 'hidden';

      const handleClick = (e) => {
        // Ripple
        const rect = btn.getBoundingClientRect();
        const ripple = document.createElement('span');
        ripple.className = 'ripple';
        const size = Math.max(rect.width, rect.height);
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = e.clientX - rect.left - size / 2 + 'px';
        ripple.style.top = e.clientY - rect.top - size / 2 + 'px';
        btn.appendChild(ripple);
        setTimeout(() => ripple.remove(), 650);

        // Sparkles
        spawnSparkle(e.clientX - rect.left, e.clientY - rect.top, btn);
      };

      btn.addEventListener('click', handleClick);

      return () => btn.removeEventListener('click', handleClick);
    });
  }, []);

  // Count-up animation for seal stats
  useEffect(() => {
    document.querySelectorAll('.seal-stats .num').forEach((el) => {
      const raw = el.textContent.trim();
      const match = raw.match(/^(\d+)(.*)$/);
      if (!match) return;
      const target = parseInt(match[1], 10);
      const suffix = match[2];
      let cur = 0;
      const dur = 1200;
      const start = performance.now() + 1200;

      function tick(now) {
        if (now < start) {
          requestAnimationFrame(tick);
          return;
        }
        const p = Math.min((now - start) / dur, 1);
        cur = Math.floor(p * target);
        el.textContent = cur + suffix;
        if (p < 1) {
          requestAnimationFrame(tick);
        } else {
          el.textContent = target + suffix;
        }
      }
      requestAnimationFrame(tick);
    });
  }, []);

  const spawnSparkle = (x, y, container) => {
    for (let i = 0; i < 6; i++) {
      const s = document.createElement('span');
      s.style.position = 'absolute';
      s.style.left = x + 'px';
      s.style.top = y + 'px';
      s.style.width = '4px';
      s.style.height = '4px';
      s.style.borderRadius = '50%';
      s.style.background = i % 2 === 0 ? '#C8A24B' : '#E2C77E';
      s.style.pointerEvents = 'none';
      const angle = (Math.PI * 2 * i) / 6;
      const dist = 26 + Math.random() * 14;
      s.animate(
        [
          { transform: 'translate(0,0)', opacity: 1 },
          {
            transform: `translate(${Math.cos(angle) * dist}px, ${Math.sin(angle) * dist}px)`,
            opacity: 0,
          },
        ],
        { duration: 550, easing: 'ease-out' }
      );
      container.appendChild(s);
      setTimeout(() => s.remove(), 560);
    }
  };

  const backToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="liya-realty">
      <style>{`
        :root{
          --ink:#14213D;
          --ink-soft:#1F2D52;
          --gold:#C8A24B;
          --gold-soft:#E2C77E;
          --clay:#A85C32;
          --paper:#F6F2EA;
          --paper-dim:#EFE9DC;
          --charcoal:#26262A;
          --slate:#6B7785;
          --line:rgba(20,33,61,0.14);
        }
       
        
        /* Blueprint grid texture */
        .blueprint-One h3{
          color:white;
        }

        /* Survey-line divider */
        .survey-line{
          position:relative;
          height:1px;
          background:var(--line);
          margin:0 auto;
        }
        .survey-line::before{
          content:'';
          position:absolute;
          top:-3px; left:0;
          width:7px;height:7px;
          border-radius:50%;
          background:var(--gold);
        }
        .survey-line::after{
          content:'';
          position:absolute;
          top:-3px; right:0;
          width:7px;height:7px;
          border-radius:50%;
          background:var(--gold);
        }

       
       

        /* ===== HERO ===== */
        .hero{
          position:relative;
          min-height:500px;
          display:flex;
          align-items:center;
          background:var(--ink);
          color:var(--paper);
          overflow:hidden;
          padding-top:40px;
        }

        .hero-img{
          width:100%;
          height:600px;
          object-fit:cover; 
      }
      
      #heroHeadline{
        color:white;
        font-size:57px;
      }
       
        .hero-grid{
          position:absolute; inset:0;
          background-image:
            linear-gradient(rgba(246,242,234,0.045) 1px, transparent 1px),
            linear-gradient(90deg, rgba(246,242,234,0.045) 1px, transparent 1px);
          background-size:56px 56px;
          mask-image:linear-gradient(to bottom, transparent, black 25%, black 75%, transparent);
        }
        .hero-inner{
          position:relative; z-index:2;
          max-width:90%;
          margin:0 auto;
          width:100%;
          padding:60px 28px 50px;
          display:grid;
          grid-template-columns:1.15fr 0.85fr;
          gap:50px;
          align-items:end;
        }
        .eyebrow{
          display:inline-flex;
          align-items:center;
          gap:10px;
          font-size:12.5px;
          letter-spacing:0.16em;
          text-transform:uppercase;
          color:var(--gold-soft);
          font-weight:600;
          margin-bottom:26px;
        }
        .eyebrow::before{
          content:'';
          width:28px;height:1px;
          background:var(--gold);
          animation:dashPulse 2.8s ease-in-out infinite;
        }
        @keyframes dashPulse{
          0%,100%{width:28px;}
          50%{width:40px;}
        }
        .hero h1{
          font-size:clamp(40px,5.6vw,72px);
          line-height:1.04;
          font-weight:600;
        }
        .hero h1 em{
          font-style:italic;
          font-weight:500;
          color:var(--gold-soft);
          background:linear-gradient(90deg, var(--gold-soft), var(--gold), var(--clay), var(--gold), var(--gold-soft));
          background-size:300% 100%;
          -webkit-background-clip:text;
          background-clip:text;
          -webkit-text-fill-color:transparent;
          animation:shimmerText 5s linear infinite;
        }
        @keyframes shimmerText{0%{background-position:0% 50%;}100%{background-position:300% 50%;}}
        .hero h1 .underline-draw{
          position:relative;
          display:inline-block;
          padding-bottom:5px;
          }
        .underline-draw em{
          padding-top:10px;
        }
          .hero h1 .underline-draw::after{
            content:'';
            position:absolute;
            left:0; bottom:-5px;
            width:0%; height:3px;
            background:var(--gold);
            animation:drawline 1.4s 0.6s cubic-bezier(.6,0,.3,1) forwards;
        }
        @keyframes drawline{to{width:100%;}}
        .hero h1 .word{
          display:inline-block;
          opacity:0;
          transform:translateY(30px) rotateX(-40deg);
          animation:wordIn .8s cubic-bezier(.2,.8,.2,1) forwards;
        }
        @keyframes wordIn{to{opacity:1; transform:translateY(0) rotateX(0);}}
        .hero p.lead{
          margin-top:26px;
          font-size:17px;
          line-height:1.7;
          color:rgba(246,242,234,0.72);
          max-width:480px;
          opacity:0;
          animation:fadeUpBig .8s cubic-bezier(.4,0,.2,1) forwards;
          animation-delay:0.9s;
        }
        .hero-actions{
          margin-top:36px;
          display:flex;
          gap:16px;
          flex-wrap:wrap;
          opacity:0;
          animation:fadeUpBig .8s cubic-bezier(.4,0,.2,1) forwards;
          animation-delay:1.05s;
        }
        @keyframes fadeUpBig{
          from{opacity:0; transform:translateY(22px);}
          to{opacity:1; transform:translateY(0);}
        }
        .btn-primary{
          background:var(--gold);
          color:var(--ink);
          padding:15px 30px;
          font-weight:700;
          font-size:14.5px;
          border-radius:2px;
          transition:transform .25s ease, background .25s ease;
          display:inline-block;
          cursor:pointer;
          border:none;
          position:relative;
          overflow:hidden;
          animation:glowPulse 3.2s ease-in-out infinite;
        }
        .btn-primary::before{
          content:'';
          position:absolute; top:0; left:-60%;
          width:40%; height:100%;
          background:linear-gradient(120deg, transparent, rgba(255,255,255,0.55), transparent);
          transform:skewX(-20deg);
          transition:left .6s ease;
        }
        .btn-primary:hover{background:var(--gold-soft); transform:translateY(-2px); color:black;}
        .btn-primary:hover::before{left:120%;}
        .btn-ghost{
          border:1px solid rgba(246,242,234,0.3);
          color:var(--paper);
          padding:15px 30px;
          font-weight:600;
          font-size:14.5px;
          border-radius:2px;
          transition:border-color .25s ease, background .25s ease;
          cursor:pointer;
          background:none;
        }
        .btn-ghost:hover{border-color:var(--gold); background:rgba(200,162,75,0.08); color:white;}

        /* Deed seal card */
        .seal-card{
          background:rgba(246,242,234,0.05);
          border:1px solid rgba(246,242,234,0.14);
          border-radius:4px;
          backdrop-filter:blur(6px);
        }
        .seal{
          width:74px;height:74px;
          border-radius:50%;
          border:1.5px dashed var(--gold);
          display:flex;align-items:center;justify-content:center;
          margin-bottom:20px;
          font-family:'Fraunces',serif;
          font-size:11px;
          letter-spacing:0.05em;
          text-align:center;
          color:var(--gold-soft);
          line-height:1.3;
          animation:sealSpin 14s linear infinite;
        }
        @keyframes sealSpin{to{transform:rotate(360deg);}}
       
       
        .
        @keyframes twinkle{
          0%,100%{opacity:0; transform:scale(0.4);}
          50%{opacity:1; transform:scale(1.3);}
        }

       

        /* ===== MARQUEE ===== */
        .marquee-wrap{
          overflow:hidden;
          background:var(--ink);
          border-top:1px solid rgba(246,242,234,0.1);
          border-bottom:1px solid rgba(246,242,234,0.1);
          padding:18px 0;
        }
        .marquee-track{
          display:flex;
          gap:48px;
          width:max-content;
          animation:marquee 26s linear infinite;
        }
        .marquee-track span{
          font-family:'Fraunces',serif;
          font-style:italic;
          font-size:18px;
          color:rgba(246,242,234,0.55);
          white-space:nowrap;
          display:flex;
          align-items:center;
          gap:48px;
        }
        .marquee-track span::after{
          content:'◆';
          font-size:10px;
          color:var(--gold);
          margin-left:48px;
          font-style:normal;
        }
        @keyframes marquee{from{transform:translateX(0);} to{transform:translateX(-50%);}}
        .marquee-wrap:hover .marquee-track{animation-play-state:paused;}

        /* ===== SECTION GENERAL ===== */
        section{
          padding:108px 0;
          position:relative;
        }
        .section-head{
          max-width:640px;
          margin-bottom:60px;
        }
        .section-head .eyebrow{color:var(--clay);}
        .section-head .eyebrow::before{background:var(--clay);}
        .section-head h2{
          font-size:clamp(30px,3.6vw,44px);
          color:var(--ink);
          line-height:1.1;
        }
        .section-head p{
          margin-top:18px;
          font-size:16px;
          color:var(--slate);
          line-height:1.7;
        }
        .center{text-align:center; margin-left:auto; margin-right:auto;}

        /* ===== VALUES ===== */
        .values{background:white;}
        .values-grid{
          display:grid;
          grid-template-columns:repeat(5,1fr);
          border-top:1px solid black;
          border-left:1px solid black;
        }
        .value-card{
          border-right:1px solid var(--line);
          border-bottom:1px solid var(--line);
          padding:32px 24px;
          transition:background .3s ease;
          position:relative;
          overflow:hidden;
          animation:cardIdle 6s ease-in-out infinite;
        }
        .value-card:nth-child(2){animation-delay:.2s;}
        .value-card:nth-child(3){animation-delay:.4s;}
        .value-card:nth-child(4){animation-delay:.6s;}
        .value-card:nth-child(5){animation-delay:.8s;}
        @keyframes cardIdle{
          0%,100%{transform:translateY(0);}
          50%{transform:translateY(-3px);}
        }
        .value-card:hover{background:var(--paper-dim);}
        .value-card::before{
          content:'';
          position:absolute; left:0; bottom:0;
          height:2px; width:0%;
          background:var(--gold);
          transition:width .4s ease;
        }
        .value-card:hover::before{width:100%;}
        .value-card .vnum{
          font-family:'Fraunces',serif;
          font-style:italic;
          color:var(--gold);
          font-size:14px;
          margin-bottom:18px;
          display:block;
          transition:transform .4s ease, color .4s ease;
          animation:breathe 3.6s ease-in-out infinite;
        }
        .value-card:hover .vnum{transform:rotate(-6deg) scale(1.1); color:var(--clay);}
        @keyframes breathe{
          0%,100%{opacity:0.75; transform:translateY(0);}
          50%{opacity:1; transform:translateY(-3px);}
        }
        .value-card h3{
          font-size:17px;
          font-weight:600;
          margin-bottom:10px;
          color:var(--ink);
          transition:transform .35s ease;
        }
        .value-card:hover h3{transform:translateX(4px);}
        .value-card p{
          font-size:13.5px;
          color:var(--slate);
          line-height:1.6;
        }

        /* ===== ABOUT ===== */
        .about{
          background:var(--ink);
          color:var(--paper);
        }
        .about-inner{
          display:grid;
          grid-template-columns:0.9fr 1.1fr;
          gap:64px;
          align-items:center;
        }
        .about-visual{
          position:relative;
          height:400px;
          border:1px solid rgba(246,242,234,0.16);
          border-radius:4px;
          overflow:hidden;
          background:linear-gradient(160deg, var(--ink-soft), var(--ink));
        }
        .about-visual::before{
          content:'';
          position:absolute; inset:0;
          border-radius:4px;
          padding:1px;
          background:linear-gradient(120deg, transparent, rgba(200,162,75,0.5), transparent);
          background-size:250% 250%;
          -webkit-mask:linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite:xor;
          mask-composite:exclude;
          animation:borderSweep 5s linear infinite;
          pointer-events:none;
        }
        @keyframes borderSweep{0%{background-position:0% 0%;}100%{background-position:200% 200%;}}
        .about-visual .blueprint{opacity:0.6; animation:panGrid 18s linear infinite;}
        @keyframes panGrid{
          from{background-position:0 0,0 0;}
          to{background-position:84px 84px,84px 84px;}
        }

        .blueprint-img{
          width:100%;
          height:400px;
          object-fit:cover;
        }
        .about-visual .mark{
          position:absolute;
          bottom:28px; left:28px;
          right:28px;
          display:flex;
          justify-content:space-between;
          align-items:flex-end;
          border-radius:8px;
        }
        .about-visual .mark .yr{
          font-family:'Fraunces',serif;
          font-size:54px;
          color:var(--gold-soft);
          font-weight:600;
          line-height:1;
        }
          .mark .span-1{
          padding-bottom:3px;
          padding-left:10px;
          }
        @keyframes countPop{
          from{opacity:0; transform:scale(.7) translateY(10px);}
          to{opacity:1; transform:scale(1) translateY(0);}
        }
        .about-visual .mark .yrlbl{
          font-size:11.5px;
          text-transform:uppercase;
          color:rgb(0, 0, 0);
          text-align:right;
        }
        .about h2{
          font-size:clamp(28px,3.4vw,38px);
          line-height:1.18;
          font-weight:500;
          color:var(--paper);
        }
        .about h2 em{
          font-style:italic;
          color:var(--gold-soft);
          font-weight:500;
          background:linear-gradient(90deg, var(--gold-soft), var(--gold), var(--clay), var(--gold), var(--gold-soft));
          background-size:300% 100%;
          -webkit-background-clip:text;
          background-clip:text;
          -webkit-text-fill-color:transparent;
          animation:shimmerText 5s linear infinite;
        }
        .about p{
          margin-top:22px;
          font-size:16px;
          line-height:1.8;
          color:rgba(246,242,234,0.7);
          max-width:520px;
        }
        .about-pillars{
          margin-top:32px;
          display:flex;
          flex-wrap:wrap;
          gap:12px;
        }
        .pill{
          border:1px solid rgba(246,242,234,0.22);
          padding:8px 16px;
          border-radius:20px;
          font-size:13px;
          color:var(--gold-soft);
          transition:transform .3s ease, border-color .3s ease, color .3s ease;
          animation:pillGlow 6s ease-in-out infinite;
        }
        .pill:nth-child(2){animation-delay:.4s;}
        .pill:nth-child(3){animation-delay:.8s;}
        .pill:nth-child(4){animation-delay:1.2s;}
        .pill:nth-child(5){animation-delay:1.6s;}
        @keyframes pillGlow{
          0%,100%{border-color:rgba(246,242,234,0.22);}
          50%{border-color:rgba(200,162,75,0.6);}
        }
        .pill:hover{transform:translateY(-3px); border-color:var(--gold); color:var(--gold);}

        /* ===== SERVICES ===== */
        .services{background:white;}
        .service-grid{
          display:grid;
          grid-template-columns:repeat(3,1fr);
          gap:1px;
          background:var(--line);
          border:1px solid var(--line);
        }
        .service-card{
          background:var(--paper);
          padding:42px 34px;
          transition:background .35s ease, transform .35s ease;
          position:relative;
          overflow:hidden;
        }
        .service-card::after{
          content:'';
          position:absolute; top:0; left:-120%;
          width:60%; height:100%;
          background:linear-gradient(120deg, transparent, rgba(255,255,255,0.06), transparent);
          transform:skewX(-20deg);
          transition:left .7s ease;
        }
        .service-card:hover::after{left:140%;}
        .service-card:hover{
          background:var(--ink);
          color:var(--paper);
          transform:translateY(-3px);
        }
        .service-card:hover h3, .service-card:hover .stag{color:var(--gold-soft);}
        .service-card:hover p{color:rgba(246,242,234,0.7);}
        .service-icon{
          width:46px;height:46px;
          border:1px solid var(--line);
          border-radius:50%;
          display:flex;align-items:center;justify-content:center;
          margin-bottom:26px;
          transition:border-color .3s ease, transform .4s cubic-bezier(.4,0,.2,1);
        }
        .service-card:hover .service-icon{border-color:rgba(246,242,234,0.3); transform:scale(1.1) rotate(6deg);}
        .service-icon svg{
          width:20px;height:20px;stroke:var(--ink);transition:stroke .3s ease;
          animation:iconWiggle 5s ease-in-out infinite;
        }
        .service-card:nth-child(2) .service-icon svg{animation-delay:.3s;}
        .service-card:nth-child(3) .service-icon svg{animation-delay:.6s;}
        .service-card:nth-child(4) .service-icon svg{animation-delay:.9s;}
        .service-card:nth-child(5) .service-icon svg{animation-delay:1.2s;}
        .service-card:nth-child(6) .service-icon svg{animation-delay:1.5s;}
        @keyframes iconWiggle{
          0%,100%{transform:rotate(0deg);}
          25%{transform:rotate(-7deg);}
          75%{transform:rotate(7deg);}
        }
        .service-card:hover .service-icon svg{stroke:var(--gold-soft);}
        .stag{
          font-size:11.5px;
          letter-spacing:0.08em;
          text-transform:uppercase;
          color:var(--clay);
          font-weight:600;
          transition:color .3s ease;
        }
        .service-card h3{
          font-size:20px;
          margin:10px 0 12px;
          font-weight:600;
          color:var(--ink);
          transition:color .3s ease;
        }
        .service-card p{
          font-size:14px;
          line-height:1.7;
          color:var(--slate);
          transition:color .3s ease;
        }

        /* ===== WHY ===== */
        .why{background:white;}
        .why-inner{
          display:grid;
          grid-template-columns:1fr 1fr;
          gap:70px;
          align-items:start;
        }
          
        .why-list{list-style:none;}
        .why-list li{
          display:flex;
          gap:20px;
          padding:24px 0;
          border-bottom:1px solid var(--line);
          opacity:0;
          transform:translateX(-20px);
          transition:opacity .6s ease, transform .6s ease;
        }
        .why-inner.in .why-list li{opacity:1; transform:translateX(0);}
        .why-inner.in .why-list li:nth-child(1){transition-delay:.05s;}
        .why-inner.in .why-list li:nth-child(2){transition-delay:.18s;}
        .why-inner.in .why-list li:nth-child(3){transition-delay:.31s;}
        .why-list li:first-child{padding-top:0;}
        .why-mark{
          font-family:'Fraunces',serif;
          font-style:italic;
          font-size:16px;
          color:var(--gold);
          flex-shrink:0;
          padding-top:2px;
          display:inline-block;
          animation:markFloat 4s ease-in-out infinite;
        }
        .why-list li:nth-child(2) .why-mark{animation-delay:.5s;}
        .why-list li:nth-child(3) .why-mark{animation-delay:1s;}
        @keyframes markFloat{
          0%,100%{transform:translateY(0) rotate(0deg);}
          50%{transform:translateY(-4px) rotate(-4deg);}
        }
        .why-list h3{font-size:17px; color:var(--ink); margin-bottom:6px; font-weight:600;}
        .why-list p{font-size:14px; color:var(--slate); line-height:1.65;}

        .why-card{
          background:var(--ink);
          color:var(--paper);
          padding:44px;
          border-radius:4px;
          position:relative;
          overflow:hidden;
          animation:cardGlow 5s ease-in-out infinite;
        }
        @keyframes cardGlow{
          0%,100%{box-shadow:0 0 0 0 rgba(200,162,75,0);}
          50%{box-shadow:0 0 40px 4px rgba(200,162,75,0.12);}
        }
        .why-card .blueprint{opacity:0.5; animation:panGrid 22s linear infinite reverse;}
        .why-card h3{
          position:relative; z-index:1;
          font-size:24px;
          font-weight:500;
          margin-bottom:16px;
          color:white;
        }
        .why-card p{
          position:relative; z-index:1;
          font-size:15px;
          color:rgba(246,242,234,0.68);
          line-height:1.75;
          margin-bottom:28px;
        }
        .why-card .btn-primary{position:relative; z-index:1;}

        /* ===== CTA ===== */
        .cta{
          background:var(--ink);
          color:var(--paper);
          position:relative;
          overflow:hidden;
          text-align:center;
        }
        .cta .blueprint{opacity:0.4; animation:panGrid 26s linear infinite;}
        .cta-inner{position:relative; z-index:1;}
        .cta h2{
          font-size:clamp(32px,4.4vw,54px);
          color:white;
          font-weight:500;
          line-height:1.12;
          max-width:760px;
          margin:0 auto;
          animation:fadeUpBig 1s cubic-bezier(.4,0,.2,1) both;
        }
        .cta h2 em{
          font-style:italic;
          color:var(--gold-soft);
          font-weight:500;
          background:linear-gradient(90deg, var(--gold-soft), var(--gold), var(--clay), var(--gold), var(--gold-soft));
          background-size:300% 100%;
          -webkit-background-clip:text;
          background-clip:text;
          -webkit-text-fill-color:transparent;
          animation:shimmerText 5s linear infinite;
        }
        .cta p{
          margin:22px auto 0;
          max-width:520px;
          color:rgba(246,242,234,0.65);
          font-size:16px;
          line-height:1.7;
        }
        .cta-actions{
          margin-top:40px;
          display:flex;
          gap:16px;
          justify-content:center;
          flex-wrap:wrap;
        }
        .contact-grid{
          margin-top:80px;
          display:grid;
          grid-template-columns:repeat(3,1fr);
          gap:1px;
          background:rgba(246,242,234,0.14);
          border-top:1px solid rgba(246,242,234,0.14);
          border-bottom:1px solid rgba(246,242,234,0.14);
        }
        .contact-item{
          background:var(--ink);
          padding:32px 20px;
          opacity:0;
          transform:translateY(16px);
          transition:opacity .6s ease, transform .6s ease, background .3s ease;
        }
        .cta-inner.in .contact-item{opacity:1; transform:translateY(0);}
        .cta-inner.in .contact-item:nth-child(1){transition-delay:.1s;}
        .cta-inner.in .contact-item:nth-child(2){transition-delay:.2s;}
        .cta-inner.in .contact-item:nth-child(3){transition-delay:.3s;}
        .contact-item:hover{background:rgba(200,162,75,0.07); transform:translateY(-3px);}
        .contact-item .clbl{
          font-size:11px;
          letter-spacing:0.1em;
          text-transform:uppercase;
          color:var(--gold-soft);
          margin-bottom:10px;
        }
        .contact-item .cval{
          font-size:15px;
          color:rgba(246,242,234,0.85);
        }

        /* ===== REVEAL ===== */
        .reveal{
          opacity:0;
          transform:translateY(36px);
          transition:opacity .8s cubic-bezier(.4,0,.2,1), transform .8s cubic-bezier(.4,0,.2,1);
        }
        .reveal.in{opacity:1; transform:translateY(0);}
        .reveal-stagger.in .stagger-item{
          animation:staggerUp .7s cubic-bezier(.4,0,.2,1) forwards;
        }
        .stagger-item{opacity:0; transform:translateY(24px);}
        @keyframes staggerUp{to{opacity:1; transform:translateY(0);}}

        .reveal.in .about-pillars .pill{
          opacity:0;
          animation:staggerUp .6s ease forwards;
        }
        .reveal.in .about-pillars .pill:nth-child(1){animation-delay:.1s;}
        .reveal.in .about-pillars .pill:nth-child(2){animation-delay:.2s;}
        .reveal.in .about-pillars .pill:nth-child(3){animation-delay:.3s;}
        .reveal.in .about-pillars .pill:nth-child(4){animation-delay:.4s;}
        .reveal.in .about-pillars .pill:nth-child(5){animation-delay:.5s;}

        /* ===== FOOTER ===== */
        footer{
          background:#0F1A30;
          color:rgba(246,242,234,0.55);
          padding:36px 0;
        }
        .footer-inner{
          display:flex;
          justify-content:space-between;
          align-items:center;
          flex-wrap:wrap;
          gap:16px;
          font-size:13px;
        }
        .footer-inner .flogo{
          font-family:'Fraunces',serif;
          color:rgba(246,242,234,0.85);
          font-size:16px;
        }
        .footer-inner .flogo span{
          color:var(--gold);
          display:inline-block;
          animation:logoBeat 2.6s ease-in-out infinite;
        }
        @keyframes logoBeat{
          0%,100%{transform:scale(1);}
          50%{transform:scale(1.08);}
        }

        /* ===== BACK TO TOP ===== */
        #backToTop{
          position:fixed; bottom:26px; right:26px;
          width:46px; height:46px;
          border-radius:50%;
          background:var(--ink);
          color:var(--gold-soft);
          display:flex; align-items:center; justify-content:center;
          cursor:pointer;
          z-index:150;
          opacity:0; pointer-events:none;
          transform:translateY(16px);
          transition:opacity .35s ease, transform .35s ease, background .3s ease;
          border:1px solid rgba(246,242,234,0.14);
        }
        #backToTop.show{opacity:1; pointer-events:auto; transform:translateY(0); animation:bobUp 2.4s ease-in-out infinite;}
        #backToTop:hover{background:var(--clay);}
        @keyframes bobUp{
          0%,100%{transform:translateY(0);}
          50%{transform:translateY(-5px);}
        }

        /* ===== RIPPLE ===== */
        .ripple{
          position:absolute;
          border-radius:50%;
          background:rgba(255,255,255,0.55);
          transform:scale(0);
          animation:rippleAnim .6s ease-out forwards;
          pointer-events:none;
        }
        @keyframes rippleAnim{to{transform:scale(3); opacity:0;}}

        /* ===== SCROLLBAR ===== */
        #scrollbar{
          position:fixed; top:0; left:0;
          height:3px; width:0%;
          background:linear-gradient(90deg, var(--gold), var(--clay));
          z-index:200;
          transition:width .1s linear;
        }

        /* ===== RESPONSIVE ===== */
        @media (max-width:980px){
          .hero-inner{grid-template-columns:1fr; align-items:start;}
          .seal-card{order:-1;}
          .about-inner{grid-template-columns:1fr;}
          .about-visual{height:280px;}
          .why-inner{grid-template-columns:1fr;}
          .values-grid{grid-template-columns:repeat(3,1fr);}
          .service-grid{grid-template-columns:repeat(2,1fr);}
          .contact-grid{grid-template-columns:1fr;}
        }
        @media (max-width:760px){
          .nav-links{
            position:fixed;
            top:67px; left:0; right:0;
            flex-direction:column;
            background:var(--paper);
            padding:24px 28px;
            gap:20px;
            border-bottom:1px solid var(--line);
            transform:translateY(-130%);
            transition:transform .35s ease;
            z-index:99;
          }
          .nav-links.open{transform:translateY(0);}
          .menu-toggle{display:flex;}
          .nav-cta{display:none;}
          section{padding:76px 0;}
          .values-grid{grid-template-columns:repeat(2,1fr);}
          .service-grid{grid-template-columns:1fr;}
          .hero-actions, .cta-actions{flex-direction:column;}
          .btn-primary, .btn-ghost{text-align:center; width:100%;}
        }
        @media (max-width:480px){
          .values-grid{grid-template-columns:1fr;}
        }

        @media (prefers-reduced-motion: reduce){
          *{animation:none !important; transition:none !important;}
        }

        .nav-links li{
          opacity:0;
          animation:navIn .6s ease forwards;
        }
        .nav-links li:nth-child(1){animation-delay:.1s;}
        .nav-links li:nth-child(2){animation-delay:.18s;}
        .nav-links li:nth-child(3){animation-delay:.26s;}
        .nav-links li:nth-child(4){animation-delay:.34s;}
        .nav-links li:nth-child(5){animation-delay:.42s;}
        @keyframes navIn{from{opacity:0; transform:translateY(-8px);} to{opacity:1; transform:translateY(0);}}
      `}
      </style>

      <div id="scrollbar" style={{ }}></div>

       <section className="hero" ref={heroRef}>
        <div className="hero-grid"></div>
        <div className="blob blob1"></div>
        <div className="blob blob2"></div>
        <div className="blob blob3"></div>
        <div className="twinkle" style={{ top: '18%', left: '30%', animationDelay: '.2s' }}></div>
        <div className="twinkle" style={{ top: '62%', left: '46%', animationDelay: '1.1s' }}></div>
        <div className="twinkle" style={{ top: '34%', left: '60%', animationDelay: '1.8s' }}></div>
        <div className="twinkle" style={{ top: '75%', left: '22%', animationDelay: '.7s' }}></div>
        <div className="twinkle" style={{ top: '48%', left: '84%', animationDelay: '2.3s' }}></div>
    
        <div className="hero-inner">
         <div>
            <div className="eyebrow hero-eyebrow">Liya Realty | Authorized Channel Partner</div>

            <h1 id="heroHeadline">
                Premium <span className="underline-draw">1 & 2 BHK Apartments</span>
                <br />
                <em>at TVH Crest, Avinashi</em>
            </h1>

            <p className="lead">
                Discover thoughtfully designed 1 and 2 BHK apartments at TVH Crest in
                Avinashi, Coimbatore. Enjoy modern architecture, premium amenities, and
                excellent connectivity in a secure gated community built for comfortable
                urban living.
            </p>

            <div className="hero-actions">
                <a href="#contact" className="btn-primary magnetic">
                Book Site Visit
                </a>

                <a href="#services" className="btn-ghost magnetic">
                View Project Highlights
                </a>
            </div>
        </div>
          <div className="seal-card tilt" >
            <img src={TvhCrest} className='hero-img' alt="image"></img>
          </div>
        </div>
      </section>
     
      <div className="marquee-wrap">
        <div className="marquee-track" id="marqueeTrack">
           <span>TVH Crest</span>
            <span>Premium Apartments</span>
            <span>1 & 2 BHK Homes</span>
            <span>Avinashi, Coimbatore</span>
            <span>Starting ₹52.53 Lakhs</span>

            <span>TVH Crest</span>
            <span>Premium Apartments</span>
            <span>1 & 2 BHK Homes</span>
            <span>Avinashi, Coimbatore</span>
            <span>Starting ₹52.53 Lakhs</span>
        </div>
      </div>

      <section className="values" id="values">
        <div className="container">
          <div className="section-head reveal">
           <div className="eyebrow">Why Choose TVH Crest</div>

            <h2>Designed for modern lifestyles and lasting comfort</h2>

            <p>
            TVH Crest combines quality construction, contemporary design, and premium
            amenities to create homes that offer convenience, comfort, and long-term
            investment value.
            </p>
          </div>
        </div>
        <div className="values-grid reveal-stagger reveal">

          <div className="value-card stagger-item">
            <span className="vnum">Value</span>
            <h3>Prime Location</h3>

            <p>
            Located in Avinashi, Coimbatore with excellent access to schools,
            hospitals, workplaces, and major transportation routes.
            </p>
          </div>

          <div className="value-card stagger-item">
            <span className="vnum">Value</span>
          <h3>Contemporary Living</h3>

            <p>
            Modern 1 and 2 BHK apartments designed with spacious interiors,
            natural lighting, and practical layouts for everyday living.
            </p>
          </div>
          
          <div className="value-card stagger-item">
           <span className="vnum">Value</span>
           <h3>Premium Amenities</h3>

            <p>
            Enjoy landscaped gardens, children's play areas, lift access,
            covered parking, and lifestyle features for the entire family.
            </p>
          </div>

          <div className="value-card stagger-item">
            <span className="vnum">Value</span>
            <h3>Excellent Investment</h3>

            <p>
            An ideal choice for homebuyers and investors looking for
            quality homes in one of Coimbatore's growing residential locations.
            </p>
          </div>

          <div className="value-card stagger-item">
            <span className="vnum">Value</span>
           <h3>Safe & Secure</h3>

            <p>
            Live with confidence in a gated community featuring 24×7 security,
            CCTV surveillance, and professionally managed surroundings.
            </p>
          </div>

        </div>
      </section>

      <section className="about" id="about">
        <div className="container about-inner reveal">
          <div
            className="about-visual tilt"
            ref={(el) => cardTiltRefs.current.push(el)}
          >
            <div className="blueprint"><img src={TvhCrest} className='blueprint-img'></img></div>
            <div className="mark">
              <span className="span-1">
                Years of steady<br/>
                growth since
              </span>
              <span className="yr">2018</span>
            </div>
          </div>
          <div>
            <h2>
                Experience a home built for <em>modern urban living.</em>
                </h2>

                <p>
                TVH Crest offers beautifully crafted 1 and 2 BHK apartments that combine
                smart layouts with premium finishes. Located in Avinashi, the project
                provides residents with excellent connectivity, modern amenities, and a
                peaceful environment to enjoy everyday life.
                </p>
            <div className="about-pillars">
              <span className="pill">1 & 2 BHK Apartments</span>
              <span className="pill">784–1154 Sq.ft</span>
              <span className="pill">Premium Amenities</span>
              <span className="pill">Gated Community</span>
              <span className="pill">Prime Location</span>
            </div>
          </div>
        </div>
      </section>

      <section className="services" id="services">
        <div className="container">
          <div className="section-head reveal">
          <div className="eyebrow">Project Highlights</div>

            <h2>Everything you need for a better lifestyle</h2>

            <p>
            Thoughtfully designed apartments with quality construction, modern
            amenities, and excellent connectivity for comfortable family living.
            </p>
          </div>
        </div>

        <div className="service-grid reveal-stagger reveal">
          <div className="service-card stagger-item">
            <div className="service-icon">
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 11l9-7 9 7" />
                <path d="M5 10v9a1 1 0 001 1h12a1 1 0 001-1v-9" />
              </svg>
            </div>
            <span className="stag">Configuration</span>

            <h3>1 & 2 BHK Apartments</h3>

            <p>
            Choose from intelligently planned apartment configurations designed
            to suit individuals, couples, and growing families.
            </p>
          </div>

          <div className="service-card stagger-item">
            <div className="service-icon">
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <rect x="4" y="3" width="16" height="18" rx="1" />
                <path d="M9 8h1M14 8h1M9 12h1M14 12h1M9 16h1M14 16h1" />
              </svg>
            </div>
          <span className="stag">Apartment Sizes</span>

            <h3>784 – 1154 Sq.ft</h3>

            <p>
            Spacious homes with efficient layouts that maximize comfort,
            ventilation, and everyday functionality.
            </p>
          </div>

          <div className="service-card stagger-item">
            <div className="service-icon">
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="8" r="3.4" />
                <path d="M5 20c1.2-3.6 4-5.4 7-5.4s5.8 1.8 7 5.4" />
              </svg>
            </div>
            <span className="stag">Pricing</span>

            <h3>Starting from ₹52.53 Lakhs</h3>

            <p>
            Affordable premium apartments with attractive pricing options
            for first-time homebuyers and investors.
            </p>
          </div>

          <div className="service-card stagger-item">
            <div className="service-icon">
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="6" width="18" height="13" rx="1.5" />
                <path d="M3 10h18M7 14h4" />
              </svg>
            </div>
            <span className="stag">Amenities</span>

            <h3>Modern Lifestyle Facilities</h3>

            <p>
            Landscaped gardens, children's play area, lift facility,
            covered parking, and reliable power backup.
            </p>
          </div>

          <div className="service-card stagger-item">
            <div className="service-icon">
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 19V5M4 19h16M8 15l3-3 3 3 4-5" />
              </svg>
            </div>
             <span className="stag">Security</span>

            <h3>Gated Community</h3>

            <p>
            Round-the-clock security and CCTV surveillance ensure
            a safe and secure living environment for every resident.
            </p>
          </div>

          <div className="service-card stagger-item">
            <div className="service-icon">
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 21c4-4 7-7.5 7-11a7 7 0 10-14 0c0 3.5 3 7 7 11z" />
                <circle cx="12" cy="10" r="2.4" />
              </svg>
            </div>
            <span className="stag">Location</span>

            <h3>Excellent Connectivity</h3>

            <p>
            Located in Avinashi with convenient access to educational
            institutions, hospitals, shopping centers, and major roadways.
            </p>
          </div>
        </div>
      </section>

      <section className="why" id="why">
        <div className="container why-inner reveal">
          <div>
            <div className="section-head" style={{ marginBottom: '36px' }}>

                <div className="eyebrow">Why Invest</div>
                <h2>Why choose TVH Crest?</h2>

            </div>
            <ul className="why-list">
              <li>
                <span className="why-mark">01</span>
                <div>

                <h3>Prime Residential Location</h3>

                <p>
                Situated in Avinashi, one of Coimbatore's fast-growing residential
                destinations with excellent future potential.
                </p>
                  
                </div>
              </li>
              <li>
                <span className="why-mark">02</span>
                <div>

                    <h3>Quality Construction</h3>

                    <p>
                    Built with attention to detail, premium materials, and thoughtful
                    design to ensure lasting comfort and value.
                    </p>

                </div>
              </li>
              <li>
                <span className="why-mark">03</span>
                <div>

                    <h3>Perfect Family Home</h3>

                    <p>
                    Modern amenities, secure surroundings, and spacious apartments
                    make TVH Crest an ideal choice for comfortable family living.
                    </p>

                </div>
              </li>
            </ul>
          </div>

          <div className="why-card tilt" ref={(el) => cardTiltRefs.current.push(el)}>
            <div className="blueprint-One"></div>

           <h3>Book your exclusive site visit today</h3>

            <p>
            Liya Realty is your trusted channel partner for TVH Crest.
            Contact us to learn about apartment availability, pricing,
            floor plans, and exclusive booking offers.
            </p>

            <a href="#contact" className="btn-primary">
            Enquire Now
            </a>

          </div>
        </div>
      </section>

      <section className="cta" id="contact">
        <div className="blueprint"></div>
        <div className="container cta-inner reveal">
          <div className="eyebrow center" style={{ justifyContent: 'center' }}>
            Enquire Today
          </div>
          <h2>
            Find your <em>dream home</em> at TVH Serenity.
          </h2>
          <p>Connect with Liya Realty for the latest pricing, available units, floor plans, brochures, and exclusive offers.</p>
          <div className="cta-actions">
            <a href="mailto:sales@liyagroups.in" className="btn-primary" ref={(el) => magneticBtnRefs.current.push(el)}>
              Email Us
            </a>
            <a href="tel:+91 94443 86103" className="btn-ghost" ref={(el) => magneticBtnRefs.current.push(el)}>
              Call Now
            </a>
          </div>

          <div className="contact-grid">
            <div className="contact-item">
              <div className="clbl">Email</div>
              <a href="mailto:sales@liyagroups.in" className="cval">sales@liyagroups.in</a>
            </div>
            <div className="contact-item">
              <div className="clbl">Phone</div>
              <a href="tel:+91 94443 86103" className="cval">+91 94443 86103</a>
            </div>
            <div className="contact-item">
              <div className="clbl">Office</div>
              <div className="cval">Coimbatore, Tamil Nadu</div>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="container footer-inner">
          <div className="flogo">
            Liya<span>Realty</span>
          </div>
          <div>© Liyarealty. All Rights Reserved. Designed by Lizyweb</div>
        </div>
      </footer>

      <div
        id="backToTop"
        onClick={backToTop}
        aria-label="Back to top"
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 19V5M5 12l7-7 7 7" />
        </svg>
      </div>
    </div>
  );
};

export default LandingTvhCrest;
