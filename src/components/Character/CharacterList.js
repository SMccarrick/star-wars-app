import React from 'react';
import PropTypes from 'prop-types';
import FetchCharacter from './FetchCharacter';
import CardGrid from '../shared/CardGrid';
import CardHr from '../shared/CardHr';
import CardStyled from '../shared/CardStyled';

/*
    TODO:
    - Break down into smaller components (Cards)
    - Add prop types
*/

const CharacterList = ({ film }) => {
  return (
    <div>
      <CardGrid>
        {film.characters.map((character, i) => (
          <FetchCharacter key={i} url={character}>
            {({ loading, data }) =>
              loading ? (
                <CardStyled>
                  <p>Loading character...</p>
                </CardStyled>
              ) : (
                <CardStyled>
                  <p>{data.name}</p>
                  <CardHr />
                  <p>Character</p>
                </CardStyled>
              )
            }
          </FetchCharacter>
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
