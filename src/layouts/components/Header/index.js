import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faXmarkCircle,
  faMagnifyingGlass,
  faSpinner,
} from '@fortawesome/free-solid-svg-icons';

import styles from './Header.module.scss';
import clsx from 'clsx';
import images from '~/assets/images';

function Header() {
  return (
    <header className={clsx(styles.wrapper)}>
      <div className={clsx(styles.inner)}>
        <img src={images.logo} alt="TikTok" />
        <div className={clsx(styles.search)}>
          <input
            type="text"
            placeholder="Search accounts and videos"
            spellCheck={false}
          />
          <button className={clsx('clear')}>
            <FontAwesomeIcon icon={faXmarkCircle}></FontAwesomeIcon>
          </button>
          <FontAwesomeIcon className={clsx('loading')} icon={faSpinner} />
          <button className={clsx(styles['search-btn'])}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>
        <div className={clsx('actions')}></div>
      </div>
    </header>
  );
}

export default Header;
