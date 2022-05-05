import React from 'react';
import { Container, TitleHeader } from './style';

class Header extends React.Component {
  render() {
    return (
      <Container>
        <TitleHeader>
          <h1>Sistema Solar</h1>
        </TitleHeader>
      </Container>
    );
  }
}

export default Header;
