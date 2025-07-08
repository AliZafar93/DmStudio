import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/NavBar/NavBar';
import './App.css'

// Import videos
import video1 from './assets/videos/taketherisk.mp4';
import video2 from './assets/videos/DecoyEffect.mp4';
import video3 from './assets/videos/Attention.mp4';

function App() {
  return (
    <>
      <Navbar />
      <main style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "80vh"
      }}>
        <h1 style={{
          fontSize: "3.5vw",
          fontWeight: 700,
          margin: 0,
          fontFamily: "Inter, Arial, sans-serif"
        }}>
          300% Your Reach in 60 days
        </h1>
        <h2 style={{
          fontSize: "2.5vw",
          fontWeight: 700,
          color: "#999",
          margin: "0 0 40px 0",
          fontFamily: "Inter, Arial, sans-serif"
        }}>
          or you don't pay.
        </h2>
        <div style={{ display: "flex", gap: 24 }}>
          <a href="#" style={{
            background: "black",
            color: "white",
            padding: "16px 16px",
            borderRadius: 24,
            fontWeight: 600,
            textDecoration: "none",
            fontSize: 16,
            fontFamily: "Inter, Arial, sans-serif"
          }}>Services</a>
          <a href="#" style={{
            background: "black",
            color: "white",
            padding: "16px 16px",
            borderRadius: 24,
            fontWeight: 600,
            textDecoration: "none",
            fontSize: 16,
            fontFamily: "Inter, Arial, sans-serif"
          }}>Get Started</a>
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
    </>
  )
}

export default App
