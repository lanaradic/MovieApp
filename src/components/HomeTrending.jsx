import React from 'react';
import MovieCard from './MovieCard';
import './styles/homeTrending.scss';

const HomeTrending = () => {
  return (
    <>
      <h2 className="trending-title">Trending</h2>
      <div className="home-trending-wrapper">
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </div>
    </>
  );
};

export default HomeTrending;
