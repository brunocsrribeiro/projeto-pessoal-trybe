import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import Container from './style-link';

class LinkCard extends React.Component {
  render() {
    const { headline, text } = this.props;
    return (
      <Container>
        <NavLink to={ headline }>
          { text }
        </NavLink>
      </Container>
    );
  }
}

LinkCard.propTypes = {
  headline: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
export default LinkCard;
