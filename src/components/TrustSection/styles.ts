import styled from "styled-components";
import { colors } from "../../styles/colors";
import { titleBy, type Tone } from "../../styles/typography";

export const TrustContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 80px;
    align-items: center; 
    
    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
        flex-direction: column;
        padding: 0 20px;
}
        @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
        display: block;
        padding: 0;
}
    `

export const Text = styled.p`
    font-weight: 500;
    font-family: "Poppins", sans-serif;
    color: ${colors.PrimaryPurple};
    text-align: center;
    
    font-size: ${({ theme }) => theme.typography.fontSize.bodyLg};`

export const BrandingImg = styled.div`
    width: 100%;
    height: 600px;
    display: block;
    background-size: 250% auto;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 16px;
    
    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
        height: 200px;
        background-position: center;
        background-size: cover;
}`

export const TextContainer = styled.section`
    display: flex;
    flex-direction: column;
    gap: 60px;
    align-items: center;
    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
        margin-bottom: 20px;
}
    `

export const Title = styled.h2<{ $tone?: Tone }>`
    ${({ $tone = "PrimaryPurple" }) => titleBy("g", $tone)};
    text-align: center;
`;
