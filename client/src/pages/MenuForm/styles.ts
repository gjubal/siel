import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.div``;

export const Content = styled.main`
  max-width: 1120px;
  margin: 48px auto;
  display: flex;
  justify-content: center;
`;

export const Section = styled.section`
  margin-top: 4.8rem;
  width: 800px;

  main {
    background: #ffffff;
    width: 100%;
    max-width: 800px;
    border: 1px solid #dce2e5;
    border-radius: 16px;
    margin: -3.2rem auto 3.2rem;
    padding-top: 2.4rem;
    overflow: hidden;

    fieldset {
      border: 0;
      padding: 0 2.4rem;

      + fieldset {
        margin-top: 6.4rem;
      }

      h2 {
        font-size: 14px;
        font-weight: 400;
        margin-top: 40px;
        margin-bottom: 18px;
      }

      button {
        margin-bottom: 1.2rem;
        width: 20%;
        background-color: transparent;
        border: none;
        border-bottom: 1px solid #69cf9c;
        padding-bottom: 10px;
      }

      legend {
        font-weight: 700;
        font-size: 1.6rem;
        color: #617480;
        margin-bottom: 2.4rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        padding-bottom: 1.6rem;
        border-bottom: 1px solid #6c6c70;

        button {
          background: none;
          border: 0;
          color: #8257e5;
          font-weight: 700;
          font-size: 0.8rem;
          transition: color 0.2s;

          &:hover {
            background: ${shade(0.2, '#8257E5')};
          }
        }
      }
    }

    footer {
      padding: 4rem 2.4rem;
      background: #e0caff;
      border-top: 1px solid #6c6c70;
      margin-top: 6.4rem;

      p {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1rem;
        line-height: 2.4rem;
        color: #9c98a6;

        img {
          margin-right: 2rem;
        }
      }

      div {
        display: flex;
        justify-content: center;

        button {
          width: 40%;
          height: 2.6rem;
          background: #8257e5;
          color: #fff;
          border: 0;
          border-radius: 0.8rem;
          font-weight: 700;
          font-size: 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          transition: background-color 0.2s;
          margin-top: 3.2rem;

          &:hover {
            background: ${shade(0.2, '#8257E5')};
          }
        }
      }
    }
  }
`;

export const CheckboxGrid = styled.div`
  display: flex;
  flex-direction: row;
`;
