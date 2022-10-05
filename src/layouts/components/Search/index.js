import React, { useEffect, useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmarkCircle, faSpinner } from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';

import styles from './Search.module.scss';
import clsx from 'clsx';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import { SearchIcon } from '~/components/Icons';

function Search() {
  const [searchValue, setSearchValue] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [showResult, setShowResult] = useState(true);

  const inputRef = useRef();
  useEffect(() => {
    setTimeout(() => {
      setSearchResult([1, 2]);
    }, 0);
  }, []);
  const handleClear = () => {
    setSearchValue('');
    inputRef.current.focus();
  };
  const handleHideResult = () => {
    setShowResult(false);
  };
  return (
    <HeadlessTippy
      interactive
      visible={showResult && searchResult.length > 0}
      render={(attrs) => (
        <div className={clsx(styles['search-result'])} tabIndex="-1" {...attrs}>
          <PopperWrapper>
            <h4 className={clsx(styles['search-title'])}>Accounts</h4>
            <AccountItem></AccountItem>
            <AccountItem></AccountItem>
            <AccountItem></AccountItem>
            <AccountItem></AccountItem>
          </PopperWrapper>
        </div>
      )}
      onClickOutside={handleHideResult}
    >
      <div className={clsx(styles.search)}>
        <input
          type="text"
          ref={inputRef}
          placeholder="Search accounts and videos"
          spellCheck={false}
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          onFocus={() => setShowResult(true)}
        />
        {!!searchValue && (
          <button className={clsx(styles.clear)} onClick={handleClear}>
            <FontAwesomeIcon icon={faXmarkCircle}></FontAwesomeIcon>
          </button>
        )}
        {/* <FontAwesomeIcon className={clsx(styles.loading)} icon={faSpinner} /> */}
        <button className={clsx(styles['search-btn'])}>
          <SearchIcon />
        </button>
      </div>
    </HeadlessTippy>
  );
}

export default Search;
