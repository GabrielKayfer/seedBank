import styled from "styled-components";
import { colors } from "../../styles/colors";
import { titleBy, type Tone } from "../../styles/typography";

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
    `

export const Title = styled.h2<{ $tone?: Tone }>`
    ${({ $tone = "PrimaryPurple" }) => titleBy("m", $tone)};
    text-align: center;
`;
