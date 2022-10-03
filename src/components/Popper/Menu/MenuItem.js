import React from 'react';
import Button from '~/components/Button';
import styles from './Menu.module.scss';

function MenuItem({ data, onClick }) {
  return (
    <Button
      className={styles['menu-item']}
      to={data.to}
      leftIcon={data.icon}
      onClick={onClick}
    >
      {data.title}
    </Button>
  );
}

export default MenuItem;
