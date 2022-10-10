import React from 'react';
import styles from './Sidebar.module.scss';
import clsx from 'clsx';
import MainNav, { MainNavItem } from './MainNav';
import {
  HomeActiveIcon,
  HomeIcon,
  LiveActiveIcon,
  LiveIcon,
  UserGroupActiveIcon,
  UserGroupIcon,
} from '~/components/Icons';
import { routes } from '~/configs';
import AccountMenu from './AccountMenu';
import Discover from './Discover';
import Footer from './Footer';

function Sidebar() {
  const accounts = [
    {
      id: 1,
      nickname: 'datvilla94',
      full_name: '🔥Đạt Villa🔥',
      tick: true,
      avatar:
        'https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/be22b8593ea95c8835d47f4b5309ec16~c5_100x100.jpeg?x-expires=1665500400&x-signature=me8TR1%2BEANOMLVhbp7%2BKnZZa3XQ%3D',
    },
    {
      id: 2,
      nickname: 'manhtienkhoi_',
      full_name: 'Mạnh Tiến Khôi 🐯',
      tick: true,
      avatar:
        'https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/be22b8593ea95c8835d47f4b5309ec16~c5_100x100.jpeg?x-expires=1665500400&x-signature=me8TR1%2BEANOMLVhbp7%2BKnZZa3XQ%3D',
    },
    {
      id: 3,
      nickname: 'theanh28entertainment',
      full_name: 'Theanh28 Entertainment',
      tick: true,
      avatar:
        'https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/be22b8593ea95c8835d47f4b5309ec16~c5_100x100.jpeg?x-expires=1665500400&x-signature=me8TR1%2BEANOMLVhbp7%2BKnZZa3XQ%3D',
    },
    {
      id: 4,
      nickname: 'nguyenvana',
      full_name: 'Nguyễn Văn A',
      tick: true,
      avatar:
        'https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/be22b8593ea95c8835d47f4b5309ec16~c5_100x100.jpeg?x-expires=1665500400&x-signature=me8TR1%2BEANOMLVhbp7%2BKnZZa3XQ%3D',
    },
    {
      id: 5,
      nickname: 'nguyenvana',
      full_name: 'Nguyễn Văn A',
      tick: true,
      avatar:
        'https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/be22b8593ea95c8835d47f4b5309ec16~c5_100x100.jpeg?x-expires=1665500400&x-signature=me8TR1%2BEANOMLVhbp7%2BKnZZa3XQ%3D',
    },
  ];
  return (
    <aside className={clsx(styles.wrapper)}>
      <div className={styles['main-nav']}>
        <MainNav>
          <MainNavItem
            to={routes.home}
            title="For You"
            icon={<HomeIcon />}
            activeIcon={<HomeActiveIcon />}
          />
          <MainNavItem
            to={routes.following}
            title="Following"
            icon={<UserGroupIcon />}
            activeIcon={<UserGroupActiveIcon />}
          />
          <MainNavItem
            to={routes.live}
            title="LIVE"
            icon={<LiveIcon />}
            activeIcon={<LiveActiveIcon />}
          />
        </MainNav>
      </div>
      <AccountMenu title="Suggested accounts" items={accounts} />
      <AccountMenu title="Following accounts" items={[]} />
      <Discover />
      <Footer />
    </aside>
  );
}

export default Sidebar;
