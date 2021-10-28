import React from 'react';
import '../css/mainHome.css';
import githubicon from '../icons/iconmonstr-github-1.svg';
import linkedinicon from '../icons/iconmonstr-linkedin-3.svg';
import profileImage from '../images/home_photo_9.png';
import Carrousel from './Carrousel';
import arrDataCardsHighlights from '../data/arrHighlights';

const MainHome = () => (
  <div>

    <div className="breathing-code-box">
      <h1 className="headline-breathing-code">breathing code</h1>
    </div>

    <div className="contacts-box">
      <div className="email-box">
        <h4>Email</h4>
        <p>vitor.gonzagaf1@gmail.com</p>
      </div>

      <div className="phone-box">
        <h4>Phone</h4>
        <p>+55 11 974025831</p>
      </div>

      <div className="icons-box">
        <a href="https://www.linkedin.com/in/vitorgonzaga/" target="_blank" rel="noreferrer">
          <img style={{ width: '48px' }} src={linkedinicon} alt="linkedin icon" />
        </a>
        <a href="https://github.com/vitorgonzaga" target="_blank" rel="noreferrer">
          <img style={{ width: '48px' }} src={githubicon} alt="github icon" />
        </a>
      </div>

    </div>

    <div className="short-presentation-box">

      <div className="img-box">
        <img style={{ height: '665px' }} src={profileImage} alt="profile" />
      </div>

      <div className="previous-presentation-box">
        <div className="headline-short-presentation-box">
          <h3 className="headline-meet-vitor">Meet Vitor Ferreira</h3>
        </div>

        <div className="short-text-presentation-box">
          <p className="paragraph-short-presentation">
            {`Hello World!
            This place was made with a lot of care for introduce myself.
            I'm a 36-year-old front-end developer, who also is a passionated father and husband.
            Is a great pleasure have you here!`}
          </p>
        </div>

        <a className="about-me-anchor" href="#about-me-section">
          <div className="read-more-link">Read more</div>
        </a>
      </div>
    </div>
    <div>
      <Carrousel data={arrDataCardsHighlights} />
    </div>

  </div>
);

export default MainHome;
