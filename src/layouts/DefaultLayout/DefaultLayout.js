import PropTypes from 'prop-types';
import clsx from 'clsx';
import styles from './DefaultLayout.module.scss';
import Header from '~/layouts/components/Header';
import SideBar from '~/layouts/components/Sidebar';

function DefaultLayout({ children }) {
  return (
    <div className={clsx(styles.wrapper)}>
      <Header />
      <div className={clsx(styles.container)}>
        <SideBar />
        <div className={clsx(styles.content)}>{children}</div>
      </div>
    </div>
  );
}
DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DefaultLayout;
