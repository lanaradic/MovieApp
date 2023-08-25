import React from 'react';
import HomeTrending from '../components/HomeTrending';
import MovieDescription from '../components/MovieDescription';

const Trending = () => {
  return (
    <div>
      <HomeTrending title="Trending at this moment" />
      <MovieDescription />
    </div>
  );
};

export default Trending;
