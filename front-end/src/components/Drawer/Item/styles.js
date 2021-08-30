import styled, { css } from "styled-components";

import { theme } from "../../../styles/theme";

export const Label = styled.div`
  margin: auto;
  text-align: left;
  font-weight: 400;
  font-size: 16px;
  margin-left: 15px;
  display: inline-block;
  color: ${theme.colors.text};
  ${({ active }) =>
    active &&
    css`
      color: ${({ theme }) => theme.colors.title};
    `}
`;

export const IconSelected = styled.div`
  width: 35px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ active }) =>
    active &&
    css`
      background: ${({ theme }) => theme.colors.secundary};
      right: -10;
      border-radius: 100%;
    `}
`;

export const Button = styled.button`
  background-color: transparent;
  -webkit-appearance: none;
  text-align: left;

  border: 0;
  padding: 0px 15px;

  width: 100%;
  cursor: pointer;
  display: flex;
  align-items: center;
`;
