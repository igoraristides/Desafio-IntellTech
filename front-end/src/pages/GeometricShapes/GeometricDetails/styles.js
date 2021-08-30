import styled from "styled-components";

export const Container = styled.div`
  min-height: 100%;
  display: flex;
  flex: 1;
  flex-direction: column;
`;

export const TitlePage = styled.h1`
  font-size: 1.7rem;
  color: ${({ theme }) => theme.colors.title};
  margin-bottom: 40px;
`;

export const TitleCard = styled.h1`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.title};
  text-align: center;
  margin-bottom: 40px;
`;

export const Card = styled.div`
  border-radius: 20px;
  padding: 20px;
  background: #fff;
`;
export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled(TitleCard)`
  font-size: 15px;
  margin-bottom: 5px;
  text-align: start;
`;
export const Text = styled.h1`
  font-size: 13px;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 5px;
`;
