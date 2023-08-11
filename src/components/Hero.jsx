import React from 'react';
import './styles/hero.scss';
import heart from '../assets/heart.svg';

const Hero = () => {
  return (
    <div
      style={{ backgroundImage: "url('src/assets/Rectangle201.svg')" }}
      className="home-main-wrapper"
    >
      <div className="navigation-wrapper">
        <div>Movies</div>
        <div>Series</div>
        <div>Documentaries</div>
      </div>
      <div className="hero-description">
        <h1>Insider</h1>
        <p>2022 | Comedy horror | 1 Season</p>
        <div className="description-button-wrapper">
          <button>
            <img src={heart} alt="rate button" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
