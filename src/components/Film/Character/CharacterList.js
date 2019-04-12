import React from 'react';
import PropTypes from 'prop-types';
import FetchData from '../FetchData';
import CardGrid from '../shared/CardGrid';
import CardHr from '../shared/CardHr';
import Card from '../shared/Card';

const CharacterList = ({ film }) => {
  return (
    <div>
      <h2>Characters</h2>
      <CardGrid>
        {film.characters.map((character, i) => (
          <FetchData key={i} url={character}>
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

export default CharacterList;

CharacterList.propTypes = {
  film: PropTypes.shape({
    characters: PropTypes.array.isRequired,
  }).isRequired,
};
