import React from 'react';
import '../components/styles/homeTrending.scss';
import MovieCard from './MovieCard';

const HomeTrending = ({ title, favorite, data }) => {
  return (
    <>
      <h2 className="trending-title">{title}</h2>
      <div className="home-trennding-wrapper">
        {data.length && !favorite
          ? data
              .map((item, index) => {
                return (
                  <MovieCard
                    key={index}
                    isFavorite={favorite}
                    title={item.title}
                    year={item.year}
                    genre={item.genre}
                  />
                );
              })
              .slice(0, 4)
          : data
              .map((item, index) => {
                return (
                  <MovieCard
                    key={index}
                    isFavorite={favorite}
                    title={item.title}
                    year={item.year}
                    genre={item.genre}
                  />
                );
              })
              .slice(0, 3)}

        {/* <MovieCard isFavorite={favorite} />
        <MovieCard isFavorite={favorite} />
        <MovieCard isFavorite={favorite} />
        {!favorite && <MovieCard isFavorite={favorite} />} */}
      </div>
    </>
  );
};

export default HomeTrending;
