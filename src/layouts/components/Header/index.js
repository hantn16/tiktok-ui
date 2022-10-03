import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faXmarkCircle,
  faMagnifyingGlass,
  faSpinner,
  faEllipsisVertical,
  faGlobe,
  faCircleQuestion,
  faKeyboard,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';

import styles from './Header.module.scss';
import clsx from 'clsx';
import images from '~/assets/images';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';

const SEEMORE_ITEMS = [
  {
    title: 'English',
    icon: <FontAwesomeIcon icon={faGlobe} />,
    children: {
      title: 'Language',
      data: [
        {
          type: 'language',
          code: 'en',
          title: 'English',
        },
        {
          type: 'language',
          code: 'vi',
          title: 'Tiếng Việt',
        },
      ],
    },
  },
  {
    title: 'Feedback and help',
    icon: <FontAwesomeIcon icon={faCircleQuestion} />,
    to: '/feedback',
  },
  {
    title: 'Keyboard shortcuts',
    icon: <FontAwesomeIcon icon={faKeyboard} />,
  },
];
function Header() {
  const [searchResult, setSearchResult] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      setSearchResult([1, 2]);
    }, 0);
  }, []);

  // Handle logic
  const handleMenuChange = (menuItem) => {
    switch (menuItem.type) {
      case 'language':
        // Handle change language
        break;
      default:
    }
  };

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
        <div className={clsx(styles.actions)}>
          <Button text>Upload</Button>
          <Button primary>Login</Button>
          <Menu items={SEEMORE_ITEMS} onChange={handleMenuChange}>
            <button className={styles['more-btn']}>
              <FontAwesomeIcon icon={faEllipsisVertical} />
            </button>
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default Header;
