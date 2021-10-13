import React from 'react';
import '../css/mainHome.css';

const MainHome = () => (
  <div>

    <div className="breathing-code-box">
      <h1 className="headline-breathing-code">breathing code</h1>
    </div>

    <div className="contacts-box">
      <div className="email-box">
        <p>Email</p>
        <p>vitor.gonzagaf1@gmail.com</p>
      </div>

      <div className="phone-box">
        <p>Phone</p>
        <p>+55 11 974025831</p>
      </div>
    </div>

    <div className="short-presentation-box">
      <div className="previous-presentation-box">
        <div className="headline-short-presentation-box">
          <h3 className="headline-meet-vitor">Meet Vitor Ferreira</h3>
        </div>

        <div className="short-text-presentation-box">
          <p className="paragraph-short-presentation">
            Lorem ipsum dolor sit amet,
            consectetur adipiscing elit,
            eiusmod tempor incididunt ut et dolore magna aliqua
          </p>
        </div>

        <a className="about-me-anchor" href="#about-me-section">
          <div className="read-more-link">Read more</div>
        </a>
      </div>
    </div>

  </div>
);

export default MainHome;
