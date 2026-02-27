import styled from "styled-components";
import { colors } from "../../styles/colors";

export const InviteSectionContainer = styled.section`
    display: grid;
    gap: 60px;
    justify-items: center;
    padding: 80px 0;
    min-height: 500px;

button {
        border: none;
        border-radius: 99px;
        padding: 10px 14px;
        background: ${colors.PrimaryPurple};
        color: ${colors.white};
        font-weight: 800;
        font-size: 18px;
        cursor: pointer;
        height: 80px;
        width: 180px;

        &:hover {
        opacity: 0.92;
        }
    }`

export const Title = styled.h2`
    font-weight: 900;
    font-size: 34px;
    font-style: italic;
    font-family: "Inter", sans-serif;
    color: ${colors.PrimaryPurple};
    text-align: center;`

export const Text = styled.p`
    font-size: 20px;
    font-weight: 500;
    font-family: "Poppins", sans-serif;
    color: ${colors.PrimaryPurple};
    text-align: center;`

