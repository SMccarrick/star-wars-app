import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Film = ({ film }) => {
  return (
    <StyledLink to={`/${id}`}>
      <CardStyles>
        <h1>{title}</h1>
        <hr />
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
  hr {
    color: ${props => props.theme.secondary};
  }
  h2 {
    font-size: 2rem;
  }
  p {
    font-size: 1.3rem;
  }
`;
