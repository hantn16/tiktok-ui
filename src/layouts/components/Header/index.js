import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faXmarkCircle,
  faMagnifyingGlass,
  faSpinner,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';

import styles from './Header.module.scss';
import clsx from 'clsx';
import images from '~/assets/images';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';

function Header() {
  const [searchResult, setSearchResult] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      setSearchResult([1, 2]);
    }, 0);
  }, []);
  return (
    <header className={clsx(styles.wrapper)}>
      <div className={clsx(styles.inner)}>
        <img src={images.logo} alt="TikTok" />
        <div>
          <Tippy
            interactive
            visible={searchResult.length > 0}
            render={(attrs) => (
              <div
                className={clsx(styles['search-result'])}
                tabIndex="-1"
                {...attrs}
              >
                <PopperWrapper>
                  <h4 className={clsx(styles['search-title'])}>Accounts</h4>
                  <AccountItem></AccountItem>
                  <AccountItem></AccountItem>
                  <AccountItem></AccountItem>
                  <AccountItem></AccountItem>
                </PopperWrapper>
              </div>
            )}
          >
            <div className={clsx(styles.search)}>
              <input
                type="text"
                placeholder="Search accounts and videos"
                spellCheck={false}
              />
              <button className={clsx(styles.clear)}>
                <FontAwesomeIcon icon={faXmarkCircle}></FontAwesomeIcon>
              </button>
              <FontAwesomeIcon
                className={clsx(styles.loading)}
                icon={faSpinner}
              />
              <button className={clsx(styles['search-btn'])}>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </button>
            </div>
          </Tippy>
        </div>
        <div className={clsx(styles.actions)}></div>
      </div>
    </header>
  );
}

export default Header;
