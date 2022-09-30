import React from 'react';
import Button from '~/components/Button';
import styles from './Menu.module.scss';

function MenuItem({ data }) {
  return (
    <Button className={styles['menu-item']} to={data.to} leftIcon={data.icon}>
      {data.title}
    </Button>
  );
}

export default MenuItem;
