import PropTypes from 'prop-types';
import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import styles from './AccountMenu.module.scss';
import Button from '~/components/Button';
import Image from '~/components/Image';

function AccountPreview({ data }) {
  return (
    <div className={clsx(styles['preview-container'])}>
      <div className={clsx(styles['preview-heading'])}>
        <Image
          src={data.avatar}
          alt={data.full_name}
          className={clsx(styles['preview-avatar'])}
        />
        <Button primary className={clsx(styles['follow-btn'])}>
          Follow
        </Button>
      </div>
      <Button
        text
        className={clsx(styles['preview-nickname'])}
        to={`/@${data.nickname}`}
      >
        <span>{data.nickname}</span>
        {data.tick && (
          <FontAwesomeIcon
            className={clsx(styles.check)}
            icon={faCheckCircle}
          />
        )}
      </Button>
      <br />
      <Button
        text
        className={clsx(styles['preview-fullname'])}
        to={`/@${data.nickname}`}
      >
        {data.full_name}
      </Button>
      <p>
        <span className={clsx(styles['user-stats-text'])}>7.6M</span>
        <span className={clsx(styles['user-stats-desc'])}>Followers</span>
        <span className={clsx(styles['user-stats-text'])}>525.6M</span>
        <span className={clsx(styles['user-stats-desc'])}>Likes</span>
      </p>
    </div>
  );
}
AccountPreview.propTypes = {
  data: PropTypes.object.isRequired,
};
export default AccountPreview;
