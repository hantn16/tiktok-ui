import React from 'react';
import Header from '~/layouts/components/Header';

function DefaultLayout({ children }) {
  return (
    <div>
      <Header />
      <div className="content">{children}</div>
    </div>
  );
}

export default DefaultLayout;
