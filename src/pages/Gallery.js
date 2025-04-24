import React from 'react';
import '../styles/gallery.css';

const Gallery = () => {
  return (
    <section className="gallery-section">
      <h2 data-aos="fade-up" data-aos-duration="1000">Our Gallery</h2>
      <div className="gallery-grid">
        <div className="gallery-item" data-aos="fade-up" data-aos-delay="100">
          <img src="/images/gallery1.jpg" alt="Gallery Image 1" />
        </div>
        <div className="gallery-item" data-aos="fade-up" data-aos-delay="200">
          <img src="/images/gallery2.jpg" alt="Gallery Image 2" />
        </div>
        <div className="gallery-item" data-aos="fade-up" data-aos-delay="300">
          <img src="/images/gallery3.jpg" alt="Gallery Image 3" />
        </div>
        {/* Add more gallery items as needed */}
      </div>
    </section>
  );
};

export default Gallery;