import React from 'react';
import './sideBar.scss';
import coffee from '../assets/coffee.svg';

import film from '../assets/film.svg';
import heart from '../assets/heart.svg';
import trending from '../assets/trending-up.svg';
import calendar from '../assets/calendar.svg';
import message from '../assets/message-circle.svg';

const SideBar = () => {
  return (
    <div className="sidebar-wrapper">
      <div className="sidebar-title-wrapper">
        <img src={coffee} height="32px" alt="icon" />
        <h1 className="sidebar-title">Movie</h1>
      </div>
      <div className="sidebar-list">
        <div className="sidebar-list-item">
          <img src={film} height="24px" alt="icon" />
          <h1 className="sidebar-item">Home</h1>
        </div>

        <div className="sidebar-list-item">
          <img src={heart} height="24px" alt="icon" />
          <h1 className="sidebar-item">Favorites</h1>
        </div>

        <div className="sidebar-list-item">
          <img src={trending} height="24px" alt="icon" />
          <h1 className="sidebar-item">Trending</h1>
        </div>

        <div className="sidebar-list-item">
          <img src={calendar} height="24px" alt="icon" />
          <h1 className="sidebar-item">Coming soon</h1>
        </div>

        <div className="sidebar-list-item">
          <img src={message} height="24px" alt="icon" />
          <h1 className="sidebar-item">Social</h1>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
