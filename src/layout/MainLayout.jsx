//css se importa tako da napisem import i path do file-a
//react snnipet za komponentu je rafce
//komponente se importaju tako da napisem import ime komponente from path do file-a
import './styles/mainLayout.scss';
import React from 'react';
import SideBar from '../components/SideBar.jsx';
import '../styles/colors.scss';

const MainLayout = ({ children }) => {
  return (
    <>
      <div className="main-layout-wrapper">
        <aside className="side-bar-wrapper">
          <SideBar />
        </aside>
        <main className="main-content-wrapper">{children}</main>
      </div>
    </>
  );
};

export default MainLayout;
