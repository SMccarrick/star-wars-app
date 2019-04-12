import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import CardHr from './shared/CardHr';
import Card from './shared/Card';

const Film = ({ film }) => {
  const { id, title } = film;
  return (
    <StyledLink to={`/${id}`}>
      <Card>
        <h1>{title}</h1>
        <CardHr />
      </Card>
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
