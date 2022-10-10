import PropTypes from 'prop-types';
import clsx from 'clsx';
import styles from './Discover.module.scss';

function Discover({ children }) {
  return (
    <div className={clsx(styles.container)}>
      <p className={clsx(styles.heading)}>Discover</p>
      <div className={clsx(styles.list)}>{children}</div>
    </div>
  );
}
Discover.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Discover;
