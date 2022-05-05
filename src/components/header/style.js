import Styled from 'styled-components';

export const Container = Styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  width: 100%;

  @media (max-width: 800px) {
    flex-direction: column;
    position: relative;
    padding: 1rem;
    text-align: center;
  }
`;

export const TitleHeader = Styled.header`
  color: #ff0;
  font-size: 3rem;
  letter-spacing: .8rem;
  text-shadow: 2px 2px 8px #e88eee;

  @media (max-width: 800px) {
    position: relative;
    letter-spacing: .4rem;
    font-size: 1.2rem;
    text-align: center;
  }
`;
