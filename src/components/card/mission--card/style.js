import Styled from 'styled-components';

const Container = Styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 450px;
  height: 300px;
  box-shadow: 2px 5px 12px rgba(0, 0, 0, 0.8);
  background-color: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(1px);
  color: #454545;
  border-radius: 4px;
  padding: 1rem;

  .title-card {
    color: #ff0;
    letter-spacing: 0.4rem;
    text-align: center;
  }

  .TextContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
    font-size: 1.8rem;
    color: #fff;
    line-height: 2rem;
  }
`;

export default Container;
