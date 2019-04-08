import React from 'react';
import PropTypes from 'prop-types';
import FetchData from '../FetchData';
import CardGrid from '../shared/CardGrid';
import CardHr from '../shared/CardHr';
import CardStyled from '../shared/CardStyled';

const PlanetList = ({ film }) => {
  return (
    <div>
      <h2>Planets</h2>
      <CardGrid>
        {film.planets.map((planet, i) => (
          <FetchData key={i} url={planet}>
            {({ loading, data }) =>
              loading ? (
                <CardStyled>
                  <p>Loading character...</p>
                </CardStyled>
              ) : (
                <CardStyled>
                  <p>{data.name}</p>
                  <CardHr />
                </CardStyled>
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
