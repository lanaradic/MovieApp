import './App.scss';
import React from 'react';
import MainLayout from './layout/MainLayout';

import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Trending from './pages/Trending';
import Favourites from './pages/Favorites';

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/Favourites" element={<Favourites />} />
      </Routes>
    </MainLayout>
  );
}

export default App;

// <MainLayout>
{
  /* <Routes> */
}
{
  /* <Route path="/" element={<Home />} /> */
}
{
  /* </Routes> */
}
// </MainLayout>
