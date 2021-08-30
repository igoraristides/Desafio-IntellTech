import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin-bottom: 10px;

  ${({ fullWidth }) => {
    if (fullWidth)
      return css`
        max-width: none;
      `;

    return css`
      max-width: 300px;
    `;
  }}

  .react-select__value-container {
    padding: 8px;
  }
`;

export const Label = styled.h1`
  display: inline-block;
  width: 100%;
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 5px;

  ${({ color }) => {
    return css`
      color: ${color};
    `;
  }}
`;

export const Error = styled.span`
  color: #ff3b2f;
  font-size: 12px;
`;
