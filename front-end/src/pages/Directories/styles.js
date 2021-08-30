import styled, { css } from "styled-components";

export const Container = styled.div`
  min-height: 100%;
  display: flex;
  flex: 1;
  flex-direction: column;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const TitlePage = styled.h1`
  font-size: 1.7rem;
  color: ${({ theme }) => theme.colors.title};
  margin-bottom: 40px;
`;

export const TitleCard = styled.h1`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.title};
  margin-bottom: 40px;
`;

export const Card = styled.div`
  border-radius: 20px;
  padding: 20px;
  background: #fff;
`;
