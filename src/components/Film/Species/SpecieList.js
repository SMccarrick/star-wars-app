import React from 'react';
import PropTypes from 'prop-types';
import FetchData from '../FetchData';
import CardGrid from '../shared/CardGrid';
import CardHr from '../shared/CardHr';
import Card from '../shared/Card';

const SpecieList = ({ film }) => {
  return (
    <div>
      <h2>Species</h2>
      <CardGrid>
        {film.species.map((specie, i) => (
          <FetchData key={i} url={specie}>
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

export default SpecieList;

SpecieList.propTypes = {
  film: PropTypes.shape({
    species: PropTypes.array.isRequired,
  }).isRequired,
};
