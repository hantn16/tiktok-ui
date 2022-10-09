import PropTypes from 'prop-types';
import clsx from 'clsx';

import Button from '~/components/Button';
import styles from './Menu.module.scss';

function MenuItem({ data, onClick }) {
  const classes = clsx(styles['menu-item'], {
    [styles.separate]: data.separate,
  });
  return (
    <Button
      className={classes}
      to={data.to}
      leftIcon={data.icon}
      onClick={onClick}
    >
      {data.title}
    </Button>
  );
}
MenuItem.propTypes = {
  data: PropTypes.object.isRequired,
  onClick: PropTypes.func,
};
export default MenuItem;
