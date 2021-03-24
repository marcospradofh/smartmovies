import styled from 'styled-components';

export const Container = styled.section`
  margin: 0 auto;
  width: 100%;
  max-width: 60rem;
  padding: .5rem 1rem;
`;

export const Tabs = styled.div`
  position: relative;
  height: 360px;
  max-width: 98%;
  margin: 0 auto;

  p {
    margin: 0;
    padding: 0;
  }

  &::after {
    content: '.';
    display: block;
    clear: both;
    height: 0;
    font-size: 0;
    line-height: 0;
    visibility: none;
  }
`;

Tabs.Header {
  input {
    display: none;
  }

}

Tabs.Content = styled.div`

  input + label + div {
    width: 98%;
    opacity: 0;
    position: absolute;
    background: #eee;
    top: 40px;
    left: 0;
    height: 300px;
    padding: 10px;
    z-index: -1;
    transition: opacity ease-in-out .3s;
  }

  input:checked + label + div {
    opacity: 1;
    z-index: 1000;
  }

  input + label {
    line-height: 40px;
    padding: 0 20px;
    float: left;
    background: #444;
    color: #fff;
    cursor: pointer;
    transition: background ease-in-out .3s;
  }

  input:checked + label {
      color: #000;
      background: #eee;
  }
`;
