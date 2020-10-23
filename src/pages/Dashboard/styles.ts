import styled from 'styled-components';

import bgUol from '../../assets/images/uol.png';

export const Container = styled.div`
  height: 100vh;
  background: url(${bgUol}) no-repeat;
  background-position-x: left;
  background-position-y: bottom;

  @media (max-width: 600px) {
    background: #fff;
    padding-top: 10px;
  }
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  margin: 25px 40px 0 40px;
  color: #222;

  div.time {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    strong {
      font-weight: bold;
      font-size: 144px;
      line-height: 132px;
    }

    span {
      font-size: 14px;
      line-height: 18px;
    }
  }

  div.city {
    display: flex;
    flex-direction: column;

    > span {
      font-size: 14px;
      line-height: 18px;
      color: #222222;
    }

    div.weather {
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        margin-right: 15px;
      }

      strong {
        font-size: 48px;
        font-weight: bold;
        line-height: 61px;
        color: #222222;
      }
    }
  }

  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: center;

    div.time {
      strong {
        font-weight: bold;
        font-size: 60px;
        line-height: 80px;
      }

      span {
        font-size: 16px;
        line-height: 20px;
      }
    }
    div.city {
      display: none;
    }
  }
`;

export const Content = styled.article`
  margin-right: 134px;
  text-align: right;
  margin-top: 100px;

  strong {
    color: #c12d18;
    font-weight: 700;

    &.initial {
      font-size: 36px;
      line-height: 46px;
    }

    &.standard {
      font-size: 64px;
      line-height: 81px;
    }
  }

  p {
    font-size: 24px;
    line-height: 30px;
    color: #222222;
  }

  @media (max-width: 600px) {
    margin-right: 0px;
    text-align: left;
    margin-top: 10px;
    padding: 10px 30px;

    strong {
      &.initial {
        font-size: 20px;
        line-height: 26px;
      }

      &.standard {
        font-size: 25px;
        line-height: 42px;
      }
    }

    p {
      font-size: 18px;
      line-height: 30px;
    }
  }
`;

export const Footer = styled.footer`
  height: 100px;
  background: linear-gradient(90.16deg, #33383d 0%, #1c1d20 100%);
  position: fixed;
  bottom: 0;
  width: 100%;

  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;

  div.instructions {
    width: 50%;

    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;

    p {
      max-width: 541px;
      text-align: right;

      font-size: 12px;
      line-height: 15px;
    }

    &::after {
      content: '';
      background: #ffffff;
      display: inline-block;
      width: 1px;
      height: 61px;
      margin-left: 35px;
    }
  }

  div.application {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-right: 140px;

    > span {
      width: 90px;
      font-size: 14px;
      text-align: right;
    }

    div.seconds {
      display: flex;
      flex-direction: column;
      align-items: center;

      margin-left: 33px;

      strong {
        font-size: 48px;
        line-height: 40px;
      }

      span {
        font-size: 14px;
        line-height: 18px;
      }
    }
  }

  div.actions {
    display: flex;
    align-items: center;
    justify-content: center;

    button {
      width: 131px;
      height: 100px;
      padding: 0 20px;

      font-size: 12px;
      line-height: 15px;
      text-align: center;

      border: 0;

      &.continue {
        background: #ffffff;
        font-weight: 400;
        color: #c13216;
        border: 2px solid #ffffff;
      }

      &.logout {
        background: linear-gradient(90.16deg, #33383d 0%, #1c1d20 100%);
        font-weight: 700;
        color: #ffffff;
      }
    }
  }

  @media (max-width: 600px) {
    display: block;
    height: 80px;

    div.instructions {
      display: none;
    }

    div.application {
      display: none;
    }

    div.actions {
      button {
        flex: 1;
        font-size: 16px;
        line-height: 20px;
      }
    }
  }
`;
