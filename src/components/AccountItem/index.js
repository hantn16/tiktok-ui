import React from 'react';
import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import styles from './AccountItem.module.scss';

function AccountItem() {
  return (
    <div className={clsx(styles.wrapper)}>
      <img
        src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/a00ccceb03c41b64febe56f9b2a7736b~c5_300x300.webp?x-expires=1664632800&x-signature=8WG4NmaaW0NCDk1%2FsVH6xupRWK4%3D"
        alt="avatar"
        className={clsx(styles.avatar)}
      />
      <div className={clsx(styles.info)}>
        <h4 className={clsx(styles.account)}>
          duongbaolam
          <FontAwesomeIcon
            className={clsx(styles.check)}
            icon={faCheckCircle}
          />
        </h4>
        <p className={clsx(styles.name)}>HƯƠNG GIANG</p>
      </div>
    </div>
  );
}

export default AccountItem;
