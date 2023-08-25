import React from 'react';
import '../components/styles/movieDescription.scss';
import heart from '../assets/heart.svg';
import star from '../assets/star.svg';

const MovieDescription = () => {
  return (
    <div className="trending-movie-wrapper">
      <div
        style={{ backgroundImage: "url('src/assets/Rectangle201.svg')" }}
        className="trending-movie-card-wrapper"
      ></div>
      <div className="movie-description-wrapper">
        <div className="movie-description-title-wrapper">
          <h1>House of Wealth</h1>
          <div className="rating-wrapper">
            <img src={star} height="24px" alt="rate icon" />
            <p>7.8/10</p>
          </div>
        </div>

        <div className="description-wrapper">
          <h5>2023 Drama 2h 38m</h5>
          <article>
            The movie follows the lives of a wealthy family, the Johnsons, who
            appear to have it all: a grand mansion, luxurious cars, and
            expensive designer clothing. However, behind the facade of their
            lavish lifestyle, there are deep-seated tensions and secrets that
            threaten to tear the family apart.
          </article>
          <div className="trending-button-wrapper">
            <button>
              <img src={heart} height="24px" alt="rate button" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MovieDescription;
