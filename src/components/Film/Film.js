import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Film = ({ film }) => {
  const { id, title, episode_id } = film;
  return (
    <StyledLink to={`/${id}`}>
      <CardStyles>
        <h1>{title}</h1>
        <CardHr />
        <p>Episode {episode_id}</p>
      </CardStyles>
    </StyledLink>
  );
};

export default Film;

/*
  PropTypes

  - Set property type of film to be an object
  - Set property type of title to be a string

*/
Film.propTypes = {
  film: PropTypes.shape({
    title: PropTypes.string.isRequired,
    episode_id: PropTypes.number.isRequired,
  }).isRequired,
};

const StyledLink = styled(Link)`
  text-decoration: none;

  &:visited {
    color: ${props => props.theme.primary};
  }
`;

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
