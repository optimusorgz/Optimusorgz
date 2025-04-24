import React, { useEffect, useState } from 'react';
import '../styles/styles.css';

const Team = () => {
  const [teamMembers, setTeamMembers] = useState([]);

  useEffect(() => {
    fetch('/team-data.json')
      .then(response => response.json())
      .then(data => setTeamMembers(data.teamMembers))
      .catch(error => console.error('Error loading team data:', error));
  }, []);

  return (
    <section className="highlights" id="highlights" style={{ background: 'transparent' }}>
      <h2 data-aos="fade-up" data-aos-duration="1000">Our Team</h2>
      <div className="highlight-cards" style={{ background: 'transparent' }}>
        {teamMembers.map((member, index) => (
          <div 
            key={index}
            className="card" 
            data-aos="fade-up" 
            data-aos-delay="100" 
            data-aos-duration="800" 
            style={{ margin: '20px 20px', borderRadius: '40px' }}
          >
            <img 
              src={member.image} 
              alt={member.name} 
              style={{ borderRadius: '20px', width: '100%' }}
            />
            <h3 style={{ padding: 0, margin: 0 }}>{member.name}</h3>
            <p style={{ padding: 0, margin: 0 }}>{member.position}</p>
            <div className="eventsocial-icon">
              <a href={member.instagram} target="_blank" rel="noopener noreferrer" style={{ margin: '10px' }}>
                <i className="fab fa-instagram" style={{ width: '5px', textAlign: 'center' }}></i>
              </a>
              <a href={member.linkedin} target="_blank" rel="noopener noreferrer" style={{ margin: '10px' }}>
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;