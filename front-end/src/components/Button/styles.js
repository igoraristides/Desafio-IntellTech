import styled, { css } from "styled-components";

export const Container = styled.button`
  -webkit-appearance: none;
  cursor: pointer;

  height: ${({ height }) => height || 50}px;

  display: flex;
  align-items: center;
  justify-content: ${({ justifyContent }) => justifyContent || "center"};
  background: ${({ theme }) => theme.colors.secundary};
  padding: 10px 30px;
  border: 2px solid #9163ae;

  border-radius: 100px;

  .buttonIcon {
    display: flex;
    align-items: center;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.text};
    svg {
      width: ${({ iconSize }) => iconSize || 24}px;
      height: ${({ iconSize }) => iconSize || 24}px;

      ${({ iconPosition }) => {
        if (iconPosition === "left")
          return css`
            margin-right: 16px;
          `;

        if (iconPosition === "right")
          return css`
            margin-left: 16px;
          `;
      }}
    }
  }

  width: 100%;
`;
