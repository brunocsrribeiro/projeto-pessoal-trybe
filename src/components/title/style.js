import Styled from 'styled-components';

export const TitleHeader = Styled.header`
  color: #ff0;
  letter-spacing: .8rem;
  text-shadow: 2px 2px 8px #e88eee;
  padding-bottom: 3rem;

  @media (max-width: 800px) {
    flex-direction: column;
    position: relative;
    padding-bottom: 1rem;
    letter-spacing: .4rem;
  }
`;
