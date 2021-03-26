import styled, { css } from 'styled-components';
import { shade } from 'polished';

export const Container = styled.section`
  margin: 0 auto 32px;
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

    ${(props) => (props.active === 'filmes' ? css`
      .movies {
      box-shadow: 0 0 0 2px #22212C, 0 0 0 4px #FFF;
      }
    ` : css`
      .series {
      box-shadow: 0 0 0 2px #22212C, 0 0 0 4px #FFF;
      }
    `)}

    li {
      display: flex;
      flex-direction: column;
      align-items: center;

      margin: 0.5rem 1rem;
      padding: 0.5rem 0;
      border-radius: 8px;
      background-color: #49BBCC;
      box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.25);

      font-weight: bold;
      font-size: 16px;
      cursor: pointer;
      transition: 0.5s;


      :hover,
      :focus {
        background: ${shade(0.2, '#49BBCC')}
      }
  }
`;

Container.Content = styled.div`
  column-count: 3;
  column-gap: 16px;
  margin-top: -2px;
  margin-bottom: -14px;

@media(max-width: 640px) {
column-count: 2;
}

@media(max-width: 432px) {
column-count: 1;
}
`;

Container.Navigation = styled.div`
  margin-bottom: 1rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

    p {
      font-size: 16px;
      font-weight: 900;
      text-align: center;
    }

    div {
      display: flex;

      button {
      display:flex;
      flex-direction: column;
      align-items: center;

      font-size: 1rem;
      cursor: pointer;
      border: none;
      border-radius: 0.4rem;
      background: #22212C;
      color: #FFF;
      padding: 0.4rem .8rem;
      box-sizing: border-box;
      transition: 0.1s;

      & + button {
        margin-left: 4px;
      }

      :hover,
      :focus {
        box-shadow: 0 0 0 3px #368C99, 0 0 0 4px #FFF;
      }

      :disabled {
        background: #E4E4E4;
        color: #A8A8A8;
        box-shadow: none;
      }
    }
  }


`;

export default Container;
