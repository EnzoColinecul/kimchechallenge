import React, { useState } from 'react';
import Group from '../Group/Group';
import { groupByContinent, groupByLanguages } from '../../helpers/groupBy';
import useData from '../../hooks/useData';
import SearchIcon from '../../assets/icons/search.svg';

import './main.css';

function Main() {
  const { data, loading } = useData();
  const [active, setActive] = useState('continent');
  let result = [];

  if (!loading) {
    if (active === 'continent') {
      result = groupByContinent(data.countries, 'name');
    } else {
      result = groupByLanguages(data.countries, 'name');
    }
  }

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
        {loading && (
          <h2> Cargando..</h2>
        )}
        {result !== [] && Object.keys(result).map((option) => (
          <Group
            key={option}
            groupBy={option}
            cardData={result[option]}
          />
        ))}
      </div>
    </div>
  );
}

export default Main;
