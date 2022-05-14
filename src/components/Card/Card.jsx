import React from 'react';
import PropTypes from 'prop-types';
import './card.css';

function Card({
  country, emoji, language, currency, capital,
}) {
  return (
    <div className="card">
      <div className="card__title">
        {emoji}
        <h2>
          {country}
        </h2>
      </div>
      <div className="card__content">
        <ul>
          <li>
            Capital:
            {' '}
            {capital}
          </li>
          <li>
            Currency:
            {' '}
            {currency}
          </li>
          <li>
            Language:
            {' '}
            {language}
          </li>
        </ul>
      </div>
    </div>
  );
}
Card.propTypes = {
  country: PropTypes.string,
  language: PropTypes.string,
  currency: PropTypes.string,
  emoji: PropTypes.string,
  capital: PropTypes.string,
};

Card.defaultProps = {
  country: null,
  language: null,
  currency: null,
  emoji: null,
  capital: null,
};

export default Card;
