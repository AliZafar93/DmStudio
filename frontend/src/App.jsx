import { useRef, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/NavBar/NavBar';
import './App.css'
import CountUp from './components/CountUp/CountUp';
import BlurText from "./components/BlurText/BlurText";
import Card from './components/card/card';
import Carousel from './components/Carousel/Carousel';
import Stepper, { Step } from './components/Stepper/Stepper';
  
import Ballpit from './components/Ballpit/Ballpit';
import logo from "./assets/images/blacklogo.png";
import FQAs from './components/FAQs/FAQs';


// Import videos
import video1 from './assets/videos/taketherisk.mp4';
import video2 from './assets/videos/DecoyEffect.mp4';
import video3 from './assets/videos/Attention.mp4';

function App() {
  const statsRef = useRef(null);
  const [startCount, setStartCount] = useState(false);

  // Add these for BlurText
  const blurTextRef = useRef(null);
  const [showBlurText, setShowBlurText] = useState(false);

  // Text Animation
  const handleAnimationComplete = () => {
    console.log('Animation completed!');
  };

  // CountUp Animation
  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCount(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (statsRef.current) {
      observer.observe(statsRef.current);
    }
    return () => observer.disconnect();
  }, []);

  // BlurText Animation
  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowBlurText(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (blurTextRef.current) {
      observer.observe(blurTextRef.current);
    }
    return () => observer.disconnect();
  }, []);


  

  return (
    <>
      <Navbar />
      <section className='hero-section'>
        <main>
        <h1 ref={blurTextRef}>
          {showBlurText && (
            <BlurText
              text="300% Your Reach in 60 days"
              delay={150}
              animateBy="words"
              direction="down"
              onAnimationComplete={handleAnimationComplete}
              className="text-2xl mb-8"
            />
          )}
        </h1>
        
        <div>
          <a href="#">Services</a>
          <a href="#">Get Started</a>
        </div>
      </main>
      </section>
      

      <section className='feature-works'>
        <div className="feature-works">
          <div className="reel-item">
            <video 
              src={video1}
              autoPlay 
              muted 
              loop 
              playsInline 
              className="reel-video"
            />
          </div>
          <div className="reel-item">
            <video 
              src={video2}
              autoPlay 
              muted 
              loop 
              playsInline 
              className="reel-video"
            />
          </div>
          <div className="reel-item">
            <video 
              src={video3}
              autoPlay 
              muted 
              loop 
              playsInline 
              className="reel-video"
            />
          </div>
        </div>
      </section>

      <section className="stats-section" ref={statsRef}>
        <div className="stats-container">
          <div className="stat-block">
            <div className="stat-number">
              {startCount && (
                <CountUp
                  from={0}
                  to={63}
                  separator=","
                  direction="up"
                  duration={1}
                  className="count-up-text"
                />
              )}M+
            </div>
            <div className="stat-label">Views Generated</div>
          </div>
          <div className="stat-block">
            <div className="stat-number">
              {startCount && (
                <CountUp
                  from={0}
                  to={500}
                  separator=","
                  direction="up"
                  duration={1}
                  className="count-up-text"
                />
              )}K+
            </div>
            <div className="stat-label">Followers Gained</div>
          </div>
        </div>
      </section>

      <section className='gallery'>
        <h2>
          <BlurText
              text="Trusted by the industry leaders"
              delay={150}
              animateBy="words"
              direction="down"
              onAnimationComplete={handleAnimationComplete}
              className="text-2xl mb-8"
            />
        </h2>
           <div style={{ height: '400px', }}>
            <Carousel
              baseWidth={500}
              autoplay={true}
              autoplayDelay={2500}
              pauseOnHover={false}
              loop={true}
              round={false}
            />
          </div>
      </section>

              
      <section className='pricing-cards'>
  <div className="pricing-header">
    <h2>
      <BlurText
          text="Choose Your Monthly Plan"
          delay={150}
          animateBy="words"
          direction="down"
          onAnimationComplete={handleAnimationComplete}
          className="text-2xl mb-8"
        />
    </h2>
    
  </div>
  <div className="pricing-cards-container">
    <Card
      title="Pro"
      price="$3,000"
      features={[
        "7 videos/month",
        "Monthly Performance Analysis",
        "3 Cycles of Revision"
      ]}
      onClick={() => { /* handle click */ }}
    />
    <Card
      title="Base"
      price="$2,500"
      features={[
        "5 videos/month",
        "2 Cycles of Revision"
      ]}
      onClick={() => { /* handle click */ }}
    />
    <Card
      title="Full-Service"
      price="$6,000"
      features={[
        "12 videos/month",
        "Content Ideation",
        "Scripting",
        "Thumbnail Creation",
        "Weekly Performance Analysis",
        "Notion Dashboard Access"
      ]}
      onClick={() => { /* handle click */ }}
    />
  </div>
      </section>

      <section className='onboarding-steps'>
        <h2>
          <BlurText
              text="How to Get Started with Us."
              delay={150}
              animateBy="words"
              direction="down"
              onAnimationComplete={handleAnimationComplete}
              className="text-2xl mb-8"
            />
        </h2>
        <Stepper
          initialStep={1}
          onStepChange={(step) => {
            console.log(step);
          }}
          onFinalStepCompleted={() => console.log("All steps completed!")}
          backButtonText="Previous"
          nextButtonText="Next"
        >
          <Step>
            <h2>Welcome to the DM Studio!</h2>
            <p>Check out the next step!</p>
          </Step>
          <Step>
            <h2>Step 2</h2>
            <img style={{ height: '100px', width: '100%', objectFit: 'cover', objectPosition: 'center -70px', borderRadius: '15px', marginTop: '1em' }} src="https://www.purrfectcatgifts.co.uk/cdn/shop/collections/Funny_Cat_Cards_640x640.png?v=1663150894" />
            <p>Custom step content!</p>
          </Step>
          <Step>
            <h2>How about an input?</h2>
            <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name?" />
          </Step>
          <Step>
            <h2>Final Step</h2>
            <p>You made it!</p>
          </Step>
          <Step>
            <h2>Step 5</h2>
            <p>You made it!</p>
          </Step>
        </Stepper>
      </section>


      <section className='faqs-section'>
        <h2>
              <BlurText
                text="Frequently asked questions"
                delay={250}
                animateBy="words"
                direction="down"
                onAnimationComplete={handleAnimationComplete}
                className="text-2xl mb-8"
              />  
        </h2>
               
        <FQAs />
      </section>

      <section className='footer' style={{ position: 'relative' }}>
        <div
          style={{
            position: 'relative',
            overflow: 'hidden',
            minHeight: '500px',
            maxHeight: '500px',
            width: '100%',
          }}
        >
          <Ballpit
            count={100}
            gravity={5}
            friction={0.8}
            wallBounce={0.95}
            followCursor={false}
          />

          {/* 👇 Overlay Content (Elements ABOVE Ballpit) */}
          <div className='footer-overlays'>
              
          </div>
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              zIndex: 10,
              textAlign: 'center',
              color: 'black',
            }}
          >
            <div className="navbar-logo"><img style={{ height: '50px'}} src={logo} />Studio</div>
            <h2>
            <BlurText
                text="Choose Your Monthly Plan"
                delay={850}
                animateBy="words"
                direction="down"
                onAnimationComplete={handleAnimationComplete}
                className="text-2xl mb-8"
              />
          </h2>
            <a href="#" className="navbar-cta">Get Started</a>
            {/* <button>Contact Us</button> */}
          </div>


        </div>
      </section>

    </>
  )
}

export default App
