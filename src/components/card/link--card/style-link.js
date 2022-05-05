import Styled from 'styled-components';

const Container = Styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #454545;
  font-size: 4rem;
  letter-spacing: .8rem;
  
  a {
    text-decoration: none;
    color: #fff;
    
    &:hover {
      color: #ff0;
      border-top: 10px solid #ff0;
      border-bottom: 10px solid #ff0;
      border-radius: 9px;
    }
  }
`;

export default Container;
