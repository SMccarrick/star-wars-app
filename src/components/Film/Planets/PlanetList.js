import React from 'react';
import PropTypes from 'prop-types';
import FetchData from '../FetchData';
import CardGrid from '../shared/CardGrid';
import CardHr from '../shared/CardHr';
import Card from '../shared/Card';

const PlanetList = ({ film }) => {
  return (
    <div>
      <h2>Planets</h2>
      <CardGrid>
        {film.planets.map((planet, i) => (
          <FetchData key={i} url={planet}>
            {({ loading, data }) =>
              loading ? (
                <Card>
                  <p>Loading character...</p>
                </Card>
              ) : (
                <Card>
                  <p>{data.name}</p>
                  <CardHr />
                </Card>
              )
            }
          </FetchData>
        ))}
      </CardGrid>
    </div>
  );
};

export default PlanetList;

PlanetList.propTypes = {
  film: PropTypes.shape({
    planets: PropTypes.array.isRequired,
  }).isRequired,
};
