import styled from 'styled-components';

export const Container = styled.div`
  padding: 0.5rem;
  border-radius: 8px;
  background: #FFF;
  box-shadow: 0px 0px 8px 0px rgba(10,16,13,0.32);
  cursor: pointer;
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
    box-shadow: 0px 0px 12px 0px rgba(10,16,13,0.32);
  }
`;

export const CardImage = styled.div`
  background-size: contain ;
  background-repeat: no-repeat;
  background-position: center center;

  &::after {
    content: '';
    display: block;
    height: 0px;
    padding-bottom: 100%;
  }
`;

export const CardContent = styled.div`
  margin: 12px;
  font-size: 14px;
  line-height: 24px;
  text-align: justify;
`;
