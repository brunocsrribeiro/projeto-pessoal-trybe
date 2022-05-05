import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import Container from './style';

class Back extends React.Component {
  render() {
    const { text } = this.props;

    return (
      <Container>
        <NavLink to="/">{ text }</NavLink>
      </Container>
    );
  }
}

Back.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Back;
