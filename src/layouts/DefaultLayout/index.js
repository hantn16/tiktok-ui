import React from 'react';
import Header from '~/layouts/components/Header';
import SideBar from '~/layouts/components/SideBar';

function DefaultLayout({ children }) {
  return (
    <div>
      <Header />
      <div className="container">
        <SideBar />
        <div className="content">{children}</div>
      </div>
    </div>
  );
}

export default DefaultLayout;
