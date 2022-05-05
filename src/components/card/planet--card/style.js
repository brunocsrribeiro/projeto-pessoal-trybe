import Styled from 'styled-components';

const Container = Styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 340px;
  height: 500px;
  box-shadow: 2px 5px 12px rgba(0, 0, 0, 0.8);
  background-color: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(1px);
  color: #000;
  border-radius: 4px;
  letter-spacing: .3rem;
  font-size: 1.3rem;

  .image-planet {
    width: 90%;

    &:hover {
      width: 100%;
    }
  }
`;

export default Container;
