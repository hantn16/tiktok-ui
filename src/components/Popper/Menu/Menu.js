import { useState } from 'react';
import PropTypes from 'prop-types';
import Tippy from '@tippyjs/react/headless';
import clsx from 'clsx';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './Menu.module.scss';
import MenuItem from './MenuItem';
import Header from './Header';

const defaultFn = () => {};

function Menu({
  children,
  items = [],
  hideOnClick = false,
  onChange = defaultFn,
}) {
  const [history, setHistory] = useState([{ data: items }]);
  const current = history[history.length - 1];

  const handleBack = () => {
    setHistory((prev) => prev.slice(0, prev.length - 1));
  };
  const renderItems = () =>
    current.data.map((item, index) => {
      const isParent = !!item.children;

      return (
        <MenuItem
          key={index}
          data={item}
          onClick={() => {
            if (isParent) {
              setHistory((prev) => [...prev, item.children]);
            } else {
              onChange(item);
            }
          }}
        ></MenuItem>
      );
    });
  const renderResult = (attrs) => (
    <div className={clsx(styles['menu-list'])} tabIndex="-1" {...attrs}>
      <PopperWrapper className={clsx(styles['menu-popper'])}>
        {history.length > 1 && (
          <Header title={current.title} onBack={handleBack}></Header>
        )}
        <div className={clsx(styles['menu-body'])}>{renderItems()}</div>
      </PopperWrapper>
    </div>
  );
  const handleReset = () => setHistory((prev) => prev.slice(0, 1));
  return (
    <Tippy
      interactive
      delay={[0, 700]}
      offset={[12, 8]}
      placement="bottom-end"
      hideOnClick={hideOnClick}
      render={renderResult}
      onHide={handleReset}
    >
      {children}
    </Tippy>
  );
}

Menu.propTypes = {
  children: PropTypes.node.isRequired,
  items: PropTypes.array,
  hideOnClick: PropTypes.bool,
  onChange: PropTypes.func,
};

export default Menu;
