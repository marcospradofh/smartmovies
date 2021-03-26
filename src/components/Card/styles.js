import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

const animeLeft = keyframes`
  to {
      opacity: 1;
      transform: initial;
    }
`;

export const Container = styled.div`
  display: inline-block;
  break-inside: avoid-column;
  margin-top: 2px;
  margin-bottom: 16px;
  width: 100%;
  padding: 8px;
  border-radius: 8px;
  background: #FFF;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  opacity: 0;
  transform: translateX(-20px);
  animation: ${animeLeft} 1s forwards;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background: ${shade(0.1, '#E1F2FA')}
  }
`;

export const CardHeader = styled.header`
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  margin-top: 4px;
  margin-bottom: 8px;

  hr {
    margin-top: 8px;
    border: 0;
    border-top: 1px solid #E0E0E0;
    box-shadow: 0px 0px 12px 0px rgba(0,0,0,0.32);
  }
`;

export const CardImage = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 16px;
  img {
    background-size: contain ;
    background-repeat: no-repeat;
    background-position: center center;
    display: block;
    height: 100%;
  }

`;
