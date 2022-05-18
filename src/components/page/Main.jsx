import React, { useEffect, useState } from 'react';
import Group from '../Group/Group';
import { groupByContinent, groupByLanguage } from '../../helpers/groupBy';
import useData from '../../hooks/useData';
import SearchIcon from '../../assets/icons/search.svg';

import './main.css';

function Main() {
  const { data, loading } = useData();
  const [active, setActive] = useState('continent');
  const [search, setSearch] = useState('');
  const [filterResult, setFilterResult] = useState([]);
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    if (filterResult.length > 0) {
      if (active === 'continent') { setSearchResult(groupByContinent(filterResult, 'name')); } else {
        setSearchResult(groupByLanguage(filterResult, 'name'));
      }
    }

    if (search === '' && !loading && active === 'continent') {
      setSearchResult(groupByContinent(data?.countries, 'name'));
    }

    if (search === '' && !loading && active === 'language') {
      setSearchResult(groupByLanguage(data?.countries, 'name'));
    }
  }, [data, active, loading, filterResult]);

  useEffect(() => {
    if (!loading) {
      setFilterResult(data?.countries
        .filter((res) => res.name.toLowerCase().startsWith(search.toLowerCase())));
    }
  }, [search]);

  return (
    <div className="container main__container">
      <div className="main__header">
        <h1>Country Search</h1>
        <h3>Try typing something in the field below</h3>
        <div className="main__input">
          <img src={SearchIcon} alt="search-icon" />
          <input value={search} onChange={(e) => setSearch(e.target.value)} type="text" />
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
          <h2> Cargando...</h2>
        )}
        { Object.keys(searchResult).map((option) => (
          <Group
            key={option}
            groupBy={option}
            cardData={searchResult[option]}
          />
        ))}
      </div>
    </div>
  );
}

export default Main;
