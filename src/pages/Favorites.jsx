import React from 'react';
import MovieCard from '../components/MovieCard';
import '../components/styles/favourites.scss';

const Favorites = () => {
  return (
    <div className="main-favourites-wrapper">
      <div className="navigation-wrapper">
        <div>Movies</div>
        <div>Series</div>
        <div>Documentaries</div>
      </div>
      <h2 className="favourites-title">Favourites</h2>
      <div className="favourite-card-wrapper">
        <MovieCard isFavorite={true} />
        <MovieCard isFavorite={true} />
      </div>
    </div>
  );
};

export default Favorites;
