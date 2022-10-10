import PropTypes from 'prop-types';
import styles from './MainNav.module.scss';

function MainNav({ children }) {
  return <nav className={styles.container}>{children}</nav>;
}
MainNav.propTypes = {
  children: PropTypes.node.isRequired,
};
export default MainNav;
