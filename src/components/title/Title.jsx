import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { TitleHeader } from './style';

class Title extends React.Component {
  render() {
    const { text } = this.props;

    return (
      <TitleHeader>
        <NavLink to="/">
          { text }
        </NavLink>
      </TitleHeader>
    );
  }
}

Title.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Title;
