import React from 'react';
import PropTypes from 'prop-types';
import FetchData from '../FetchData';
import CardGrid from '../shared/CardGrid';
import CardHr from '../shared/CardHr';
import Card from '../shared/Card';

const StarshipList = ({ film }) => {
  return (
    <div>
      <h2>Starships</h2>
      <CardGrid>
        {film.starships.map((starship, i) => (
          <FetchData key={i} url={starship}>
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

export default StarshipList;

StarshipList.propTypes = {
  film: PropTypes.shape({
    starships: PropTypes.array.isRequired,
  }).isRequired,
};
