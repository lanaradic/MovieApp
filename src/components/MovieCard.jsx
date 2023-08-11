import React from 'react';
import heart from '../assets/heart.svg';
import './styles/movieCard.scss';

const MovieCard = () => {
  return (
    <div
      style={{ backgroundImage: "url('src/assets/Rectangle201.svg')" }}
      className="movie-card-wrapper"
    >
      <div className="movie-card-button-wrapper">
        <button>
          <img src={heart} alt="rate button" />
        </button>
      </div>
      <div className="movie-card-content">
        <div className="inner-wrapper">
          <h2>Tokyo Train</h2>
          <p>2022 | Action comedy</p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
