import React from 'react';
import PropTypes from 'prop-types';
import FetchData from '../FetchData';
import CardGrid from '../shared/CardGrid';
import CardHr from '../shared/CardHr';
import CardStyled from '../shared/CardStyled';

const VehicleList = ({ film }) => {
  return (
    <div>
      <h2>Vehicles</h2>
      <CardGrid>
        {film.vehicles.map((vehicle, i) => (
          <FetchData key={i} url={vehicle}>
            {({ loading, data }) =>
              loading ? (
                <CardStyled>
                  <p>Loading character...</p>
                </CardStyled>
              ) : (
                <CardStyled>
                  <p>{data.name}</p>
                  <CardHr />
                </CardStyled>
              )
            }
          </FetchData>
        ))}
      </CardGrid>
    </div>
  );
};

export default VehicleList;

VehicleList.propTypes = {
  film: PropTypes.shape({
    vehicles: PropTypes.array.isRequired,
  }).isRequired,
};
