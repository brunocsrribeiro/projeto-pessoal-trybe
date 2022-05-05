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
  }
`;

export default Container;
