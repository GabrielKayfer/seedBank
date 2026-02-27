import styled from "styled-components";
import { colors } from "../../styles/colors";

export const HeaderContainer = styled.header`
    background-color: ${colors.white};
    border-radius: 99px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);

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

export const Title = styled.h1`
    color: ${colors.PrimaryPurple};

    span {
        color: ${colors.Emerald};
}
`

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

export const NavItem = styled.li`
    font-size: 0.95rem;
    color: ${colors.Dark};
    opacity: 0.85;
    cursor: pointer;

    &:hover {
        color: ${colors.Emerald};
        opacity: 1;
    }
`;

export const Actions = styled.div`
    display: flex;
    align-items: center;
    gap: 18px;

    a {
        text-decoration: none;
        font-weight: bold; 
        color: ${colors.Emerald};
    }

    button {
        border: none;
        border-radius: 99px;
        padding: 10px 14px;
        background: ${colors.PrimaryPurple};
        color: ${colors.white};
        font-weight: 600;
        cursor: pointer;

        &:hover {
        opacity: 0.92;
        }
    }
`;