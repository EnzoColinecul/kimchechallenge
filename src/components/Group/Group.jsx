import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card/Card';

import './group.css';

function Group({
  continent,
}) {
  return (
    <>
      <div className="group__title">
        {/* Continent or Language */}
        <h2>
          {continent}
        </h2>
      </div>
      <div className="group__cards scrollbar">
        <Card capital="Buenos Aires" country="argentina" currency="algo" emoji="emoji" language="Espanol" />
        <Card capital="Buenos Aires" country="argentina" currency="algo" emoji="emoji" language="Espanol" />

        <Card capital="Buenos Aires" country="argentina" currency="algo" emoji="emoji" language="Espanol" />
        <Card capital="Buenos Aires" country="argentina" currency="algo" emoji="emoji" language="Espanol" />
        <Card capital="Buenos Aires" country="argentina" currency="algo" emoji="emoji" language="Espanol" />
        <Card capital="Buenos Aires" country="argentina" currency="algo" emoji="emoji" language="Espanol" />
        <Card capital="Buenos Aires" country="argentina" currency="algo" emoji="emoji" language="Espanol" />

      </div>
    </>
  );
}

Group.propTypes = {
  continent: PropTypes.string,
};

Group.defaultProps = {
  continent: null,
};
export default Group;
