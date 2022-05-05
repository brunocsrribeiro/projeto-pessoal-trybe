import React from 'react';
import LinkCard from '../../components/card/link--card/LinkCard';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import { Container, ContainerLink } from './style';

class Home extends React.Component {
  render() {
    return (
      <Container>
        <Header />
        <ContainerLink>
          <LinkCard headline="Planets" text="Planetas" />
          <LinkCard headline="Missions" text="Missões" />
        </ContainerLink>
        <Footer />
      </Container>
    );
  }
}

export default Home;
