import styled from "styled-components";
import { colors } from "../../styles/colors";
import { titleBy, type Tone } from "../../styles/typography";

export const HeaderContainer = styled.header`
  position: fixed;
  top: 20px;
  left: 0;
  width: 100%;
  z-index: 10;

  display: flex;
  justify-content: center;
`;

export const HeaderBar = styled.div`
  width: calc(100% - 32px);
  max-width: 1240px;

  background-color: ${colors.white};
  border-radius: 99px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.08);

  min-height: 72px;

  display: flex;
  align-items: center;

  padding: 0 16px;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 100%;
    padding: 0 48px;
  }
`;

export const HeaderContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 12px 0;
`;

export const Title = styled.h1<{ $tone?: Tone }>`
  ${({ $tone = "white" }) => titleBy("p", $tone)};
  margin: 0;

  white-space: nowrap;

  span {
    color: ${({ theme }) => theme.colors.Emerald};
  }
`;

export const RightGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  min-width: 0;
`;

export const NavList = styled.ul`
  display: none;
  align-items: center;
  gap: 12px;

  margin: 0;
  padding: 0;
  list-style: none;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: flex;
  }
`;

export const NavItem = styled.a`
  font-size: 0.95rem;
  color: ${colors.Dark};
  opacity: 0.85;
  cursor: pointer;
  text-decoration: none;
  white-space: nowrap;

  &:hover {
    color: ${colors.Emerald};
    opacity: 1;
  }
`;

export const Actions = styled.div`
  display: none;
  align-items: center;
  gap: 14px;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: flex;
  }
`;

export const Hamburger = styled.button`
  width: 32px;
  height: 24px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4px;

  background: transparent;
  border: 0;
  padding: 0;
  cursor: pointer;

  span {
    display: block;
    height: 2px;
    background-color: ${colors.PrimaryPurple};
    width: 100%;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

export const MobileMenuOverlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 9;
  background: rgba(18, 47, 59, 0.2);
  padding: 104px 16px 16px;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

export const MobileMenu = styled.div`
  width: min(100%, 420px);
  margin: 0 auto;
  padding: 20px;
  border-radius: 24px;
  background: ${colors.white};
  box-shadow: 0 24px 48px rgba(0, 0, 0, 0.14);

  display: grid;
  gap: 12px;
`;

export const MobileMenuItem = styled.a`
  display: block;
  width: 100%;
  padding: 14px 16px;
  border-radius: 16px;
  background: ${({ theme }) => theme.colors.whiteCold};
  color: ${colors.Dark};
  text-decoration: none;
  font-weight: 600;

  &:hover {
    color: ${colors.PrimaryPurple};
  }
`;

export const MobileMenuActions = styled.div`
  display: grid;
  gap: 12px;
  margin-top: 4px;
`;
