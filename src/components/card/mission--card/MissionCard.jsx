import React from 'react';
import PropTypes from 'prop-types';
import Container from './style';

class MissionCard extends React.Component {
  render() {
    const { name, year, country, destination } = this.props;

    return (
      <Container data-testid="mission-card">
        <h1 className="title-card" data-testid="mission-name">{ name }</h1>
        <div className="TextContainer">
          <p data-testid="mission-year">{ year }</p>
          <p data-testid="mission-country">{ country }</p>
          <p data-testid="mission-destination">{ destination }</p>
        </div>
      </Container>
    );
  }
}

MissionCard.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
};

export default MissionCard;
