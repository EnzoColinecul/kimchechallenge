import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card/Card';

import './group.css';

function Group({
  groupBy,
  cardData,
}) {
  return (
    <>
      <div className="group__title">
        {/* Continent or Language */}
        <h2>
          {groupBy}
        </h2>
      </div>
      <div className="group__cards scrollbar">
        {cardData.map(({
          capital, name, currency, emoji,
        }) => (
          <Card capital={capital} country={name} currency={currency} emoji={emoji} />
        ))}
      </div>
    </>
  );
}

Group.propTypes = {
  groupBy: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  cardData: PropTypes.object,

};

Group.defaultProps = {
  groupBy: null,
  cardData: null,
};
export default Group;
