import styled from "styled-components";
import { colors } from "../../styles/colors";

export const TrustContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 80px;
    align-items: center;`

export const Text = styled.p`
    font-size: 20px;
    font-weight: 500;
    font-family: "Poppins", sans-serif;
    color: ${colors.PrimaryPurple};
    text-align: center;`

export const BrandingImg = styled.div`
    width: 100%;
    height: 600px;
    display: block;
    background-size: 250% auto;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 16px;`

export const TextContainer = styled.section`
    display: flex;
    flex-direction: column;
    gap: 60px;
    align-items: center;
    
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
    }`

export const Title = styled.h2`
font-weight: 900;
font-size: 34px;
font-style: italic;
font-family: "Inter", sans-serif;
color: ${colors.PrimaryPurple};`
