import { useEffect, useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmarkCircle, faSpinner } from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';

import styles from './Search.module.scss';
import clsx from 'clsx';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import { SearchIcon } from '~/components/Icons';
import { useDebounce } from '~/hooks';

function Search() {
  const [searchValue, setSearchValue] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [showResult, setShowResult] = useState(true);
  const [loading, setLoading] = useState(false);

  const inputRef = useRef();
  const debounced = useDebounce(searchValue, 800);
  useEffect(() => {
    if (!debounced.trim()) {
      setSearchResult([]);
      return;
    }
    setLoading(true);
    fetch(
      `https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(
        debounced,
      )}&type=less`,
    )
      .then((res) => res.json())
      .then((res) => {
        setSearchResult(res.data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, [debounced]);
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
            {searchResult.map((result) => (
              <AccountItem key={result.id} data={result}></AccountItem>
            ))}
          </PopperWrapper>
        </div>
      )}
      hideOnClick
      trigger="click"
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
        {!!searchValue && !loading && (
          <button className={clsx(styles.clear)} onClick={handleClear}>
            <FontAwesomeIcon icon={faXmarkCircle}></FontAwesomeIcon>
          </button>
        )}
        {loading && (
          <FontAwesomeIcon className={clsx(styles.loading)} icon={faSpinner} />
        )}
        <button className={clsx(styles['search-btn'])}>
          <SearchIcon />
        </button>
      </div>
    </HeadlessTippy>
  );
}

export default Search;
