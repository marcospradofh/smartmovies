import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
    from { opacity: 0; }
    to   { opacity: 1; }
`;

export const Information = styled.div`
  animation: ${fadeIn} 1s;

  display: grid;
  grid-template-columns: 1fr auto;
  background: #FFF;
  padding: 12px 24px;
  margin: 16px 16px;

  border-radius: 8px;
  border: 1px solid rgba(0, 0, 0, .1);
  box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.5);

  ul{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    padding-right: 24px;

    .voteAverage {
      display: flex;
      align-items: center;
      justify-content: space-between;

        small {
        background: #C52233;
        border-radius: 4px;
        font-size: 18px;
        padding: 2px 12px;
        color: #FFF;
      }
    }

    @media(max-width: 500px) {
    padding-right: 0;
    }
  }

  li {
    list-style: none;
    font-size: 16px;
    font-weight: bold;
    line-height: 26px;

    & + li {
    margin-bottom: 4px 0;
    }

    p {
      font-weight: normal;
      text-align: justify;
      font-size: 14px;
      font-weight: 24px;
    }

    span:first-child {
      font-weight: normal;
    }
  }
  img {
    max-height: 304px;

    @media(max-width: 500px) {
      display: none;
    }
  }
`;
export const Cast = styled.div`
  margin: 16px 16px 32px;
  h3 {
    font-size: 24px;
    line-height: 34px;
    font-weight: 900;
  }

  div {
    border-radius: 8px;
    border: 1px solid rgba(0, 0, 0, .1);
    box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;

    padding: 12px 24px;
    margin: 16px auto;

    li{
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 0 auto;

      p {
        margin: 8px 0;
        font-weight: bold;
      }

      img {
        border-radius: 8px;
      }
    }
  }
`;
