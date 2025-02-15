import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import '../styles/components/SearchBox.css';

const SearchBox = () => {
  const [keyword, setKeyword] = useState('');

  let history = useHistory();

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword) {
      history.push(`/search?q=${keyword}`);
    } else {
      history.push(history.push(history.location.pathname));
    }
  };

  return (
    <form onKeyUp={submitHandler} onSubmit={submitHandler} className="form" id="search-form">
      <i className="fas fa-search" id="search-icon"></i>
      <input
        id="search-input"
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="Search Mumble"
      />
    </form>
  );
};

export default SearchBox;
