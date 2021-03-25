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

Container.Content = styled.div`
  column-count: 3;

@media(max-width: 640px) {
column-count: 2;
}

@media(max-width: 432px) {
column-count: 1;
}
`;

Container.Cards = styled.div`

`;

export default Container;
