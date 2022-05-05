import Styled from 'styled-components';

const Container = Styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #454545;
  font-size: 2rem;
  letter-spacing: .4rem;
  margin-top: 1rem;
  
  a {
    text-decoration: none;
    color: #fff;
    
    &:hover {
      color: #ff0;
    }

    @media (max-width: 800px) {
    position: relative;
    letter-spacing: .2rem;
    font-size: 1rem;
  }
  }
`;

export default Container;
