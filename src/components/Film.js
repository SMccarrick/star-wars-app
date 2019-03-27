import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Film = ({ film }) => {
  return (
    <Link to={`/${film.id}`}>
      <CardStyles>
        <SecondHeading>{film.title}</SecondHeading>
      </CardStyles>
    </Link>
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
    title: PropTypes.string.isRequired
  }).isRequired
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
`;

const SecondHeading = styled.h2`
  font-size: 2rem;
`;
