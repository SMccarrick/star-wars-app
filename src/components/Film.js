import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Film = ({ title }) => {
  return (
    <CardStyles>
      <SecondHeading>{title}</SecondHeading>
    </CardStyles>
  );
};

export default Film;

Film.propTypes = {
  title: PropTypes.string.isRequired
};

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
