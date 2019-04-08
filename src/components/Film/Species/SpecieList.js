import React from 'react';
import PropTypes from 'prop-types';
import FetchData from '../FetchData';
import CardGrid from '../shared/CardGrid';
import CardHr from '../shared/CardHr';
import CardStyled from '../shared/CardStyled';

const SpecieList = ({ film }) => {
  return (
    <div>
      <h2>Species</h2>
      <CardGrid>
        {film.species.map((specie, i) => (
          <FetchData key={i} url={specie}>
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

export default SpecieList;

SpecieList.propTypes = {
  film: PropTypes.shape({
    species: PropTypes.array.isRequired,
  }).isRequired,
};
