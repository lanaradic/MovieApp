import React, { useState } from 'react';
import './styles/sideBar.scss';
import coffee from '../assets/coffee.svg';
import film from '../assets/film.svg';
import heart from '../assets/heart.svg';
import trending from '../assets/trending-up.svg';
import calendar from '../assets/calendar.svg';
import message from '../assets/message-circle.svg';
import { Link } from 'react-router-dom';

const SideBar = () => {
  const [active, setActive] = useState('Home');

  const handleLinkClick = link => {
    setActive(link);
    console.log(active);
  };

  return (
    <div className="sidebar-wrapper">
      <div className="sidebar-title-wrapper">
        <img src={coffee} height="32px" alt="coffe icon" />
        <h1 className="sidebar-title">WATCH</h1>
      </div>
      <div className="sidebar-list">
        <Link
          onClick={() => handleLinkClick('Home')}
          to="/"
          className={`sidebar-list-item `}
        >
          <img src={film} height="24px" alt="movie icon" />
          <h1 className={`sidebar-item ${active === 'Home' ? 'active' : ''}`}>
            Home
          </h1>
        </Link>

        <Link
          onClick={() => handleLinkClick('Favourites')}
          to="/Favourites"
          className={`sidebar-list-item `}
        >
          <img src={heart} height="24px" alt="heart icon" />
          <h1
            className={`sidebar-item ${
              active === 'Favourites' ? 'active' : ''
            }`}
          >
            Favourites
          </h1>
        </Link>

        <Link
          onClick={() => handleLinkClick('Trending')}
          to="/Trending"
          className={`sidebar-list-item `}
        >
          <img src={trending} height="24px" alt="trending icon" />
          <h1
            className={`sidebar-item ${active === 'Trending' ? 'active' : ''}`}
          >
            Trending
          </h1>
        </Link>

        <Link
          onClick={() => handleLinkClick('Coming soon')}
          to="/"
          className={`sidebar-list-item `}
        >
          <img src={calendar} height="24px" alt="calendar icon" />
          <h1
            className={`sidebar-item ${
              active === 'Coming soon' ? 'active' : ''
            }`}
          >
            Coming soon
          </h1>
        </Link>

        <Link
          onClick={() => handleLinkClick('Social')}
          to="/"
          className={`sidebar-list-item `}
        >
          <img src={message} height="24px" alt="message icon" />
          <h1 className={`sidebar-item ${active === 'Social' ? 'active' : ''}`}>
            Social
          </h1>
        </Link>
      </div>
    </div>
  );
};

export default SideBar;
