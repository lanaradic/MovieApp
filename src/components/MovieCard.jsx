import React from 'react';
import '../components/styles/movieCard.scss';
import heart from '../assets/heart.svg';

const MovieCard = ({ isFavorite }) => {
  return (
    <div
      style={{ backgroundImage: "url('src/assets/Rectangle201.svg')" }}
      className={`movie-card-wrapper ${
        isFavorite ? 'favorites-movie-card' : ''
      }`}
    >
      <div className="movie-card-button-wrapper">
        <button>
          <img src={heart} height="14,22px" alt="rate button" />
        </button>
        <div className="movie-card-content">
          <div className="inner-wrapper">
            <h2>Tokyo Train</h2>
            <p>2022 | Action comedy</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
