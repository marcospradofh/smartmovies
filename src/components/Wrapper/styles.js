import styled from 'styled-components';

export const Container = styled.section`
  background: url(${(props) => props.backgroungURL});
  background-color: ${(props) => props.backgroungURL && 'rgba(0, 0, 0, .65)'};
  background-position: center top;
  background-blend-mode: darken;
  background-size: cover ;
  background-repeat: no-repeat;
  height: ${(props) => props.heightSize}vh;


  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 0 auto;
  padding: .5rem 1rem;
  text-align: center;
  justify-content: center;

  h1 {
    color: ${(props) => (props.colorWhite && '#FFF')};
    font-size: 56px;
    margin: .5rem 0;

    @media(max-width: 500px) {
      font-size: 40px;
    }
  }

  h2 {
    color: ${(props) => (props.colorWhite && '#FFF')};
    font-size: 32px;
    margin: .5rem 0;
  }

  a {
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
    :hover,
    :focus {
      outline: none;
      box-shadow: 0 0 0 3px #368C99;
    }
  }
`;

export default Container;
