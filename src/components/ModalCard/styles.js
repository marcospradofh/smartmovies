import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
    from { opacity: 0; }
    to   { opacity: 1; }
`;

export const Modal = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, .4);
  top: 0;
  left: 0;
  z-index: 1000;
  padding: 2rem 4rem;
  overflow: scroll;

  animation: ${fadeIn} 1s;
`;

Modal.Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  background: #EEEEEE;
  border-radius: 8px;

  padding: 1rem;
`;
Modal.Header = styled.header`
  background:  rgba(0, 0, 0, .65)  url(${(props) => props.imageURL});
  background-position: center top;
  background-blend-mode: darken;
  background-size: cover ;
  background-repeat: no-repeat;
  height: 50vh;
  padding: 16px;

  display: flex;
  align-items: center;
  justify-content: center;

  h3 {
    color: #EEEEEE;
    text-align: center;
    font-size: 48px;
    font-weight: 900;
  }
`;
Modal.Content = styled.div`
  div:first-child {
    font-size: 20px;
    margin: 16px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    span {
      background: #C52233;
      color: #FFF;
      font-weight: bold;
      font-size: 16px;
      padding: 4px 8px;
      border-radius: 4px;
    }
  }

  div:last-child {
    text-align: justify;
  }
`;
Modal.Footer = styled.div`
  margin-top: 8px;
  flex: 1;

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
      box-shadow: 0 0 0 3px #368C99, 0 0 0 4px #FFF;
    }
  }
`;

export default Modal;
