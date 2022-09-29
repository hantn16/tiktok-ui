import React from 'react';
import styles from './SideBar.module.scss';
import clsx from 'clsx';

function SideBar() {
  return (
    <aside className={clsx(styles.wrapper)}>
      <h2>SideBar</h2>
    </aside>
  );
}

export default SideBar;
