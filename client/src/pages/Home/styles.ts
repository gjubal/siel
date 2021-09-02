import styled from 'styled-components';

export const Container = styled.div``;

export const Nav = styled.header`
  padding: 32px 0;
  background: #fff;
  border: 1px solid #dce2e6;
  display: grid;
  grid-template-columns: 2fr 1fr;
  column-gap: 14px;

  img {
    height: 5vh;
    margin-left: 40px;
    padding-left: 40px;
  }
`;

export const NavContent = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  a {
    text-decoration: none;
    color: #551a8b;

    margin-left: 30px;
  }

  button {
    border: none;
    color: #551a8b;
    background-color: transparent;
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-left: 80px;

  img {
    width: 56px;
    height: 56px;
    border-radius: 50%;
  }

  div {
    display: flex;
    flex-direction: column;
    margin-left: 16px;
    line-height: 24px;

    span {
      color: #f4ede8;
    }

    a {
      text-decoration: none;
      color: #8257e5;

      &:hover {
        opacity: 0.8;
      }
    }
  }
`;

export const Content = styled.main`
  max-width: 1120px;
  margin: 64px auto;
  display: flex;
  justify-content: center;
`;

export const Section = styled.section`
  margin-top: 36px;

  > strong {
    color: #999591;
    font-size: 40px;
    line-height: 26px;
    display: block;
    padding-bottom: 16px;
    margin-bottom: 16px;
  }

  p {
    color: #999591;
    margin-bottom: 80px;
  }
`;
