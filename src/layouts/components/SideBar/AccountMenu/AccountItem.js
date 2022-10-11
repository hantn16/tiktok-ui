import PropTypes from 'prop-types';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import Tippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import Image from '~/components/Image';
import styles from './AccountMenu.module.scss';

import AccountPreview from './AccountPreview';

function AccountItem({ data }) {
  return (
    <div>
      <Tippy
        interactive
        delay={[800, 0]}
        placement="bottom-start"
        render={(attrs) => (
          <div
            className={clsx(styles['account-preview'])}
            tabIndex="-1"
            {...attrs}
          >
            <AccountPreview data={data} />
          </div>
        )}
      >
        <Link to={`/@${data.nickname}`} className={clsx(styles.wrapper)}>
          <Image
            src={data.avatar}
            alt={data.full_name}
            className={clsx(styles.avatar)}
          />
          <div className={clsx(styles.info)}>
            <h4 className={clsx(styles.account)}>
              {data.nickname}
              {data.tick && (
                <FontAwesomeIcon
                  className={clsx(styles.check)}
                  icon={faCheckCircle}
                />
              )}
            </h4>
            <p className={clsx(styles.name)}>{data.full_name}</p>
          </div>
        </Link>
      </Tippy>
    </div>
  );
}
AccountItem.propTypes = {
  data: PropTypes.object.isRequired,
};

export default AccountItem;
