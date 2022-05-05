import React from 'react';
import planets from '../../data/planets';
import PlanetCard from '../../components/card/planet--card/PlanetCard';
import { Container, ContainerCard } from './style';
import Back from '../../components/back/Back';
import Title from '../../components/title/Title';
import Footer from '../../components/footer/Footer';

class SolarSystem extends React.Component {
  render() {
    return (
      <Container>
        <Title text="Planetas" />
        <ContainerCard data-testid="solar-system">
          {
            planets.map(({ name, image }) => (
              <div key={ name }>
                <PlanetCard planetName={ name } planetImage={ image } />
              </div>
            ))
          }
        </ContainerCard>
        <Back text="Início" />
        <Footer />
      </Container>
    );
  }
}

export default SolarSystem;
