import React from 'react';
import HomeTrending from '../components/HomeTrending';
import MovieDescription from '../components/MovieDescription';
import { data } from '../mocks/movies';

const Trending = () => {
  return (
    <div>
      <HomeTrending title="Trending at this moment" data={data} />
      <MovieDescription />
    </div>
  );
};

export default Trending;
