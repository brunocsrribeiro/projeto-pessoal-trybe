import React from 'react';
import { Container } from './style';

class Footer extends React.Component {
  render() {
    return (
      <Container>
        <p>Projeto Solar System - Desenvolvido por Bruno Ribeiro | Curso de Desenvolvimento Web - Escola de Programação Trybe</p>
        <span>&copy; Todos os Direitos Reservados - Trybe</span>
      </Container>
    );
  }
}

export default Footer;