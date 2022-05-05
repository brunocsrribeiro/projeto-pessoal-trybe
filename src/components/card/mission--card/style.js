import Styled from 'styled-components';

const Container = Styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 450px;
  height: 300px;
  box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.8) inset;
  background-color: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(1px);
  border-radius: 4px;
  padding: 1rem;

  .title-card {
    color: #ff0;
    letter-spacing: 0.4rem;
    text-align: center;

    @media (max-width: 800px) {
      position: relative;
      letter-spacing: .1rem;
      font-size: 1.4rem;
    }
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

    @media (max-width: 800px) {
      position: relative;
      letter-spacing: .1rem;
      font-size: 1rem;
    }
  }
  
  @media (max-width: 800px) {
    position: relative;
    letter-spacing: .1rem;
    font-size: .8rem;
    padding: .5rem;
    max-width: 60%;
    height: 100%;
    margin: 0 auto;
  }
`;

export default Container;
