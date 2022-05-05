import Styled from 'styled-components';

export const Container = Styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;

  @media (max-width: 800px) {
    position: relative;
    margin: 0 auto;
    padding: 1rem;
  }
`;

export const ContainerLink = Styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 100%;

  @media (max-width: 800px) {
    position: relative;
    letter-spacing: .1rem;
    font-size: .4rem;
    text-align: center;
    margin: 0 auto;
    margin-top: 50%;
  }
`;
