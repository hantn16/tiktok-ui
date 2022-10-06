import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEllipsisVertical,
  faGlobe,
  faCircleQuestion,
  faKeyboard,
  faCoins,
  faGear,
  faSignOut,
  faUser,
  faVideo,
  faPlus,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import styles from './Header.module.scss';
import clsx from 'clsx';
import images from '~/assets/images';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import { InboxIcon, MessageIcon } from '~/components/Icons';
import Image from '~/components/Image';
import Search from '../Search';
import routeConfig from '~/configs/routeConfig';
import { Link } from 'react-router-dom';

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
  const currentUser = true;

  // Handle logic
  const handleMenuChange = (menuItem) => {
    switch (menuItem.type) {
      case 'language':
        // Handle change language
        break;
      default:
    }
  };

  const userMenu = [
    {
      icon: <FontAwesomeIcon icon={faUser} />,
      title: 'View profile',
      to: '/@hoaa',
    },
    {
      icon: <FontAwesomeIcon icon={faCoins} />,
      title: 'Get coins',
      to: '/coin',
    },
    {
      icon: <FontAwesomeIcon icon={faVideo} />,
      title: 'LIVE studio',
      to: '/studio',
    },
    {
      icon: <FontAwesomeIcon icon={faGear} />,
      title: 'Settings',
      to: '/settings',
    },
    ...SEEMORE_ITEMS,
    {
      icon: <FontAwesomeIcon icon={faSignOut} />,
      title: 'Log out',
      to: '/logout',
      separate: true,
    },
  ];

  return (
    <header className={clsx(styles.wrapper)}>
      <div className={clsx(styles.inner)}>
        <Link to={routeConfig.home} className={clsx(styles['logo-link'])}>
          <img src={images.logo} alt="TikTok" />
        </Link>
        <div>
          <Search />
        </div>
        <div className={clsx(styles.actions)}>
          <Button
            outline
            leftIcon={<FontAwesomeIcon icon={faPlus} />}
            className={styles['upload-btn']}
            to={routeConfig.upload}
          >
            Upload
          </Button>
          {currentUser ? (
            <>
              <Tippy delay={[0, 50]} content="Messages" placement="bottom">
                <button className={styles['action-btn']}>
                  <MessageIcon />
                </button>
              </Tippy>
              <Tippy delay={[0, 50]} content="Inbox" placement="bottom">
                <button className={styles['action-btn']}>
                  <InboxIcon />
                  <span className={clsx(styles['badge'])}>12</span>
                </button>
              </Tippy>
            </>
          ) : (
            <>
              <Button primary>Login</Button>
            </>
          )}
          <Menu
            items={currentUser ? userMenu : SEEMORE_ITEMS}
            onChange={handleMenuChange}
          >
            {currentUser ? (
              <Image
                className={styles['user-avatar']}
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/be22b8593ea95c8835d47f4b5309ec16~c5_100x100.jpeg?x-expires=1664956800&x-signature=RV3j8iS%2FYBjgCXh%2FkX5ibK0KyQs%3D"
                alt="Nguyen Van A"
              />
            ) : (
              <button className={styles['more-btn']}>
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </button>
            )}
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default Header;
