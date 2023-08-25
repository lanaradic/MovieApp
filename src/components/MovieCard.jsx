import React from 'react';
import '../components/styles/movieCard.scss';
import heart from '../assets/heart.svg';

const MovieCard = ({ isFavorite, title, year, genre }) => {
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
            <h2>{title}</h2>
            <p>
              {year} | {genre}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
