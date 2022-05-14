import React, { useState } from 'react';
import Group from '../Group/Group';
import SearchIcon from '../../assets/icons/search.svg';

import './main.css';

function Main() {
  const [active, setActive] = useState('continent');

  return (
    <div className="container main__container">
      <div className="main__header">
        <h1>Country Search</h1>
        <h3>Try typing something in the field below</h3>
        <div className="main__input">
          <img src={SearchIcon} alt="search-icon" />
          <input type="text" />
        </div>
        <div className="main__options">
          <h3>Group by:</h3>
          <button
            id="continent"
            type="button"
            className={active === 'continent' ? 'active' : ''}
            onClick={() => setActive('continent')}
          >
            Continent
          </button>
          <button
            id="language"
            type="button"
            className={active === 'language' ? 'active' : ''}
            onClick={() => setActive('language')}
          >
            Language
          </button>
        </div>
      </div>
      <div className="main__groups">
        <Group continent="Sur America" />
        <Group continent="Asia" />
      </div>
    </div>
  );
}

export default Main;
