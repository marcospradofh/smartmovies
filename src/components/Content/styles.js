import styled from 'styled-components';

export const Container = styled.section`
  margin: 0 auto;
  width: 100%;
  max-width: 60rem;
  padding: .5rem 1rem;
`;

Container.Wrapper = styled.div`
  display: flex;

  div {
    flex: 1;
    margin: 0.5rem 0;
    text-align: center;

    li {
      display: flex;
      flex-direction: column;
      align-items: center;

      margin: 0.5rem 1rem;
      padding: 0.5rem 0;
      border-radius: 8px;
      background-color: #49BBCC;
      box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.1);    }

      font-weight: bold;
      font-size: 16px;
      cursor: pointer;
  }
`;

Container.Content = styled.div``;

Container.Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;

  @media(max-width: 640px) {
  grid-template-columns: repeat(2, 1fr);
  }

  @media(max-width: 432px) {
  grid-template-columns: 1fr;
  }
`;

export default Container;
