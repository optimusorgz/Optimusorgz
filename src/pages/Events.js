import React from 'react';
import '../styles/event.css';

const Events = () => {
  return (
    <div className="event-container">
      <section className="event-hero">
        <h1 data-aos="fade-up" data-aos-duration="1000">OPTIMUS ARENA 2025</h1>
        <p data-aos="fade-up" data-aos-delay="200">Join us for the biggest tech event of the year</p>
      </section>

      <section className="event-details">
        <div className="event-card" data-aos="fade-up" data-aos-delay="300">
          <h2>Event Details</h2>
          <div className="event-info">
            <div className="info-item">
              <i className="fas fa-calendar"></i>
              <p>Date: Coming Soon</p>
            </div>
            <div className="info-item">
              <i className="fas fa-clock"></i>
              <p>Time: TBA</p>
            </div>
            <div className="info-item">
              <i className="fas fa-map-marker-alt"></i>
              <p>Venue: To be announced</p>
            </div>
          </div>
        </div>
      </section>

      <section className="event-highlights">
        <h2 data-aos="fade-up">Event Highlights</h2>
        <div className="highlights-grid">
          <div className="highlight-item" data-aos="fade-up" data-aos-delay="100">
            <i className="fas fa-laptop-code"></i>
            <h3>Hackathon</h3>
            <p>48-hour coding challenge</p>
          </div>
          <div className="highlight-item" data-aos="fade-up" data-aos-delay="200">
            <i className="fas fa-users"></i>
            <h3>Workshops</h3>
            <p>Interactive learning sessions</p>
          </div>
          <div className="highlight-item" data-aos="fade-up" data-aos-delay="300">
            <i className="fas fa-trophy"></i>
            <h3>Competitions</h3>
            <p>Tech challenges with prizes</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;