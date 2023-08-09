import React from 'react';
import SideBar from '../components/SideBar.jsx';
import './styles/index.scss';
import '../styles/colors.scss';

const MainLayout = ({ children }) => {
  return (
    <>
      <div className="main-wrapper">
        <aside className="side-bar">
          <SideBar></SideBar>
        </aside>
        <main className="main-content">{children}</main>
      </div>
    </>
  );
};

export default MainLayout;
