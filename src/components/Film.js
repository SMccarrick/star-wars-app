import React from "react";
import PropTypes from "prop-types";
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

