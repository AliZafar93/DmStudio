import { useRef, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/NavBar/NavBar';
import './App.css'
import CountUp from './components/CountUp/CountUp';

// Import videos
import video1 from './assets/videos/taketherisk.mp4';
import video2 from './assets/videos/DecoyEffect.mp4';
import video3 from './assets/videos/Attention.mp4';

function App() {
  const statsRef = useRef(null);
  const [startCount, setStartCount] = useState(false);

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

  return (
    <>
      <Navbar />
      <main>
        <h1>
          300% Your Reach in 60 days
        </h1>
        <h2>
          or you don't pay.
        </h2>
        <div>
          <a href="#">Services</a>
          <a href="#">Get Started</a>
        </div>
      </main>
      <section>
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
      
    </>
  )
}

export default App
