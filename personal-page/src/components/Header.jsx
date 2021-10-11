import React from 'react';
import { useHistory } from 'react-router-dom';
import '../css/header.css';

const Header = () => {
  const history = useHistory();
  const handleClick = ({ target: { value } }) => {
    history.push(`/${value}`);
  };
  return (
    <div className="main-box-header">
      <div className="box-links">
        <button
          className="buttons-header"
          onClick={handleClick}
          type="button"
          value="lets-talk"
        >
          Lets Talk
        </button>
        <button
          className="buttons-header"
          type="button"
          value="about-me"
          onClick={handleClick}
        >
          About Me
        </button>
        <button
          className="buttons-header"
          type="button"
          value="portfolio"
          onClick={handleClick}
        >
          Portfolio
        </button>
      </div>
    </div>
  );
};

export default Header;
