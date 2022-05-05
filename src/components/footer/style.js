import Styled from 'styled-components';

export const Container = Styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  font-size: 1.1rem;
  color: #fff;
  letter-spacing: .2rem;
  width: 100%;
  text-shadow: 2px 2px 8px #e88eee;

  @media (max-width: 800px) {
    position: relative;
    letter-spacing: .1rem;
    font-size: .4rem;
    text-align: center;
  }
`;
