import Styled from 'styled-components';

export const Container = Styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  margin: 2em;

  a {
    padding: 2rem;
    font-size: 3rem;
    color: #ff0;
    text-decoration: none;
  }
`;

export const ContainerCard = Styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: .8rem;
  width: 100%;
`;
