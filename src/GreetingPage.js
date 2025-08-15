import React from "react";
import { Link } from "react-router-dom";
import "./greeting.css";
import kanha from "./assets/kanha.png"; // Place kanha.png in assets/

function GreetingPage() {
  return (
    <div className="janmashtami-container">
      <header className="janmashtami-header">
        <h1>🌼 Happy Janmashtami 🌼</h1>
        <p>Celebrating the birth of Lord Krishna</p>
      </header>

      <section className="janmashtami-hero">
        <img src={kanha} alt="Lord Krishna" className="hero-image" />
        <div className="hero-text">
          <h2>Let’s Celebrate Together!</h2>
          <p>
            Join us in celebrating the divine festival filled with devotion,
            dance, and joy.
          </p>
        </div>
      </section>

      <section className="janmashtami-events">
        <h2>Festival Highlights</h2>
        <div className="event-cards">
          <Link to="/MusicPage">
          <div className="event-card">
            <h3>🎵 Bhajan Sandhya</h3>
            <p>Devotional songs dedicated to Lord Krishna.</p>
          </div>
          </Link>
          <Link to="/dahi-handi" className="festival-card">
          <div className="event-card">
            <h3>🥛 Dahi Handi</h3>
            <p>Exciting matki-breaking competition.</p>
          </div>
          </Link>
          <div className="event-card">
            <h3>💃 Raas Leela</h3>
            <p>Traditional dance performances.</p>
          </div>
        </div>
      </section>

      <footer className="janmashtami-footer">
        <p>✨ Wishing you a blessed Janmashtami! ✨</p>
      </footer>
    </div>
  );
}

export default GreetingPage;
