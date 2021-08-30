import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin-bottom: 10px;
`;

export const Field = styled.input`
  -webkit-appearance: none;

  font-size: 16px;

  padding: 14px;
  margin-bottom: 10px;

  border-radius: 7px;
  transition: border-color 200ms linear;

  border: 1px solid #e5e4e6;
  box-sizing: border-box;

  :hover,
  :focus {
    border-color: #9163ae;
  }

  &::placeholder {
    font-size: 16px;
    color: #aeaeb2;
  }

  width: 100%;
`;

export const Label = styled.h1`
  ${({ size }) => (size ? `font-size: ${size}px;` : "font-size: 15px;")}
  color: ${({ theme }) => theme.colors.title};
  margin-bottom: 5px;
  font-weight: bold;
`;
