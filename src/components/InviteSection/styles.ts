import styled from "styled-components";
import { colors } from "../../styles/colors";
import { titleBy, type Tone } from "../../styles/typography";

export const InviteSectionContainer = styled.section`
    display: grid;
    gap: 60px;
    justify-items: center;
    padding: 80px 0;
    min-height: 500px;
    }`

export const Title = styled.h2<{ $tone?: Tone }>`
    ${({ $tone = "PrimaryPurple" }) => titleBy("m", $tone)};
    text-align: center;
`;

export const Text = styled.p`
    font-size: 20px;
    font-weight: 500;
    font-family: "Poppins", sans-serif;
    color: ${colors.PrimaryPurple};
    text-align: center;`

