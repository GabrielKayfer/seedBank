import styled from "styled-components";
import { colors } from "../../styles/colors";
import { titleBy } from "../../styles/typography";

export const AuthHeaderContainer = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 20px 0 0;
`;

export const AuthBar = styled.div`
  width: calc(100% - 32px);
  max-width: 1240px;
  min-height: 72px;
  display: flex;
  align-items: center;
  padding: 0 16px;
  border-radius: 99px;
  background: #ffffff;
  border: 1px solid rgba(45, 114, 143, 0.12);
  box-shadow: 0 16px 40px rgba(18, 47, 59, 0.08);
  backdrop-filter: blur(14px);

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 100%;
    padding: 0 48px;
  }
`;

export const AuthHeaderContent = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 12px 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const BrandLink = styled.a`
  text-decoration: none;
`;

export const Brand = styled.h1`
  ${titleBy("p", "PrimaryPurple")};
  margin: 0;

  span {
    color: ${colors.Emerald};
  }
`;

export const AuthLink = styled.a`
  color: ${colors.PrimaryPurple};
  text-decoration: none;
  font-size: 0.96rem;
  font-weight: 600;

  &:hover {
    color: ${colors.Emerald};
  }
`;

