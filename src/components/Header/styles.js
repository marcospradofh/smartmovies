import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  background: #49BBCC;

  div {
    display: grid;
    grid-template-columns: auto 1fr;

    width: 100%;
    max-width: 60rem;
    padding: .5rem 1rem;
  }
`;

export const Logo = styled.div`
  h1 {
    font-weight: 900;
    font-size: 40px;
    span {
      font-weight: 700;
    }
  }
`;

export const SearchBox = styled.div`
  display: flex;
  align-items: center;
`;
