import PropTypes from 'prop-types';
import clsx from 'clsx';

import AccountItem from './AccountItem';
import styles from './AccountMenu.module.scss';

function AccountMenu({ title, items }) {
  return (
    <div className={clsx(styles.container)}>
      <p className={clsx(styles.title)}>{title}</p>

      {title === 'Following accounts' && items?.length === 0 ? (
        <p className={clsx(styles['empty-hint'])}>
          Accounts you follow will appear here
        </p>
      ) : (
        <>
          {items.map((item) => {
            return <AccountItem key={item.id} data={item} />;
          })}
          <div className={clsx(styles['more-wrapper'])}>
            <p className={clsx(styles['more-text'])}>See all</p>
          </div>
        </>
      )}
    </div>
  );
}
AccountMenu.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
};

export default AccountMenu;
