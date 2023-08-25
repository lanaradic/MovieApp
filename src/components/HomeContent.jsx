import React from 'react';
import HomeTrending from './HomeTrending';
import { data } from '../mocks/movies';
import { favoriteData } from '../mocks/movies';

const HomeContent = () => {
  return (
    <div>
      <HomeTrending title="Trending" data={data} />
      <HomeTrending title="Favorites" favorite={true} data={favoriteData} />
    </div>
  );
};

export default HomeContent;
