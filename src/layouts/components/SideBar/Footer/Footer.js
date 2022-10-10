import PropTypes from 'prop-types';
import clsx from 'clsx';
import styles from './Footer.module.scss';

function Footer({ children }) {
  return (
    <div className={clsx(styles.container)}>
      {children}
      <span className={clsx(styles.copyright)}>© 2022 TikTok</span>
    </div>
  );
}

Footer.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Footer;
