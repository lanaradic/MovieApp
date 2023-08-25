import React from 'react';
import '../components/styles/homeTrending.scss';
import MovieCard from './MovieCard';

const HomeTrending = ({ title, favorite }) => {
  return (
    <>
      <h2 className="trending-title">{title}</h2>
      <div className="home-trennding-wrapper">
        <MovieCard isFavorite={favorite} />
        <MovieCard isFavorite={favorite} />
        <MovieCard isFavorite={favorite} />
        {!favorite && <MovieCard isFavorite={favorite} />}
      </div>
    </>
  );
};

export default HomeTrending;
