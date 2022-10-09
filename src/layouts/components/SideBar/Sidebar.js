import React from 'react';
import styles from './Sidebar.module.scss';
import clsx from 'clsx';
import Menu, { MenuItem } from './Menu';
import {
  HomeActiveIcon,
  HomeIcon,
  LiveActiveIcon,
  LiveIcon,
  UserGroupActiveIcon,
  UserGroupIcon,
} from '~/components/Icons';
import { routes } from '~/configs';

function Sidebar() {
  return (
    <aside className={clsx(styles.wrapper)}>
      <div className={styles['main-nav']}>
        <Menu>
          <MenuItem
            to={routes.home}
            title="For You"
            icon={<HomeIcon />}
            activeIcon={<HomeActiveIcon />}
          />
          <MenuItem
            to={routes.following}
            title="Following"
            icon={<UserGroupIcon />}
            activeIcon={<UserGroupActiveIcon />}
          />
          <MenuItem
            to={routes.live}
            title="LIVE"
            icon={<LiveIcon />}
            activeIcon={<LiveActiveIcon />}
          />
        </Menu>
      </div>
    </aside>
  );
}

export default Sidebar;
