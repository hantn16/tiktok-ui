import React from 'react';
import Tippy from '@tippyjs/react/headless';
import clsx from 'clsx';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './Menu.module.scss';
import MenuItem from './MenuItem';
function Menu({ children, items = [] }) {
  const renderItems = () =>
    items.map((item, index) => {
      return <MenuItem key={index} data={item}></MenuItem>;
    });
  return (
    <Tippy
      interactive
      placement="bottom-end"
      delay={[0, 700]}
      render={(attrs) => (
        <div className={clsx(styles['menu-list'])} tabIndex="-1" {...attrs}>
          <PopperWrapper className={clsx(styles['menu-popper'])}>
            {renderItems()}
          </PopperWrapper>
        </div>
      )}
    >
      {children}
    </Tippy>
  );
}

export default Menu;
