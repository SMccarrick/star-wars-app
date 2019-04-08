import React from 'react';
import PropTypes from 'prop-types';
import FetchData from '../FetchData';
import CardGrid from '../shared/CardGrid';
import CardHr from '../shared/CardHr';
import CardStyled from '../shared/CardStyled';

const CharacterList = ({ film }) => {
  return (
    <div>
      <h2>Characters</h2>
      <CardGrid>
        {film.characters.map((character, i) => (
          <FetchData key={i} url={character}>
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

export default CharacterList;

CharacterList.propTypes = {
  film: PropTypes.shape({
    characters: PropTypes.array.isRequired,
  }).isRequired,
};
