import React from 'react';
import missions from '../../data/missions';
import MissionCard from '../../components/card/mission--card/MissionCard';
import Back from '../../components/back/Back';
import { Container, ContainerCard } from './style';
import Title from '../../components/title/Title';
import Footer from '../../components/footer/Footer';

class Missions extends React.Component {
  render() {
    return (
      <Container data-testid="missions">
        <Title text="Missões" />
        <ContainerCard>
          {missions.map((mission) => (
            <div key={ mission.name }>
              <MissionCard
                name={ mission.name }
                year={ mission.year }
                country={ mission.country }
                destination={ mission.destination }
              />
            </div>
          ))}
        </ContainerCard>
        <Back text="Início" />
        <Footer />
      </Container>
    );
  }
}

export default Missions;
