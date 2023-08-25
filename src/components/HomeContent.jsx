import React from 'react';
import HomeTrending from './HomeTrending';

const HomeContent = () => {
  return (
    <div>
      <HomeTrending title="Trending" />
      <HomeTrending title="Favorites" favorite={true} />
    </div>
  );
};

export default HomeContent;
