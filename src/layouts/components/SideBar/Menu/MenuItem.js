import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import styles from './Menu.module.scss';

function MenuItem({ to, title, icon, activeIcon }) {
  return (
    <NavLink
      className={({ isActive }) =>
        clsx(styles['menu-item'], { [styles['active']]: isActive })
      }
      to={to}
      end
      children={({ isActive }) => {
        const currentIcon = isActive ? activeIcon : icon;
        return (
          <>
            {currentIcon}
            <span className={clsx(styles.title)}>{title}</span>
          </>
        );
      }}
    >
      {/* <span className={clsx(styles.icon)}>{icon}</span>
      <span className={clsx(styles['active-icon'])}>{activeIcon}</span> */}
    </NavLink>
  );
}
MenuItem.propTypes = {
  to: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  activeIcon: PropTypes.node.isRequired,
};
export default MenuItem;
