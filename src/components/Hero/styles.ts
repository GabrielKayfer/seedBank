import styled from "styled-components";
import { colors } from "../../styles/colors";
import { titleBy, type Tone } from "../../styles/typography";

export const HeroSection = styled.section`
    padding: 80px 0;
    padding-bottom: 10px;`

export const HeroContent = styled.div`
    width: 100%;
    height: 600px;
    display: block;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 16px;
    background-color: ${colors.white};
    `

export const Title = styled.h2<{ $tone?: Tone }>`
    ${({ $tone = "PrimaryPurple" }) => titleBy("g", $tone)};
    padding-left: 30px;
    padding-top: 30px;
    
    span {
        color: ${colors.Emerald};
    }
`
