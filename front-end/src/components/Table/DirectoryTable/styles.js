import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  min-height: 100%;
  display: flex;
  flex: 1;
  flex-direction: column;
`;
export const IconContent = styled.div`
  display: flex;
  align-items: center;
  div {
    margin-right: 10px;
    max-width: 180px;
    width: 100%;
  }
`;
export const StyledLink = styled(Link)`
  text-decoration: none;

  color: ${({ theme }) => theme.colors.text};
`;
export const Text = styled.p``;
