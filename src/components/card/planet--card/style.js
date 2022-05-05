import Styled from 'styled-components';

const Container = Styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;
  width: 340px;
  height: 500px;
  color: #ff0;
  border-radius: 4px;
  letter-spacing: .3rem;
  font-size: 1.6rem;
  text-shadow: 2px 2px 8px #e88eee;

  .image-planet {
    width: 90%;

    &:hover {
      width: 100%;
    }
  }
`;

export default Container;
