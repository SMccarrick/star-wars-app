import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import CardHr from '../shared/CardHr';
import CardStyled from '../shared/CardStyled';

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
