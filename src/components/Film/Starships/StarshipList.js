import React from 'react';
import PropTypes from 'prop-types';
import FetchData from '../FetchData';
import CardGrid from '../shared/CardGrid';
import CardHr from '../shared/CardHr';
import CardStyled from '../shared/CardStyled';

const StarshipList = ({ film }) => {
  return (
    <div>
      <h2>Starships</h2>
      <CardGrid>
        {film.starships.map((starship, i) => (
          <FetchData key={i} url={starship}>
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

export default StarshipList;

StarshipList.propTypes = {
  film: PropTypes.shape({
    starships: PropTypes.array.isRequired,
  }).isRequired,
};
