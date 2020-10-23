import styled from 'styled-components';

import bgImg from '../../assets/images/bgImg.png';
import logo from '../../assets/images/logoBranco.png';

export const Container = styled.div`
  height: 100vh;
  display: flex;

  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;

    /* Aplicando o gradiente no container superior */
    background: linear-gradient(180deg, #33383d 0%, #1c1d20 100%);
  }
`;

export const Content = styled.div`
  width: 100%;
  max-width: 960px;

  padding-left: 287px;
  font-weight: normal;
  background: linear-gradient(180deg, #33383d 0%, #1c1d20 100%);

  display: flex;
  flex-direction: column;

  h1 {
    font-weight: normal;
    margin-top: 197px;
    font-size: 60px;
  }
  p {
    max-width: 300px;
    margin-top: 17px;

    font-size: 16px;
    line-height: 20px;
  }

  form {
    width: 100%;
    max-width: 415px;
    margin-top: 135px;

    display: flex;
    flex-direction: column;

    h2 {
      margin-bottom: 32px;
      font-size: 30px;
      font-weight: normal;
    }

    span {
      max-width: 283px;
      margin: 28px auto -68px;

      font-size: 16px;
      line-height: 20px;
      color: #e9b425;
      text-align: center;
    }

    button {
      width: 380px;
      height: 67px;

      margin-top: 115px;
      font-weight: bold;

      background: linear-gradient(90deg, #ff2d04 0%, #c13216 100%);
      box-shadow: inset 5px 5px 15px rgba(0, 0, 0, 0.15);
      border-radius: 50px;
      border-color: #ff2d04;

      font-size: 18px;
      color: #ffffff;
    }
  }

  @media (max-width: 600px) {
    height: 100vh;
    padding: 20px;
    text-align: flex-start;

    /* Inclusão do logo */
    background: url(${logo}) no-repeat center 30px;
    background-size: 50%;

    h1 {
      margin-top: 70px;
    }
    p {
      max-width: 100%;
      font-size: 18px;
      line-height: 28px;
    }

    form {
      margin-top: 30px;

      h2 {
        margin-bottom: 32px;
      }

      button {
        width: 100%;
        margin-top: 90px;
      }
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${bgImg}) no-repeat center;
  background-size: cover;

  img {
    display: block;
    margin: 35px auto 0;
  }

  @media (max-width: 600px) {
    display: none;
  }
`;
