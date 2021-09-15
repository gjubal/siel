import styled from 'styled-components';

export const Container = styled.div``;

export const Nav = styled.header`
  padding: 32px 0;
  background: #fff;
  border: 1px solid #dce2e6;
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 400px;

  button {
    border: none;
    color: #551a8b;
    background-color: transparent;
  }
`;

export const Main = styled.main`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
