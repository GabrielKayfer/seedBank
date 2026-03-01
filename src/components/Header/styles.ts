import styled from "styled-components";
import { colors } from "../../styles/colors";
import { titleBy, type Tone } from "../../styles/typography";

export const HeaderContainer = styled.header`
    background-color: ${colors.white};
    border-radius: 99px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    position: sticky;
    top: 20px;
    z-index: 1;
    min-height: 80px;
    display: flex;
    align-items: center;
    justify-self: center;  
    max-width: 1240px;
    width: 100%;
`;

export const HeaderContent = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 12px 16px;
`;

export const Title = styled.h1<{ $tone?: Tone }>`
  ${({ $tone = "white" }) => titleBy("p", $tone)};

  span {
    color: ${({ theme }) => theme.colors.Emerald};
    }
`;

export const RightGroup = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`;

export const NavList = styled.ul`
    display: flex;
    align-items: center;
    gap: 12px;

    margin: 0;
    padding: 0;
    list-style: none;
`;

export const NavItem = styled.a`
    font-size: 0.95rem;
    color: ${colors.Dark};
    opacity: 0.85;
    cursor: pointer;
    text-decoration: none;

    &:hover {
        color: ${colors.Emerald};
        opacity: 1;
    }
`;

export const Actions = styled.div`
    display: flex;
    align-items: center;
    gap: 18px;
`;