import styled from 'styled-components';

export const Modal = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, .4);
  top: 0;
  left: 0;
  z-index: 1000;
  padding: 2rem 4rem;
`;

Modal.Container = styled.div`
  background: #FFF;
`;
Modal.Header = styled.header`
  background: url(${(props) => props.imageURL});
  background-size: cover ;
  background-repeat: no-repeat;
  background-position: center center;
  height: 30vh;
  padding: 16px;

  display: flex;
  align-items: center;
  justify-content: center;

  /* &::after {
    content: '';
    display: block;
    height: 0px;
    padding-bottom: 100%;
  } */
    color: #FFF;
    font-size: 32px;
    font-weight: 900;
  h3 {

  }
`;
Modal.Content = styled.div``;

export default Modal;
