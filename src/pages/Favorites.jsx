import React from 'react';
import MovieCard from '../components/MovieCard';
import '../components/styles/favourites.scss';
import { favoriteData } from '../mocks/movies';

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
        {favoriteData.length &&
          favoriteData.map((item, index) => {
            return (
              <MovieCard
                key={index}
                isFavorite={true}
                title={item.title}
                year={item.year}
                genre={item.genre}
              />
            );
          })}
        {/* <MovieCard isFavorite={true} title={} />
        <MovieCard isFavorite={true} /> */}
      </div>
    </div>
  );
};

export default Favorites;
