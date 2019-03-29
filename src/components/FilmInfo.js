import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const FilmInfo = ({ film }) => {
  const { title, release_date, director, producer, episode_id } = film;
  return (
    <div>
      <Hero>
        <div>
          <h1>{title}</h1>
        </div>
      </Hero>
      <InfoWrapper>
        <h2>
          <b>Episode: </b>
          {episode_id}
        </h2>
        <h2>
          <b>Release Date: </b>
          {release_date}
        </h2>
        <h2>
          <b>Director: </b>
          {director}
        </h2>
        <h2>
          <b>Producers: </b>
          {producer}
        </h2>
      </InfoWrapper>
    </div>
  );
};

export default FilmInfo;

FilmInfo.propTypes = {
  film: PropTypes.shape({
    title: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    episode_id: PropTypes.number.isRequired,
    director: PropTypes.string.isRequired,
    producer: PropTypes.string.isRequired,
  }).isRequired,
};

