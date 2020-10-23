import styled, { css } from 'styled-components';

interface ContainerProps {
  isErrored: boolean;
  isFocused: boolean;
  isFilled: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  & + div {
    margin-top: 33px;
  }

  input {
    width: 380px;
    height: 60px;
    background: #26292c;
    border: 1px solid #ffffff;
    border-radius: 50px;

    padding: 0 70px 0 20px;

    &::placeholder {
      color: #e0e0e0;
    }

    ${props =>
      props.isErrored &&
      css`
        border-color: #e9b425;
      `}
  }

  img {
    margin-left: 18px;
  }
`;
