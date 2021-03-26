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
`;

export default Container;
