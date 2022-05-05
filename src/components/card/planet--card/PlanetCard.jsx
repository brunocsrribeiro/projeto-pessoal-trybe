import React from 'react';
import PropTypes from 'prop-types';
import Container from './style';

class PlanetCard extends React.Component {
  render() {
    const { planetName, planetImage } = this.props;

    return (
      <Container data-testid="planet-card">
        <h2 data-testid="planet-name">{ planetName }</h2>
        <img
          className="image-planet"
          src={ planetImage }
          alt={ `Planeta ${planetName}` }
        />
      </Container>
    );
  }
}

PlanetCard.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired,
};

export default PlanetCard;
