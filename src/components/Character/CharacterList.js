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
      <h1>Characters</h1>
      <CharacterGrid>
        {film.characters.map((character, i) => (
          <FetchCharacter key={i} url={character}>
            {({ loading, data }) =>
              loading ? (
                <CardStyles>
                  <p>Loading character...</p>
                </CardStyles>
              ) : (
                <CardStyles>
                  {data.name}
                  <CardHr />
                </CardStyles>
              )
            }
          </FetchCharacter>
        ))}
      </CharacterGrid>
    </div>
  );
};

export default CharacterList;

CharacterList.propTypes = {
  film: PropTypes.shape({
    characters: PropTypes.array.isRequired,
  }).isRequired,
};

const CardStyles = styled.div`
  text-align: center;
  margin: 1rem;
  padding: 1rem;
  background: #bdbdbd;
  border-radius: 25px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  :hover {
        -webkit-transform: scale(1.1);
        -ms-transform: scale(1.1);
        transform: scale(1.1);
        transition: 0.5s;
      }
  }
  h1 {
    font-weight: 400;
    font-size: 2rem;
  }
  p {
    font-weight: 700;
    font-size: 1.3rem;
  }
`;

const CardHr = styled.hr`
  color: ${props => props.theme.secondary};
  border-width: 2px;
  width: 8%;
`;

const CharacterGrid = styled.div`
  display: grid;
  padding: 1rem;
  grid-template-columns: repeat(3, 1fr);
  grid-row-gap: 1rem;
`;
